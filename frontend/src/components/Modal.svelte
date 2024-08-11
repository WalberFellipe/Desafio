<script>
  export let showModal = false;
  export let onClose = () => {};
  export let task = { id: '', name: '', description: '', status: { key: 'TO_DO' } };
  export let onSave = () => {}; 


  const isNewTask = !task.id;

  function closeModal() {
    onClose();
  }

  function saveTask() {
      onSave()
      closeModal();
  }
</script>

{#if showModal}
  <div class="modal-overlay">
    <div class="modal-content">
      <button class="close-button" on:click={closeModal}>X</button>
      <h2>{task.id ? 'Editar tarefa' : 'Adicionar Tarefa'}</h2>
      <form class="modal-items" on:submit|preventDefault={saveTask}>
        {#if !isNewTask}
          <label>
            ID:
            <input class="id_input" type="text" bind:value={task.id} placeholder="Task ID" readonly />
          </label>
        {/if}
        <label>
          Nome da tarefa:
          <input type="text" bind:value={task.name} placeholder="Task Name" />
        </label>
        <label>
          Descrição:
          <textarea bind:value={task.description} placeholder="Description"></textarea>
        </label>
        <label>
          Status:
          <select bind:value={task.status}>
            <option value="1">Pendente</option>
            <option value="2">Em Andamento</option>
            <option value="3">Concluída</option>
          </select>
        </label>
        <button type="submit">{task.id ? 'Salvar alterações' : 'Adicionar Tarefa'}</button>
      </form>
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 80vw;
    height: 40vh;
    position: relative;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #00695c;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

  input {
    width: 99%;
    border-radius: 8px;
    padding: 8px;
    border: 1px solid;
  }

  .id_input {
    cursor: no-drop;
  }

  textarea {
    width: 99%;
    height: 56px;
    border-radius: 8px;
    padding: 8px;
    border: 1px solid;
  }

  select {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid;
  }

  label {
    display: flex;
    flex-direction: column;
    justify-items: center;
    gap: 15px;
    margin-bottom: 16px;
    font-size: 16px;
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
</style>
