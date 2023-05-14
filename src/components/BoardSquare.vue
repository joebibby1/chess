<template>
  <div :class="`${sqaureBackground} board-square`">
    <div v-if="props.piece" :class="pieceColor" :draggable="true">
      <font-awesome-icon :icon="props.piece?.icon" />
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
import { watch, watchEffect, ref } from "vue";

library.add(
  faChessQueen,
  faChessRook,
  faChessKing,
  faChessPawn,
  faChessKnight,
  faChessBishop
);

const props = defineProps({
  piece: {
    type: Object as () => Piece | null,
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

// squares with a sum index that is even are white
const sqaureBackground =
  (props.position[0] + props.position[1]) % 2 === 0
    ? "background-white"
    : "background-black";

const pieceColor = ref("");
watchEffect(() => {
  pieceColor.value = props.piece?.isWhite ? "piece-white" : "piece-black";
});
</script>

<style scoped>
.background-white {
  background-color: #eeeeee;
}

.background-black {
  background-color: #aaaaaa;
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
