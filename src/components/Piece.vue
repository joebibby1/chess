<template>
  <div>
    <font-awesome-icon v-if="props.piece" :icon="props.piece?.icon" />
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
  // color: {
  //   type: String,
  //   required: true,
  // },
  position: {
    type: Array,
    required: true,
  },
});
</script>
