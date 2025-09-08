<script lang="ts">
  import { pb } from "./lib/pocketbase";
  import Navbar from "./lib/Navbar.svelte";
  import { authStore, contestsStore } from "./lib/stores";
  import Contest_simple from "./lib/Contest_simple.svelte";
  import Auth from "./lib/Auth.svelte";
  import blocks_clumped from "./assets/blocks_clumped.svg";

  let showAuth = false;

  function logout() {
    pb.authStore.clear();
  }
</script>

<div id="app">
  <Navbar currentUser={$authStore} on:showAuth={() => (showAuth = true)} />
  {#if showAuth}
    <Auth on:close={() => (showAuth = false)} />
  {/if}
  <div class="content-holder">
    {#if $authStore}
      <h1>Welcome, {$authStore.email}</h1>
      <button on:click={logout}>Logout</button>
      {:else}
      <div class="logout-page">
        <h1 class="upcomming"><span class="anchor"><img src={blocks_clumped} class="blocks-clumped"></span> Nadcházející</h1>
        <div class="contests-list">
          {#each $contestsStore as contest}
            <Contest_simple {contest} />
          {/each}
        </div>
    </div>
    {/if}
  </div>
</div>

<style>
  .contests-list {
    margin-top: 2rem;
    width: 100%;
  }

  .logout-page {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 80px;
    max-width: 1300px; 
    width: 100%;
    box-sizing: border-box;
  }

  .upcomming {
    font-family: "Fredoka";
    font-size: 50px;
    font-weight: bold;
    color: #002C5E;

    margin-bottom: 150px;
  }

  .content-holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .anchor {
    position: relative;
  }

  .blocks-clumped {
    position: absolute;
    top: 55px;
    left: -20px;
  }
</style>