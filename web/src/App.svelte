<script lang="ts">
  import { pb } from "./lib/pocketbase";
  import Navbar from "./lib/Navbar.svelte";
  import { authStore, contestsStore, fetchTeams } from "./lib/stores";
  import Contest_simple from "./lib/Contest_simple.svelte";
  import Auth from "./lib/Auth.svelte";
  import TeamsPanel from "./lib/TeamsPanel.svelte";
  import AddTeamModal from "./lib/AddTeamModal.svelte";
  import TeamDetailsModal from "./lib/TeamDetailsModal.svelte";
  import blocks_clumped from "./assets/blocks_clumped.svg";

  let showAuth = false;
  let authType: "login" | "register" = "login";
  let showTeamsPanel = false;
  let showAddTeam = false;
  let showTeamDetails = false;
  let selectedTeam: any = null;

  authStore.subscribe(value => {
      if (value) {
          fetchTeams(value.id);
      }
  });

</script>

<div id="app">
  <Navbar currentUser={$authStore} on:showAuth={(e) => {showAuth = true; authType = e.detail}} on:toggleTeamsPanel={() => (showTeamsPanel = !showTeamsPanel)} />
  
  {#if showAuth}
    <Auth on:close={() => (showAuth = false)} type={authType} />
  {/if}
<!-- 
  {#if showTeamsPanel}
    <TeamsPanel 
      on:close={() => (showTeamsPanel = false)} 
      on:showAddTeam={() => (showAddTeam = true)}
      on:showTeamDetails={(e) => {selectedTeam = e.detail; showTeamDetails = true;}}
    />
  {/if} -->
<!-- 
  {#if showAddTeam}
      <AddTeamModal on:close={() => (showAddTeam = false)} />
  {/if} -->

  {#if showTeamDetails}
      <TeamDetailsModal team={selectedTeam} on:close={() => (showTeamDetails = false)} />
  {/if}

  <div class="content-holder">
    <div class="logout-page">
      <h1 class="upcomming"><span class="anchor"><img src={blocks_clumped} class="blocks-clumped"></span> Nadcházející</h1>
      <div class="contests-list">
        {#each $contestsStore as contest}
          <Contest_simple {contest} />
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .contests-list {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;
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

    margin-bottom: 100px;
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
