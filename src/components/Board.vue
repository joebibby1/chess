<template>
  <div class="board-row">
    <div class="board-square"></div>
    <div v-for="(column, columnIndex) in board.pieces[0]" class="board-square">
      {{ numberLetterMap[columnIndex] }}
    </div>
  </div>
  <div v-for="(row, rowIndex) in board.pieces" class="board-row">
    <div class="board-square">{{ rowIndex + 1 }}</div>
    <div v-for="(column, columIndex) in board.pieces[rowIndex]">
      <board-square
        :piece="board.pieces[rowIndex][columIndex]"
        :position="[rowIndex, columIndex]"
        :selectedSquare="selectedSquare"
        @click="onClick(rowIndex, columIndex)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Board } from "../models/board";
import BoardSquare from "./BoardSquare.vue";
import { ref } from "vue";

const board = ref(new Board());
const selectedSquare = ref<null | number[]>(null);
const selectSquare = (rowIndex: number, columnIndex: number) => {
  selectedSquare.value = [rowIndex, columnIndex];
};
const onClick = (rowIndex: number, columnIndex: number) => {
  if (selectedSquare.value) {
    board.value.movePiece(selectedSquare.value, [rowIndex, columnIndex]);
    selectedSquare.value = null;
  } else {
    selectSquare(rowIndex, columnIndex);
  }
};

const numberLetterMap = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "G",
  7: "H",
};
</script>
<style scoped>
.board-row {
  display: flex;
  flex-direction: row;
}

.board-square {
  width: 40px;
  height: 40px;
}
</style>
