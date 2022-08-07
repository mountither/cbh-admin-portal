<script>
    import { httpsCallable } from "@firebase/functions";
    import { Button,TextInput } from "carbon-components-svelte";
    import { Add32 } from "carbon-icons-svelte";
    import { field,form } from "svelte-forms";
    import { email,required } from "svelte-forms/validators";
    import { functions } from "../../firebase/client";
    import { failure,success } from "../common/components/Toast";
    import DashboardTransitions from "../modules/transitions/DashboardTransitions.svelte";
  
    let loading = false;
  
    const name = field("name", "", [required()]);
    const eml = field("eml", "", [email(), required()]);
  
    const addManagerForm = form(name, eml);
  
    const onSubmit = async () => {
      loading = true;
      try {
        // callable https process processManagerAccount
        const response = await httpsCallable(
          functions,
          "processManagerAccount"
        )({
          name: $name.value,
          email: $eml.value,
        });
  
        if (response.data.success) {
          success(response.data.message);
          addManagerForm.reset();
        } else {
          throw Error();
        }
      } catch (error) {
        failure("Failed to create manager");
      }
      loading = false;
    };
  </script>

<DashboardTransitions>

<section>
    <h2 class="form-hdr">Add a manager</h2>
  
    <TextInput
      style="width:300px"
      type="text"
      invalid={$addManagerForm.hasError("eml.required")}
      invalidText="Enter a valid email address"
      bind:value={$eml.value}
      placeholder="email"
    />
    <TextInput
      style="width:300px"
      type="text"
      invalid={$addManagerForm.hasError("name.required")}
      invalidText="Enter a name"
      bind:value={$name.value}
      placeholder="name"
    />
    <Button
      on:click={() => onSubmit()}
      style="margin-top:50px"
      icon={Add32}
      {loading}
      disabled={!$addManagerForm.valid ||
        $eml.value == "" ||
        $name.value == "" ||
        loading}>Add</Button
    >
  </section>
  </DashboardTransitions>
  
  <style>
    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 5rem;
    }
    .form-hdr {
      margin-bottom: 2rem;
    }
  </style>
  