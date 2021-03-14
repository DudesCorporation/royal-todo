<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link to="/" class="nav__link">
          Home
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/mytodos" class="nav__link">
          My Todos
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/completed" class="nav__link">
          Completed Todo
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
$bgClr: #283845;
$hoverClr: #495f75;

$logoFont: 'Redressed', cursive;
$baseFont: 'Ubuntu', sans-serif;

.nav {
  width: 40vh;
  height: 90vh;
  background-color: $bgClr;
  &__list {
    width: 100%;
  }
  &__link {
    display: block;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: bold;
    color: gold;
    font-family: $baseFont;
    transition: all 0.2s ease-in-out;
    padding: 1rem;
    &:hover {
      background-color: $hoverClr;
    }
  }
}
</style>
