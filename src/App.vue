<template>
  <div id="app">
    <div id="nav">
      <landing-nav></landing-nav>
    </div>
    <home></home>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import landingNav from './components/LandingNav.vue';

export default{
  components:{
    'home':Home,
    'landing-nav':landingNav,
  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped>

@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.1/animate.min.css';
  body{
    margin:0;
    font-family: 'Nunito SemiBold';
  }
  #nav{
    display: flex;
    justify-content: center;
    align-content: center;
  }
</style>
