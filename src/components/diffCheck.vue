<template>
  <div class="diff_wrap">
    <div class="diff_contents">
      <div class="diff default">
        <input type="file" v-on:change="setDefault">
        <p>Before</p>
        <figure>
          <img class="preview_default_file" src="">
        </figure>
      </div>

      <div class="diff">
        <input type="file" v-on:change="setInvert">
        <p>After</p>
        <figure>
          <img class="preview_invert_file" src="">
        </figure>
      </div>
    </div>

    <div class="diff_result">
      <p>Result</p>
      <figure>
        <img class="def" src="">
        <img class="inv" src="">
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'diffCheck',
  data () {
    return {
    }
  },
  methods: {
    getFileSrc: function(e){
      let file;
      let files = e.target.files[0];
      let blobUrl = window.URL.createObjectURL(files);
      file = blobUrl;

      return file;
    },

    setDefault: function(e){
      e.preventDefault();

      document.querySelector('.preview_default_file').setAttribute('src', this.getFileSrc(e));
      document.querySelector('.def').setAttribute('src', this.getFileSrc(e));
    },

    setInvert: function(e){
      e.preventDefault();

      document.querySelector('.preview_invert_file').setAttribute('src', this.getFileSrc(e));
      document.querySelector('.inv').setAttribute('src', this.getFileSrc(e));
    }
  }
}
</script>


<style scoped lang="scss">
.diff_wrap {
  display: flex;

  .diff_contents {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    .diff {
      background: white;
      overflow: hidden;
      margin: 0 10px;
      width: 50%;

      input {
        margin-bottom: 20px;
      }

      img {
        vertical-align: bottom;
      }

      p {
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 10px;
      }
    }
  }

  .diff_result {
    width: 50%;
    position: relative;

    p {
      font-weight: bold;
      font-size: 2rem;
      margin-bottom: 10px;
      text-align: center;
    }

    figure {
      position: relative;
      margin: 0 auto;
    }

    img {
      transform: translateX(-50%);
      position: absolute; top: 0; left: 50%;
    }

    .def {
      opacity: 0.8;
    }
    .inv {
      filter: invert(1) opacity(0.5);
      backface-visibility: hidden;
      position: relative;
      overflow: hidden;
      z-index: 2;
    }
  }
}
</style>
