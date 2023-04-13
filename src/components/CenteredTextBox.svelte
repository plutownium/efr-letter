<div class="centered-text-box">
  <slot />
</div>

<style>
  .centered-text-box {
    /* padding: 0px 20px 0px 20px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .centered-text-box :global(*) {
    text-align: center;
  }
</style>
