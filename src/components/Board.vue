<template>
  <div v-for="(row, rowIndex) in board.pieces" class="board-row">
    <div v-for="(column, columIndex) in board.pieces[rowIndex]">
      <board-square
        :piece="board.pieces[rowIndex][columIndex]"
        :position="[rowIndex, columIndex]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Board } from "../models/board";
import BoardSquare from "./BoardSquare.vue";

const board: Board = new Board();
</script>
<style scoped>
.board-row {
  display: flex;
  flex-direction: row;
}

.black-piece {
  color: black;
}
</style>
