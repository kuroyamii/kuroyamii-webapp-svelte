<script>
  import Footer from "../footer/Footer.svelte";
  import Header from "../header/Header.svelte";
</script>

<div class="container landing-wrapper h-[80vh] py-[3rem]" data-aos="fade-up">
  <div
    class="flex items-center h-full w-full justify-between flex-col landing px-[12rem]"
  >
    <Header />
    <div class="flex flex-col items-center justify-center">
      <h1 id="lets">LET'S DIVE INTO <span class="myworld">MY WORLD</span></h1>
      <div class="py-[1rem]">
        <button class=" text-white button">Start</button>
      </div>
    </div>
    <Footer />
  </div>
</div>

<style>
  h1#lets {
    font-weight: normal;
  }
  .myworld {
    color: #b8f9ff;
    font-weight: bold;
  }
  .button {
    padding: 0.6rem 2rem;
    border: 0.2rem solid white;
    border-radius: 1rem;
  }
  .landing-wrapper {
    background: rgba(7, 9, 32, 0.54);
    border-radius: 1rem;
  }
</style>
