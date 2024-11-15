<script setup>
    import { ref } from "vue"
    import { search } from '../search.js'
</script>

<template>
  <header>
        <div class="container">
            <div id="header">
            <div class="left_block">
                <img src="/public/joystick.png" class="logo_icon" alt="Gallery" width="64">
                <h1>GameList</h1>
            </div>
            <div id="search_box">
                <input id="input" @keyup.enter="search.getData(_search_input)" v-model="_search_input" type="text" placeholder="Search..." autofocus>

                <div id="cross" class="search_icon_box cross" title="Clear">
                </div>

                <div id="search" class="search_icon_box" title="Search">
                </div>
            </div>
            </div>
        </div>
  </header>
</template>

<style scoped>
header {
  border-bottom: 5px solid orange;
}

#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-height: 70px;
  padding: 0 20px;
}

#header h1 {
  font-size: 2rem;
}


#search_box {
  position: relative;
  width: 350px;
}

#search_box input {
  box-sizing: border-box;
  width: 100%;
  font-size: 1rem;
  padding: 8px 65px 8px 12px;
  border-radius: 25px;
  outline: none;
  transition: all 0.30s ease-in-out;
  border: 1px solid #DDDDDD;
}

input:focus {
  box-shadow: 0 0 5px orange;
  border: 1px solid orange;
}

#search_box .search_icon_box {
  color: black;
  position: absolute;
  cursor: pointer;
  top: 6px;
  right: 8px;
  transition: 1s;
}

#search_box .search_icon_box.cross {
  right: 35px;
}
#search_box .search_icon_box:hover {
  fill: orange;
}




@media(max-width:768px) {

  #header {
      margin: 10px 0;
      padding: 20px;
      gap: 10px;
      justify-content: center;
  }

  #header h1 {
      padding: 5px 0;
  }
}

@media(max-width:480px) {
  #header h1 {
      text-align: center;
  }

}
</style>
