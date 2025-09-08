<script lang="ts">
  import { pb } from "./pocketbase";
  import { createEventDispatcher, onMount } from "svelte";
  import { contestsStore, authStore } from "./stores";

  const dispatch = createEventDispatcher();

  let name = "";
  let player1email = "";
  let player2email = "";
  let player3email = "";
  let player4email = "";
  let player5email = "";
  let contest = "";
  let error = "";

  async function handleAddTeam() {
    error = "";
    if (!name || !contest) {
      error = "Team name and contest are required.";
      return;
    }

    try {
      await pb.collection("teams").create({
        name,
        player1email,
        player2email,
        player3email,
        player4email,
        player5email,
        contest,
        teacher: $authStore?.id,
      });
      dispatch("close");
    } catch (err) {
      console.error("Add Team Error:", err);
      error = "Failed to add team.";
    }
  }
</script>

<div class="modal-backdrop" on:click={() => dispatch("close")}>
  <div class="modal-content" on:click|stopPropagation>
    <h2>Add New Team</h2>
    <form on:submit|preventDefault={handleAddTeam}>
      <input type="text" placeholder="Team Name" bind:value={name} required />
      <select bind:value={contest} required>
        <option value="" disabled>Select a contest</option>
        {#each $contestsStore as c}
          <option value={c.id}>{c.name}</option>
        {/each}
      </select>
      <input type="email" placeholder="Player 1 Email" bind:value={player1email} />
      <input type="email" placeholder="Player 2 Email" bind:value={player2email} />
      <input type="email" placeholder="Player 3 Email" bind:value={player3email} />
      <input type="email" placeholder="Player 4 Email" bind:value={player4email} />
      <input type="email" placeholder="Player 5 Email" bind:value={player5email} />
      <button type="submit">Add Team</button>
    </form>
    {#if error}
      <p class="error">{error}</p>
    {/if}
  </div>
</div>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 102;
  }
  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    color: #333;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .error {
    color: red;
  }
</style>
