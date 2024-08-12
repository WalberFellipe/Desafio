<script>
    import { goto } from '$app/navigation';
    import axios from 'axios';

    let email = '', password = ''; 

    let submit = async () => {
        if (email == '' || password == '') {
            return;
        }
        const response = await axios.post('/login', {
            email,
            password
        }, {withCredentials: true});

        if (response.status == 200) {
            localStorage.setItem('token', response.data.token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
            goto('/tasks');
        }
    }
</script>

<div id="login-page-container">
    <div id="login-box">
        <div id="logo-container">
            <img src="/src/assets/images/Logo-Diagonal.png" alt="Logo" />
        </div>
        <div id="form-container">
            <p>Email</p>
            <input type="text" bind:value={email} />
            <p>Senha</p>
            <input type="password" bind:value={password} />
            <button on:click={submit}>Entrar</button>
        </div>
    </div>
</div>

<style>
    #login-page-container {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background: url('/src/assets/images/Background-Diagonal.png') no-repeat center center fixed;
        background-size: cover;
    }

    #login-box {
        display: flex;
        flex-direction: column;
        width: 500px;
        padding: 20px;
        border-radius: 22px;
        background-color: #FDE8CD;
        text-align: center;
    }

    #logo-container img {
        width: 200px;
        height: auto;
        margin-bottom: 20px;
    }

    #form-container {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    #form-container p {
        color: black;
        margin: 0;
    }

    #form-container input {
        width: 100%;
        height: 30px;
        border-radius: 7px;
        padding: 5px;
        border: 1px solid #ddd;
    }

    #form-container button {
        width: 100px;
        height: 30px;
        border-radius: 5px;
        background-color: #00695c;
        color: white;
        border: none;
        cursor: pointer;
    }

    #form-container button:hover {
        background-color: #004d40;
    }

    #register-link {
        margin-top: 20px;
    }

    #register-link a {
        color: aliceblue;
        text-decoration: none;
    }

    #register-link a:hover {
        text-decoration: underline;
    }
</style>
