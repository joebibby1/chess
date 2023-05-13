<template>
  <div></div>
</template>

<script setup lang="ts">
import { Piece } from "../models/pieces";

const props = defineProps({
  piece: {
    type: Object,
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
