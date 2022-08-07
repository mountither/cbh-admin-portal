<script>
  export let title;
</script>

<div class="header-cntr">
  <h1 class="header">{title}</h1>
</div>

<style>
  .header-cntr {
    --height: 10rem;
    background-color: rgb(0, 0, 0);
    border-bottom: 1px solid #393939;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    height: var(--height);
    justify-content: flex-end;
    width: 100%;
  }
  .header {
    font-size: 70px;
    align-self: flex-start;
    margin-left: 80px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 1.19;
    margin-bottom: 2rem;
    margin-top: auto;
  }
  @media (max-width: 840px) {
    .header {
      font-size: 40px;
    }
  }
</style>
