<template>
  <div></div>
</template>

<script setup lang="ts">
import { Piece } from "../models/pieces";

const props = defineProps({
  piece: {
    type: Object as () => Piece | null,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  position: {
    type: Array,
    required: true,
  },
});
</script>
