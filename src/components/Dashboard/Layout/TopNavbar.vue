<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Strona główna</a>
      <button type="button"
              class="navbar-toggler navbar-toggler-right"
              :class="{toggled: $sidebar.showSidebar}"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleSidebar">
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="nav navbar-nav mr-auto">
         
          <drop-down tag="li">
            <template slot="title">
              <i class="nc-icon nc-planet"></i>
              <b class="caret"></b>
              <span class="notification">5</span>
            </template>
            <a class="dropdown-item" href="#">Nowy komunikat (nr 1)</a>
            <a class="dropdown-item" href="#">Nowy komunikat (nr 2)</a>
            <a class="dropdown-item" href="#">Nowy komunikat (nr 3)</a>
            <a class="dropdown-item" href="#">Nowy komunikat (nr 4)</a>
            <a class="dropdown-item" href="#">Nowy komunikat (nr 5  )</a>
          </drop-down>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nc-icon nc-zoom-split"></i>
              <span class="d-lg-block">&nbsp;Szukaj</span>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <Tarea>Twoje konto</Tarea>
            </a>
          </li>
          <drop-down title="Zaawansowane">
            <a class="dropdown-item" href="#">Edytuj dane klienta</a>
            <a class="dropdown-item" href="#">Zarządzaj pracownikami</a>
            <a class="dropdown-item" href="#">Zobacz statystyki </a>
            <div class="divider"></div>
            <a class="dropdown-item" href="#"> Drukuj raport dnia</a>
          </drop-down>
          <li class="nav-item">
            <a href="#" class="nav-link">
              Wyloguj
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    computed: {
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style>

</style>
