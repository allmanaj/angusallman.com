<template>
  <div class="bg-black text-terminal h-screen terminal fixed overflow-scroll w-screen" ref="container">
    <p class="text-left ml-3 pt-3 py-0">Booted angusallman.com</p>
    <p class="text-left ml-3 py-0 leading-tight">Retrieving portfolio</p>
    <p class="text-left ml-3 py-0 leading-tight">Optimizing commands</p>
    <p class="text-left ml-3 py-0 leading-tight">Boot complete!</p>
    <p class="text-left ml-3 py-0 leading-tight">------------------------------------------------------------------------------------</p>
    <p class="text-left ml-3 py-0 leading-tight">Please use the 'help' command to learn more</p>
    <div v-for="(line, index) in history" :key="`command${index}`">
      <p class="text-left ml-3 py-0 leading-tight my-1" >root@angusallman.com $ {{ line.command }}</p>
      <p class="text-left ml-3 py-0 leading-tight my-1 response"><span v-html="line.response"></span></p>
    </div>
    <form method="POST" @submit.prevent="submitCommand">
      <span class="float-left ml-3">root@angusallman.com $ </span>
      <input
        class="border-none bg-black text-terminal text-left float-left outline-none ml-3 terminal-input"
        autofocus
        ref="input"
        @change="updateCaret"
        @blur="refocus"
        v-model="command"
        />
    </form>
  </div>
</template>

<script>

import CommandRouter from '../classes/CommandRouter'
import { nextTick } from 'q';

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
    this.refocus();
  },
  methods: {
    updateCaret: function(e){
    },
    refocus: function(e){
      this.$refs.input.focus();
    },
    submitCommand: function(e){
      this.history.push({
        'command': this.command,
        'response' : cmdRouter.run(this.command)
      })
      this.command = "";
      nextTick(() => {
        this.$refs.container.scrollTop = this.$refs.container.scrollHeight;
      })
    }
  },
};
</script>

<style>
  .terminal{
    font-family: "PT Mono", sans-serif;
    
  }

  .terminal::-webkit-scrollbar { 
    display: none; 
  }

  .response .long-text{
    max-width: 500px;
    display:block;
  }
</style>
