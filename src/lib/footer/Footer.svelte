<script>
  import SocialMedia from "../data/social-media-data";
  import SocialMediaButton from "../button/social-media-button.svelte";
  import { each } from "svelte/internal";
</script>

<div
  class="footer flex flex-row items-center justify-around w-full"
  data-aos="fade-up"
>
  {#each SocialMedia as data}
    <SocialMediaButton
      name={data.Name}
      link={data.Link}
      component={data.component}
    />
  {/each}
</div>

<style>
  .footer {
    border-top: 0.1rem solid white;
    padding: 1.5rem 0rem;
    margin-top: 1rem;
  }
</style>
