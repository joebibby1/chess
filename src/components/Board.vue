<template>
  <div class="board-row">
    <div class="board-square"></div>
    <div
      v-for="(column, columnIndex) in board.boardSquares[0]"
      class="board-square"
      :key="columnIndex"
    >
      {{ numberLetterMap[columnIndex] }}
    </div>
  </div>
  <div v-for="(row, rowIndex) in board.boardSquares" class="board-row">
    <div class="board-square">{{ rowIndex + 1 }}</div>
    <div v-for="(column, columIndex) in board.boardSquares[rowIndex]">
      <board-square
        :pieces="board.pieces"
        :position="[rowIndex, columIndex]"
        :selectedSquare="selectedSquare"
        @click="onClick(rowIndex, columIndex)"
        :board="board"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Board } from "../models/board";
import BoardSquare from "./BoardSquare.vue";
import { ref } from "vue";

const board = ref(new Board());
console.log("pieces", board.value.pieces);
const selectedSquare = ref<null | number[]>(null);
const selectSquare = (rowIndex: number, columnIndex: number) => {
  selectedSquare.value = [rowIndex, columnIndex];
};
const onClick = (rowIndex: number, columnIndex: number) => {
  const pieceOnSelectedSquare = board.value.getActivePiece(
    selectedSquare.value
  );
  const pieceOnTargetSquare = board.value.getActivePiece([
    rowIndex,
    columnIndex,
  ]);
  if (selectedSquare.value && pieceOnSelectedSquare) {
    const isValidMove = pieceOnSelectedSquare.move(
      [rowIndex, columnIndex],
      board.value.pieces
    );
    if (isValidMove && pieceOnTargetSquare) {
      pieceOnTargetSquare.take();
    }
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
