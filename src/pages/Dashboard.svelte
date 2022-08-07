<script>
  import Header from "../common/components/Header.svelte";
  import { signOut } from "firebase/auth";
  import { toast } from "@zerodevx/svelte-toast";
  import { auth, functions } from "../../firebase/client";
  import { TextInput, Button } from "carbon-components-svelte";
  import { Router, Route, navigate } from "svelte-routing";

  import TopTabs from "../modules/toptabs/index.svelte";
  import CreateManager from "./CreateManager.svelte";
  import Managers from "./Managers.svelte";
  import Customers from "./Customers.svelte";

  export let url = ''
</script>

<Router url={url}>
  <div class="header-cntr">
    <Header title="Dashboard" />

    <Button
      size="small"
      style="align-self:flex-end; background-color:#bf4342;position:absolute"
      on:click={() => {
        signOut(auth)
          .then(() => {
            toast.push("Sign out successfully");
            navigate("/", { replace: true });
          })
          .catch((error) => toast.push("Error signing out"));
      }}
    >
      sign out
    </Button>

    <TopTabs />

    <Route path="/"><Managers /></Route>
    <Route path="createmanager"><CreateManager /></Route>
    <Route path="customers"><Customers /></Route>
  </div>
</Router>

<style>
  .header-cntr {
    display: flex;
    flex-direction: column;
  }
</style>
