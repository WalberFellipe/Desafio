<script>
  import axios from 'axios';
  import Pagination from '../../components/Pagination.svelte';
  import Modal from '../../components/Modal.svelte';

  let tasks = [];
  let currentPage = 1;
  const tasksPerPage = 5;
  let totalTasks = 0;
  let totalPages = 1;
  let showModal = false;
  let selectedTask = { id:'', name: '', description: '', status: { key: 'TO_DO' } };

  async function fetchTasks(page = 1) {
    try {
      const response = await axios.get(`/tasks?page=${page}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      tasks = response.data.data;
      totalTasks = response.data.total;
      totalPages = Math.ceil(totalTasks / tasksPerPage);
      currentPage = page;
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  }

  function handlePageChange(page) {
    fetchTasks(page);
  }

  function getStatusColor(statusKey) {
    switch (statusKey) {
      case 'TO_DO': return 'red';
      case 'IN_PROGRESS': return '#bbbb56';
      case 'DONE': return 'green';
      default: return 'black';
    }
  }

  function openModal(task = { name: '', description: '', status: { key: 'TO_DO' } }) {
    selectedTask = task;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
    selectedTask = { name: '', description: '', status: { key: 'TO_DO' } };
  }

  async function saveTask() {
    try {
        if (selectedTask?.id) {
            await axios.put(`/tasks/${selectedTask.id}`, selectedTask, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
        } else {
            await axios.post('/tasks', selectedTask, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
        }
        fetchTasks(currentPage);
        closeModal();
    } catch (error) {
        console.error('Error saving task:', error);
    }
  }

  async function deleteTask(taskId) {
    try {
      await axios.delete(`/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      fetchTasks(currentPage);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }

  fetchTasks(currentPage);
</script>

<table>
  <thead>
    <tr>
      <th>Nome da tarefa</th>
      <th>Data</th>
      <th>Situação</th>
      <th>Ações</th>
    </tr>
  </thead>
  <tbody>
    {#each tasks as task}
      <tr>
        <td>{task.name}</td>
        <td>{new Date(task.created_at).toLocaleDateString()}</td>
        <td style="color: {getStatusColor(task.status.key)}">{task.status.description}</td>
        <td>
          <button class="edit_button" on:click={() => openModal(task)}>Editar</button>
          <button class="delete_button" on:click={() => deleteTask(task.id)}>X</button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<button on:click={() => openModal()}>Adicionar nova tarefa</button>

<Pagination {currentPage} {totalPages} onPageChange={handlePageChange} />

{#if showModal}
  <Modal 
    {showModal} 
    onClose={closeModal} 
    task={selectedTask}
    onSave={saveTask}
  />
{/if}

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  th {
    background-color: #f4f4f4;
  }
  tr {
    cursor: pointer;
  }
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  button {
    margin: 20px 0;
    padding: 10px 20px;
    border: none;
    background-color: #00695c;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #004d40;
  }
  .delete_button {
    margin: 20px 0;
    padding: 10px 10px;
    border: none;
    background-color: #a51a2c;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    
  }
  .delete_button:hover {
      background-color: #70111d;
    }

  .edit_button {
    margin: 20px 0;
    padding: 10px 10px;
    border: none;
    background-color: #205ba8;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  .edit_button:hover {
      background-color: #131975;
    }

</style>
