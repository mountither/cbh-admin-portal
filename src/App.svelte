<script lang="ts">
  import "carbon-components-svelte/css/all.css";
  import "carbon-components-svelte/css/g10.css";

  import { Router, Route, navigate } from "svelte-routing";
  import Dashboard from "./pages/Dashboard.svelte";
  import Home from "./pages/Home.svelte";
  import { SvelteToast, SvelteToastOptions } from "@zerodevx/svelte-toast";
  import { currentUser } from "./stores/user";
  import { Loading } from "carbon-components-svelte";

  export let url = "";

  let options = {
    duration: 2000,
    next: 0,
  };
  let showPage = false;

  $: if (!$currentUser) {
    showPage = false;
  } else {
    if (!$currentUser.id && $currentUser.role !== "manager") {
      showPage = true;
      navigate("/", { replace: true });
    } else {
      showPage = true;
      if (!window.location.pathname.includes("dashboard")) {
        navigate("dashboard", { replace: true });
      }

      navigate(window.location.pathname, { replace: true });
    }
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
    rel="stylesheet"
  />
</svelte:head>

{#if !showPage}
  <Loading style="background-color:white" />
{:else}
  <Router {url}>
    <div>
      <Route path="dashboard/*" bas><Dashboard /></Route>
      <Route path="/"><Home /></Route>
    </div>

    <SvelteToast {options} />
  </Router>
{/if}

<style>
  div {
    font-family: "Roboto Mono", monospace;
  }
  @font-face {
    src: url(https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap);
    font-family: "Roboto Mono", monospace;
  }
</style>
