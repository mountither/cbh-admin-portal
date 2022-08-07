<script>
  import { form, field } from "svelte-forms";

  import { required, email } from "svelte-forms/validators";
  import { Button, PasswordInput } from "carbon-components-svelte";
  import ArrowRight16 from "carbon-icons-svelte/lib/ArrowRight16";
  import { TextInput } from "carbon-components-svelte";
  import { navigate } from "svelte-routing";
  import { signInWithEmailAndPassword } from "firebase/auth";

  import { auth } from "../../../firebase/client";
  import { failure, success } from "./Toast";

  let loading = false;

  const eml = field("eml", "", [email(), required()]);
  const pwd = field("pwd", "", [required()]);

  const myForm = form(eml, pwd);

  const onSubmit = async () => {
    loading = true;
    try {
      // sign in via firebase sign in  with email/pwd

      if ($eml.value && $pwd.value) {
        await signInWithEmailAndPassword(auth, $eml.value, $pwd.value);
      } else {
        throw Error("must enter email and password");
      }

      success("Successful sign in");

      //navigate to dashboard on success
      navigate("dashboard", { replace: true });
    } catch (error) {
      failure("Failed to sign in");
    }
    loading = false;
  };
</script>

<section>
  <TextInput
    style="width:300px"
    type="text"
    invalid={$myForm.hasError("eml.required")}
    invalidText="Enter a valid email address"
    bind:value={$eml.value}
    placeholder="email"
  />
  <PasswordInput
    type="text"
    style="width:300px"
    invalid={$myForm.hasError("pwd.required")}
    invalidText="Enter a password"
    bind:value={$pwd.value}
    placeholder="password"
  />
  <Button
    icon={ArrowRight16}
    on:click={() => onSubmit()}
    {loading}
    style="margin-top:50px"
    disabled={!$myForm.valid || $eml.value == "" || $pwd.value == "" || loading}
  >
    Submit
  </Button>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
