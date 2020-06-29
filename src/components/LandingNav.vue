<template>
  <div class="flex-1 myheader flex flex-col">
		<nav class="px-4 flex justify-between bg-white h-16 border-b-2">

			<!-- top bar left -->
			<ul class="flex items-center">
				<!-- add button -->
				<li class="w-6">
				<i class="text-gray-600 fas fa-balance-scale fa-lg"></i>
				</li>
			</ul>


			<!-- to bar right  -->
			<ul class="flex items-center">
				<li class="pr-3">
                <router-link class="w-full flex items-center justify-center px-5 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out" to="/ps">	
                    Regisztráció	
				</router-link>
				</li>
                <li class="pr-3">
				<router-link class="w-full flex items-center justify-center px-5 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out" to="/ps">	
                    Belépés	
				</router-link>
                </li>
			</ul>

		</nav>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.myheader{
   
}
.profile-pic{
	object-fit:cover;
}
.logo{
    height:auto;
    width:100px;
    max-width: 100px;
}
</style>