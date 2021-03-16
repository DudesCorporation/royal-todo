<template>
  <nav class="nav relative w-64 bg-gray-900 h-screen shadow-lg">
    <ul class="nav__list absolute inset-0 w-max text-white text-xl">
      <li class="nav__item relative w-max p-3 transition duration-500 ease-in-out hover:text-yellow-300">
        <router-link to="/" class="nav__link relative">
          <span class="nav__icon relative text-3xl"><Icon>home-edit</Icon></span>
          <span class="nav__title relative ml-6">Home</span>
        </router-link>
      </li>
      <li class="nav__item p-3 hover:text-yellow-300 transition duration-500 ease-in-out hover:text-yellow-300">
        <router-link to="/mytodos" class="nav__link">
          <span class="nav__icon text-3xl"><Icon>clipboard-list</Icon> </span>
          <span class="nav__title ml-6">My Todos</span>
        </router-link>
      </li>
      <li class="nav__item p-3 hover:text-yellow-300 transition duration-500 ease-in-out hover:text-yellow-300">
        <router-link to="/completed" class="nav__link">
          <span class="nav__icon text-3xl"><Icon>book-check</Icon></span>
          <span class="nav__title ml-6">Completed Todos</span>
        </router-link>
      </li>
    </ul>
    <div class=" bg-gray-900 nav-toggle absolute cursor-pointer border-8 border-black rounded-full z-50 -right-6 top-1/2 text-center text-3xl"><Icon>chevron-left</Icon></div>

  </nav>
</template>
