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
				<li class="pr-6">
					<i class="text-gray-600 far fa-bell fa-lg"></i>
				</li>
				<li class="pr-6">
					<i class="text-gray-600 far fa-envelope fa-lg"></i>
				</li>
				<router-link to="/profile">
				<li class="h-10 w-10">
					<img
						class="h-full w-full rounded-full mx-auto profile-pic"
						src="https://scontent.fbud8-1.fna.fbcdn.net/v/t1.0-9/27655444_1553266691394108_1864222071249340573_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=PsXapIXggXMAX9d2uLs&_nc_ht=scontent.fbud8-1.fna&oh=76f455e8b642cb4b52d3a04e50c3612d&oe=5F207D99"
						/>
				</li>
				</router-link>

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