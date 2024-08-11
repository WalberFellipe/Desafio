<script>
  import axios from 'axios';
  import { onDestroy, onMount } from 'svelte';

  axios.defaults.baseURL = 'http://localhost/api';

  let isRefreshing = false;
  let failedQueue = [];
  let refreshTimeout;
  let token = '';

  const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    });
    failedQueue = [];
  };

  const refreshToken = () => {
    if (isRefreshing) return;

    isRefreshing = true;

    axios.post('/refresh', {}, { withCredentials: true })
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        processQueue(null, data.token);
        refreshTimeout = setTimeout(refreshToken, 17000);
      })
      .catch(err => {
        processQueue(err, null);
      })
      .then(() => {
        isRefreshing = false;
      });
  };

  onMount(() => {
    token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    refreshToken();
  });

  onDestroy(() => {
    clearTimeout(refreshTimeout);
  });

  axios.interceptors.response.use(
    resp => resp,
    error => {
      const originalRequest = error.config;
      if (error.response.status === 401 && originalRequest.url === '/refresh') {
        return Promise.reject(error);
      }

      if (error.response.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          }).then(token => {
            originalRequest.headers['Authorization'] = 'Bearer ' + token;
            return axios(originalRequest);
          }).catch(err => {
            return Promise.reject(err);
          });
        }

        originalRequest._retry = true;
        return refreshToken();
      }

      return Promise.reject(error);
    }
  );
</script>

<slot />
