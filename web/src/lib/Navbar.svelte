<script lang="ts">
    import logo from "../assets/strelavlna.svg";
    import for_teachers from "../assets/for_teachers.svg"
    import { pb } from "../lib/pocketbase";
    import { onMount, createEventDispatcher } from "svelte";

    export let currentUser;
    const dispatch = createEventDispatcher();

    function showAuth() {
        dispatch('showAuth');
    }

    onMount(() => {
        // console.log(currentUser && pb.authStore.isValid && currentUser?.verified);
        console.log(currentUser);
        // console.log(pb.authStore.isValid);
        // console.log(currentUser);
    })
</script>

<main>
    <img src={logo}>
    <div class="right-section">
        {#if currentUser && pb.authStore.isValid && currentUser?.verified}
            <button class="my_teams">Moje tymy</button>
        {:else}
            <img src={for_teachers}>
            <button class="register" on:click={showAuth}>Registrovat <span class="desaturated">nebo</span> Přihlásit</button>
        {/if}    
    </div>
</main>

<style>
    main {
        height: 120px;
        background-image: linear-gradient(to right, #003F88 0%, #33008B 100%);
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        padding-inline: 50px;

        box-sizing: border-box;
    }

    button.register {
        all: unset;

        text-align: center;
        max-width: 115px;

        font-family: 'Lexend';
        font-weight: bold;
        font-size: 16px;
        color: white;

        cursor: pointer;
    }
    button.register .desaturated {
        color: #9FA6D4;
    }

    button.my_teams {
        all: unset;

        text-align: center;
        max-width: 115px;

        font-family: 'Lexend';
        font-weight: bold;
        font-size: 16px;
        color: white;

        cursor: pointer;
    }

    .right-section {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>