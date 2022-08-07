<script>
  import { ContentSwitcher, Switch } from "carbon-components-svelte";
  import { Link, navigate } from "svelte-routing";

  let tabItems = [
    { to: "/dashboard", title: "Managers" },
    { to: "/dashboard/createmanager", title: "Create manager" },
    { to: "/dashboard/customers", title: "Customers" },
  ];

console.log(window.location.pathname);
</script>

<ContentSwitcher >
  {#each tabItems as item, index}
      <Switch selected={window.location.pathname.includes(item.to)} text={item.title} on:click={()=>navigate(item.to)} style="border-radius:0"/>
  {/each}
</ContentSwitcher>
