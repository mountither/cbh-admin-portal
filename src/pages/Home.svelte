<script lang="ts">
  import Header from "../common/components/Header.svelte";
  import SigninForm from "../common/components/SigninForm.svelte";
</script>

<main>
  <Header title="Admin Signin" />
  <div class="form-cntr">
    <SigninForm />
  </div>
</main>

<style>
  main {
    text-align: center;
    max-width: 100%;
    margin: 0 auto;
  }
  .form-cntr {
    margin-top: 50px;
  }
</style>
