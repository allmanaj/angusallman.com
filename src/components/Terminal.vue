<template>
  <div class="bg-black text-terminal h-screen terminal">
    <p class="text-left ml-3 pt-3 py-0">Booted angusallman.com</p>
    <p class="text-left ml-3 py-0 leading-tight">Retrieving portfolio</p>
    <p class="text-left ml-3 py-0 leading-tight">Optimizing commands</p>
    <p class="text-left ml-3 py-0 leading-tight">Boot complete!</p>
    <p class="text-left ml-3 py-0 leading-tight">------------------------------------------------------------------------------------</p>
    <div v-for="(line, index) in history" :key="`command${index}`">
      <p class="text-left ml-3 py-0 leading-tight" >root@angusallman.com $ {{ line.command }}</p>
      <p class="text-left ml-3 py-0 leading-tight" v-h>root@angusallman.com $ <span v-html="line.response"></span></p>
    </div>
    <form method="POST" @submit.prevent="submitCommand">
      <span class="float-left ml-3">root@angusallman.com $ </span>
      <input
        type="text"
        class="border-none bg-black text-terminal text-left float-left outline-none ml-3 terminal-input"
        autofocus
        ref="input"
        @change="updateCaret"
        v-model="command"
        />
    </form>
  </div>
</template>

<script>

import CommandRouter from '../classes/CommandRouter'

const cmdRouter = new CommandRouter;

export default {
  name: 'terminal',
  data: function(){
    return {
      history: [],
      command: ""
    };
  },
  mounted: function(){
    this.$refs.input.focus();
  },
  methods: {
    updateCaret: function(e){
    },
    submitCommand: function(e){
      this.history.push({
        'command': this.command,
        'response' : cmdRouter.run(this.command)
      })
      this.command = "";
    }
  },
};
</script>

<style>
  .terminal{
    font-family: "PT Mono", sans-serif;
  }

</style>
