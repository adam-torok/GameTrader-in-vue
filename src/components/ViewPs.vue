<template>
  <div>
      <show-ps></show-ps>
      <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import bottomNav from './header.vue';
import showPs from './showPlaystation.vue';
export default {
    components:{
        'show-ps':showPs,
        'bottom-nav':bottomNav
    }
}
</script>

<style>

</style>