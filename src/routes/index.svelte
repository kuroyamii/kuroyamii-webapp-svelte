<script lang="ts">
  import { Router, Route, Link } from "svelte-navigator";
  import background from "/anime bg 2.png";
  import LandingPage from "../lib/subpage/LandingPage.svelte";
  import { onMount } from "svelte";
  import AOS from "aos";
  onMount(() => {
    AOS.init();
  });
</script>

<svelte:head>
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
</svelte:head>

<main>
  <img class="background" src={background} alt="" />
  <div class="page">
    <LandingPage />
  </div>
</main>

<style>
  .background {
    z-index: -100;
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
  .page {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
