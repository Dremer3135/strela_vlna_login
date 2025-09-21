<script lang="ts">
  import { pb } from "./pocketbase";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let email = "";
  let password = "";
  let passwordConfirm = "";
  let school = "";
  let error = "";
  export let type: "login" | "register" = "login";

  async function handleInitialSubmit() {
    error = "";
    try {
      await pb.collection("teachers").authWithPassword(email, password);
      // Auth is successful, authStore will update, App.svelte will react.
      dispatch("close");
    } catch (err: any) {
      if (err.status === 400) {
        error = "Zadane udaje nesedi";
      } else {
        error = "Failed to authenticate. Please check your credentials.";
      }
    }
  }

  async function handleRegisterSubmit() {
    error = "";
    if (password !== passwordConfirm) {
      error = "Passwords do not match.";
      return;
    }

    try {
      await pb.collection("teachers").create({
        email,
        password,
        passwordConfirm,
        school,
      });

      // After creating, log them in
      await pb.collection("teachers").authWithPassword(email, password);
      dispatch("close");
    } catch (err: any) {
      console.error("Registration Error:", err);
      error = "Failed to register. Please try again.";
    }
  }
</script>

<div class="auth-modal-backdrop" on:click={() => dispatch("close")}>
  <div class="auth-modal-content" on:click|stopPropagation>
    {#if type === "login"}
      <form on:submit|preventDefault={handleInitialSubmit}>
        <h2>Prihlasit se</h2>
        <input type="email" placeholder="Email" bind:value={email} required class="email"/>
        <input
          type="password"
          placeholder="Heslo"
          bind:value={password}
          required
          class="password"
        />
        <button type="submit">Pokracovat</button>
      </form>
    {:else if type === "register"}
      <form on:submit|preventDefault={handleRegisterSubmit}>
        <h2>Registrovat se</h2>
        <input type="email" bind:value={email} 
          placeholder="email"
          class="email"
        />
        <input
          type="password"
          placeholder="Heslo"
          bind:value={password}
          required
          class="password"
        />
        <input
          type="password"
          placeholder="Podtvrdte Heslo"
          bind:value={passwordConfirm}
          required
          class="password-again"
        />
        <input type="text" placeholder="Skola" bind:value={school} required class="school" />
        <button type="submit">Registrovat</button>
      </form>
    {/if}
    {#if error}
      <p class="error">{error}</p>
    {/if}
  </div>
</div>

<style>
  .auth-modal-backdrop {
    all: unset;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }
  .auth-modal-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    color: #333;
    width: 450px;
  }

  h2 {
    margin-top: 0px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 20px 10px;
  }
  .error {
    color: red;
  }

  form input {
    all: unset;
    padding: 10px 5px;
  }
  form input:active {
    border-bottom: 2px black;
  }

  .email:hover, .password:hover, .password-again:hover, .school:hover {
    background-color: #f8f8f8;
  }

  .email:focus {
    outline: 3px dashed #EBAD00;
  }
  .password:focus {
    outline: 3px dashed #EB6E00;
  }
  .password-again:focus {
    outline: 3px dashed #EB0072;
  }
  .school:focus {
    outline: 3px dashed #9500EB;
  }
</style>
