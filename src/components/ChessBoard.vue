<template>
  <div>test</div>
  <div v-for="(row, index) in board.pieces" class="board-row">
    <div v-for="(column, i) in board.pieces[index]">
      <!-- <ChessPiece :piece="board.pieces[index][i]" /> -->
      <font-awesome-icon icon="chess-queen" class="black-piece" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Board } from "../models/board";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChessQueen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ChessPiece from "./ChessPiece.vue";

library.add(faChessQueen);

const board: Board = new Board();
</script>

<style scoped>
.board-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 320px;
  background: linear-gradient(90deg, #eeeeee 50%, #aaaaaa 50%);
  background-size: 80px 80px;
}

.black-piece {
  color: black;
}
</style>
