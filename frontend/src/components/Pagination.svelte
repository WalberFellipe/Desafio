<script>
  export let currentPage = 1;
  export let totalPages = 1;
  export let onPageChange = (page) => {};

  function goToPage(page) {
      if (page > 0 && page <= totalPages) {
          onPageChange(page);
      }
  }
</script>

<div class="pagination">
  <button on:click={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
  {#each Array(totalPages).fill().map((_, i) => i + 1) as page}
      <button on:click={() => goToPage(page)} class:active={page === currentPage}>{page}</button>
  {/each}
  <button on:click={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>Próxima</button>
</div>

<style>
  .pagination {
      display: flex;
      justify-content: center;
      margin-top: 20px;
  }
  .pagination button {
      margin: 0 5px;
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      background-color: #007bff;
      color: white;
      cursor: pointer;
  }
  .pagination button.active {
      background-color: #0056b3;
  }
  .pagination button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
  }
</style>
