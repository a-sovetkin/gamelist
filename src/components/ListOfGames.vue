<script setup>
  import { search } from '../search.js'
  search.getData();

</script>

<template>


  <section>
    <div class="container">
        <div id="grid">
          <div v-for="game in search._response_list" :key="game.id" class="game_wrapper">

              <div class="img" :style='{ backgroundImage: "url(" + game?.short_screenshots[0]?.image + ")", }'></div>
              <div class="game_info">
                <a  :href=' "https://rawg.io/games/" + game?.slug' target="_blank">
                  <div class="title_game">{{ game.name }}</div>
                </a>
                <div class="game_details">
                  <div class="genre">{{ game?.genres[0]?.name }}</div>
                  <div v-if="game?.metacritic > 0" class="metacritic">{{ game?.metacritic }}</div>
                </div>
              </div>
          </div>

        </div>
    </div>
  </section>
</template>

<style scoped>

.card_info {
  display: flex;
  height: 50px;
  align-items: center;
  gap: 20px;
  color: black;
}

.img {
  width: 380px;
  height: 214px;
  margin-top: 15px;
  background-position: center;
  background-size: cover;
  border-radius: 2px;
  cursor: pointer;
  border-radius: 10px;
}

.game_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 380px;

}

.game_info {
  display: flex;
  gap: 10%;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.title_game {
  font-size: 18px;
  font-weight: bold;
}

.game_details {
  display: flex;
  gap: 5px;
  align-items: center;
}

.metacritic {
  border: 1px dotted grey;
  height: fit-content;
  line-height: normal;
  padding: 3px;
}

</style>
