<template>
  <div :class="`${sqaureBackground} board-square`">
    <div v-if="piece" :class="pieceColor" :draggable="true">
      <font-awesome-icon :icon="piece?.icon" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { Piece } from "../models/pieces";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChessQueen,
  faChessRook,
  faChessKing,
  faChessPawn,
  faChessKnight,
  faChessBishop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { watch, watchEffect, ref, defineComponent } from "vue";

library.add(
  faChessQueen,
  faChessRook,
  faChessKing,
  faChessPawn,
  faChessKnight,
  faChessBishop
);
const props = defineProps({
  pieces: {
    type: Array as () => Piece[],
    required: true,
  },
  position: {
    type: Array as () => number[],
    required: true,
  },
  selectedSquare: {
    type: Array as () => number[] | null,
    required: false,
  },
});
const pieceColor = ref("");
const piece = ref<Piece | null>(null);
const sqaureBackground = ref("");
watchEffect(() => {
  piece.value = props.pieces.find(
    (piece) =>
      piece.position[0] === props.position[0] &&
      piece.position[1] === props.position[1]
  );
  pieceColor.value = piece.value?.isWhite ? "piece-white" : "piece-black";
});

watchEffect(() => {
  if (
    props.selectedSquare &&
    props.selectedSquare[0] === props.position[0] &&
    props.selectedSquare[1] === props.position[1]
  ) {
    sqaureBackground.value = "background-selected";
  } else {
    // squares with a sum index that is even are white
    sqaureBackground.value =
      (props.position[0] + props.position[1]) % 2 === 0
        ? "background-white"
        : "background-black";
  }
});
</script>

<style scoped>
.background-white {
  background-color: #eeeeee;
}

.background-black {
  background-color: #aaaaaa;
}

.background-selected {
  background-color: green;
}

.piece-white {
  color: white;
  cursor: pointer;
}

.piece-black {
  color: black;
  cursor: pointer;
}

.board-square {
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
  height: 40px;
  width: 40px;
}
</style>
