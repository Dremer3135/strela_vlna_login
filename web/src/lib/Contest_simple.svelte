<script lang="ts">
  import type { Contest } from "./types";
  import block_orange from "../assets/block_orange.svg";
  import block_yellow from "../assets/block_yellow.svg";
  import block_purple from "../assets/block_purple.svg";
  import block_pink from "../assets/block_pink.svg";

  import strela from "../assets/strela.svg";
  import vlna from "../assets/vlna.svg";

  export let contest: Contest;
</script>

<div class="contest-container">
  <img src={block_orange} alt="" class="block" id="block-orange" />
  <img src={block_yellow} alt="" class="block" id="block-yellow" />
  <img src={block_purple} alt="" class="block" id="block-purple" />
  <img src={block_pink} alt="" class="block" id="block-pink" />
  <div class="contest-name">{contest.name}</div>
  <div class="contest-type">{contest.type == "math" ? "Matematika" : "Fyzika"}</div>
  <div class="contest-dates">
    Online: {new Date(contest.onlineStart).toLocaleDateString()}
  </div>
  <img src={contest.type == "math" ? strela : vlna} class="contest-image">
</div>

<style>
  .contest-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f9f9f9;
    margin-bottom: 1rem;
    padding: 20px 30px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    color: #002c5e;
  }

  .block {
    position: absolute;
    animation: move_around 4s steps(1, end) infinite;
  }

  #block-orange {
    animation-delay: 0s;
  }

  #block-yellow {
    animation-delay: -1s;
  }

  #block-purple {
    animation-delay: -2s;
  }

  #block-pink {
    animation-delay: -3s;
  }

  @keyframes move_around {
    0% {
      top: -20px;
      left: -20px;
    }
    25% {
      top: -20px;
      left: calc(100% + 10px);
    }
    50% {
      top: calc(100% + 10px);
      left: calc(100% + 10px);
    }
    75% {
      top: calc(100% + 10px);
      left: -20px;
    }
    100% {
      top: -20px;
      left: -20px;
    }
  }
</style>
