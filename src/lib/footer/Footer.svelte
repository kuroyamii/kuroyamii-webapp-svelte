<script>
  import Twitter from "/icons/Twitter.svg";
  import Discord from "/icons/Discord.svg";
  import Youtube from "/icons/Twitter.svg";
  import Bandcamp from "/icons/Bandcamp.svg";
  import Instagram from "/icons/Instagram.svg";
  import Spotify from "/icons/Spotify.svg";
  import Soundcloud from "/icons/Soundcloud.svg";
</script>

<div class="footer flex flex-row items-center justify-around w-full">
  <button><img class="button" src={Bandcamp} alt="Bandcamp" /></button>
  <button><img class="button" src={Twitter} alt="Twitter" /></button>
  <button><img class="button" src={Discord} alt="Discord" /></button>
  <button><img class="button" src={Instagram} alt="Instagram" /></button>
  <button><img class="button" src={Youtube} alt="Youtube" /></button>
  <button><img class="button" src={Soundcloud} alt="Soundcloud" /></button>
  <button><img class="button" src={Spotify} alt="Spotify" /></button>
</div>

<style>
  .button {
    width: 3rem;
    height: auto;
  }
  .footer {
    border-top: 0.1rem solid white;
    padding: 1.5rem 0rem;
    margin-top: 1rem;
  }
</style>
