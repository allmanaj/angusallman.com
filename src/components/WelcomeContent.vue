<template>
    <div class="welcome">
        <h1 class="intro-text text-4xl">My name is Angus Allman. I'm a full stack developer from London</h1>
        <p class="text-2xl mt-8">I build products with Laravel, Vue, React, and Tailwind CSS</p>
        <button type="button" class="bg-black px-4 py-2 text-terminal my-8" @click="$emit('terminal')">$ more info<span class="cursor">_</span></button>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @keyframes fade{
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
  }

  .intro-text:after{
    content: " ";
    height: 35px;
    width: 25px;
    margin-bottom: -5px;
    margin-left: 5px;
    background: rgb(44, 62, 80);
    display: inline-block;
    animation: fade 1s infinite;
  }

  .welcome{
    margin-top: 60px;
  }

  button:hover .cursor{
    animation: fade 0.7s infinite;
  }

</style>
