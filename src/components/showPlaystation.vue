<template>
  <div id="show-blogs">
  <div class="search-field relative text-gray-600">
  <input v-model="search" type="text" placeholder="Keresés" class=" bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
  <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
    <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
    </svg>
  </button>
</div>
    <div v-for="psGame in filteredGames" v-bind:key="psGame.id" class="single-blog">
       <div class="bg-white  overflow-hidden hover:bg-blue-100 border border-gray-200 p-3">
        <div class="m-2 text-justify text-sm">
          <img class="game-case" :src="psGame.image" alt="">
            <p class="text-right case__date text-xs">May 17, 2020</p>
            <h2 class="font-bold text-lg h-2 mb-8">{{psGame.name}}</h2>
            <p class="text-xs">
              {{psGame.details[0]}}
            </p>
        </div>
        <div class="w-full text-right mt-4">
     <button class="bg-white text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md px-2 py-1 inline-flex items-center">
     <i class="far fa-heart"></i>
    </button>    
    
    <button class="bg-white text-gray-800 ml-2 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md px-2 py-1 inline-flex items-center">
     <i class="far fa-envelope"></i>
    </button>     </div>
    </div>
    </div>
  </div>

    
  
</template>

<script>
import psGames from '../../static/psgames.json';
export default{
  data(){
    return{
      psGames,
      blogs:[],
      search : ''
    }
    
  },
  methods:{
  },
  computed:{  
    filteredGames:function(){
      return this.psGames.filter((psGame) =>{
        return psGame.name.match(this.search);
      });
    }
  },
  created(){
      console.log(this.psGames);
  },
  filters:{
    toUppercase(value){
       return value.toUpperCase();
    }
  },
  directives:{
    'rainbow':{
      bind(el){
      //Binding refers to information to a value,
      //El refers to the element itself.
      el.style.color = "#" + Math.random().toString().slice(2,8);
      }
    }
  }
}
</script>

<style scoped>
  #show-blogs{
    max-width:800px;
    margin:auto;
  }
  .game-case{
    min-height: 400px;
    margin: auto;
  }
  .case__date{
    padding-top: 10px;
  }
  .search-field{
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background:white;
  z-index: 9;
  border-bottom: 1px solid #b9b9b9;
  }
</style>
