<div class="app">
  <main>
    <Sidebar/>
  </main>
  
  <aside>
    <Searchbar/>
  
  </aside>
</div>

<style>

  .app {
    width: 1280px;
    height: 720px;
    background-color: var(--primary-500);
    display: grid;
    grid-template: 
      "main side" auto / 2fr 1fr;
    gap: 16px;
    border-radius: var(--radius-l);
  }

  main {
    grid-area: main;
    background-color: var(--primary-600);
    border-radius: var(--radius-l) 0 0 var(--radius-l);
    grid-template: 
      "sidebar content" auto / 1fr 15fr;
  }

  main {
    padding: 24px 0 24px 24px;
  }

  aside {
    padding: 24px 24px 24px 0;
  }

  aside {
    grid-area: side;
    grid-template:
      "searchbar" 40px
      "side-content";
  }

  .app, main, aside {
    display: grid;
  }

</style>

<script lang="ts">
  import Searchbar from "./lib/Searchbar.svelte";
  import Sidebar from "./lib/Sidebar.svelte";
</script>