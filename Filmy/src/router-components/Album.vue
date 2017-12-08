<template>
  <div id="album">
    <h1>这是album页面</h1>
  </div>
</template>

<script>

</script>

<style scoped>
  #album {
    width: 100%;
    display: block;
  }

  #album-title {
    margin: 0;
    display: block;
    padding: 3px 0 3px 1rem;
    border-left: 5px solid #333;

    font-family: "Lantinghei SC", "Lantinghei TC", Arial, serif;
    background: white;
  }

  #back {
    color: #666;
    cursor: pointer;
    padding: 1rem 0 1rem .5rem;
    line-height: 1rem;
    font-family: Arial;
    text-decoration: none;
    display: block;
    background: white;
  }
  #back .icon-arrow-left {
    vertical-align: middle;
  }


  @media only screen and (min-width: 500px) {
    #album {
      width: 85%;
      margin: 0 auto;
    }

    #back {
      width: 63.75vw;
      display: inline-block;
    }

    #album-title {
      width: 63.75vw;
      display: inline-block;
    }
  }

</style>