<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link to="/" class="nav__link">
          <span class="nav__icon">HOME</span>
          <span class="nav__title">Home</span>
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/mytodos" class="nav__link">
          <span class="nav__icon">MYTODOS</span>
          <span class="nav__title">My Todos</span>
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/completed" class="nav__link">
          <span class="nav__icon"></span>
          <span class="nav__title">Completed Todos</span>
        </router-link>
      </li>
    </ul>
  </nav>
  <div class="nav-toggle"></div>
  <!-- <nav class="nav">
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
  </nav> -->
</template>

<style lang="scss" scoped>
$drawerClr: #0b0c10;
$hoverClr: #101218;

$baseFont: 'Ubuntu', sans-serif;

.nav {
  position: relative;
  width: 40vh;
  height: 90vh;
  background-color: $drawerClr;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  &__list {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  &__item {
    position: relative;
    width: 100%;
  }
  &__link {
    position: relative;
    display: flex;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: bold;
    color: gold;
    font-family: $baseFont;
    transition: all 0.2s ease-in-out;
    padding: 1rem;
    margin-bottom: 0.3em;
    &:hover {
      background-color: $hoverClr;
      border-bottom: 1px solid gold;
    }
  }
  &__icon {
    position: relative;
    display: block;
    min-width: 80px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  &__title {
    display: block;
    position: relative;
    height: 60px;
    line-height: 60px;
    white-space: nowrap;
  }
}
.nav-toggle {
  position: absolute;
  width: 60px;
  height: 60px;
  background-color: $drawerClr;
  cursor: pointer;
  left: 200px;
  top: calc(50% - 20px);
  border: 10px solid #08090c;
  border-radius: 50%;
  &::before {
    content: '<';
    position: absolute;
    text-align: center;
    top: 5px;
    width: 100%;
    height: 100%;
    line-height: 30px;
    color: whitesmoke;
    cursor: pointer;
  }
}
</style>
