<template>
  <header>
    <nav
      class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3"
    >
      <div class="logoContainer row justify-content-center ">
        <img class="logo " src="./../../assets/LOGO.png" />
      </div>
      <div class="container">
        <a
          class="navbar-brand"
          asp-area=""
          asp-controller="Games"
          asp-action="Index"
          >XGames</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse"
        >
          <ul class="navbar-nav flex-grow-1">
            <li class="nav-item">
              <a
                class="nav-link text-dark"
                asp-area=""
                asp-controller="Home"
                asp-action="Index"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-dark"
                asp-area=""
                asp-controller="Home"
                asp-action="Privacy"
                >Privacy</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-dark"
                asp-area=""
                asp-controller="Chat"
                asp-action="Index"
                >Chat</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "StoreHeader"
};
</script>

<style scoped>
header {
  height: fit-content;
}

.logo {
  height: 11vh;
}
.container {
  margin-left: 1em;
  margin-right: none;
}
.logoContainer {
  width: 20%;
}
</style>
