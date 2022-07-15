<script lang="ts">
  export let name: string;
  export let link: string;
  export let component: string;
  function onClick(e: any) {
    e.preventDefault();
    window.open(link, "_blank");
  }
</script>

<img class="button" src={component} alt={name} on:click={onClick} />

<style>
  .button {
    width: 3rem;
    height: auto;
  }
  .button:hover {
    cursor: pointer;
  }
</style>
