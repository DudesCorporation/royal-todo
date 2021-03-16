<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link to="/" class="nav__link">
          <span class="nav__icon"><Icon>home-edit</Icon></span>
          <span class="nav__title">Home</span>
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/mytodos" class="nav__link">
          <span class="nav__icon"> <Icon>clipboard-list</Icon> </span>
          <span class="nav__title">My Todos</span>
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/completed" class="nav__link">
          <span class="nav__icon"><Icon>book-check </Icon> </span>
          <span class="nav__title">Completed Todos</span>
        </router-link>
      </li>
    </ul>
  </nav>
  <div class="nav-toggle"></div>
</template>

<style lang="scss" scoped>
$clrMenu: #010c1f;
$hoverClr: #011029;

$baseFont: 'Ubuntu', sans-serif;

.nav {
  position: relative;
  width: 350px;
  height: 90vh;
  overflow: hidden;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  background-color: $clrMenu;
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
    padding: 0 1rem;
    margin-bottom: 0.3em;
    &:hover {
      background-color: $hoverClr;
      border-bottom: 1px solid gold;
    }
  }
  &__icon {
    position: relative;
    display: block;
    min-width: 32px;
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
  cursor: pointer;
  left: 245px;
  top: calc(50% - 20px);
  border: 10px solid #010814;
  border-radius: 50%;
  background-color: $clrMenu;
  z-index: 100;
  &::before {
    content: '\00AB';
    position: absolute;
    text-align: center;
    top: 5px;
    width: 100%;
    height: 100%;
    line-height: 30px;
    color: gold;
    cursor: pointer;
  }
}
</style>
