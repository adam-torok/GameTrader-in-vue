<template>
<div>
      <div class="bg-white prof-card rounded overflow-hidden shadow-lg">
        <div class="text-center p-6  border-b">
          <img
            class="profile-pic h-24 w-24 rounded-full mx-auto"
            src="https://scontent.fbud8-1.fna.fbcdn.net/v/t1.0-9/27655444_1553266691394108_1864222071249340573_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=PsXapIXggXMAX9d2uLs&_nc_ht=scontent.fbud8-1.fna&oh=76f455e8b642cb4b52d3a04e50c3612d&oe=5F207D99"
          />
          <p class="pt-2 text-lg font-semibold">Török Ádám</p>
          <p class="text-sm text-gray-600">woltery99@outlook.hu</p>
          <div class="mt-5">
            <a
              href="#"
              class="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700"
            >
              Profilkezelés
            </a>
          </div>
        </div>
        <div class="border-b">
          <a href="#" class="px-4 py-2 hover:bg-gray-100 flex">
            <div class="text-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div class="pl-3">
              <p class="text-sm font-medium text-gray-800 leading-none">Csoportok</p>
              <p class="text-xs text-gray-500">Felhasználók &amp; csoportok kezelése</p>
            </div>
          </a>
          <a href="#" class="px-4 py-2 hover:bg-gray-100 flex">
            <div class="text-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="pl-3">
              <p class="text-sm font-medium text-gray-800 leading-none">Profil beállítások</p>
              <p class="text-xs text-gray-500">Használat, számlázás, letiltások</p>
            </div>
          </a>
          <a href="#" class="px-4 py-2 hover:bg-gray-100 flex">
            <div class="text-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="pl-3">
              <p class="text-sm font-medium text-gray-800 leading-none">Egyéni beállítások</p>
              <p class="text-xs text-gray-500">Email, Profil, Értesítések</p>
            </div>
          </a>
        </div>

        <div class="">
          <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p class="text-sm font-medium text-gray-800 leading-none">Játékaim</p>
          </a>
          <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p class="text-sm font-medium text-gray-800 leading-none">Jegelt hírdetések</p>
          </a>
          <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p class="text-sm font-medium text-gray-800 leading-none">GY.I.K</p>
          </a>
          <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p class="text-sm font-medium text-gray-800 leading-none">Kilépés</p>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
nav{
    display: inline;
}
.profile-pic{
    object-fit:cover;
}
.prof-card{
    margin-bottom:55px;
}
</style>