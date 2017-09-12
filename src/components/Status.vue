<template>
  <div>
    <div class="title is-1 has-text-primary">Hello from status</div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Lorem</p>
          <p class="subtitle">Lorem lorem dolor</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Ipsum</p>
          <p class="subtitle">Dolor ipsum dolor</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Dolor</p>
          <p class="subtitle">Hello from dolor</p>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'status',

    data () {

      return {
      }
    }
  }
</script>

<style lang="scss">
</style>
