<template>
  <div id="app">
    <h1>画像比較 &#x1f914;</h1>
    <p>→2枚の画像を重ねて、違いがあれば色がつく。</p>
    <diffCheck/>
  </div>
</template>

<script>
import diffCheck from './components/diffCheck.vue'

export default {
  name: 'app',
  components: {
    diffCheck
  }
}
</script>

<style lang="scss">
#app {
  padding: 50px;

  h1 {
    font-size: 2rem;
    margin-bottom: 15px;
    font-weight: bold;
  }
  p {
    margin-bottom: 30px;
  }
}
</style>
