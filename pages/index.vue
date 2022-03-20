<template lang="pug">
canvas(ref="canvas")
</template>

<script setup lang="ts">
const canvas = ref();
const gl = ref();
onMounted(() => {
  gl.value =
    canvas.value.getContext("webgl") ||
    canvas.value.getContext("experimental-webgl");
  gl.value.clearColor(0, 0, 0, 1);
  gl.value.clear(gl.value.COLOR_BUFFER_BIT);
  console.log(gl.value.getParameter(gl.value.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
});
</script>

<style lang="scss">
canvas {
  width: 100%;
  height: 56.25%;
}
</style>
