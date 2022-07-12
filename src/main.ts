import indexSvelte from "./routes/index.svelte";
import global from "./styles/global.css";

const app = new indexSvelte({
  target: document.getElementById("app"),
});

export default app;
