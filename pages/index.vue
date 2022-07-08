<template>
  <div>
    <div>PUBLIC FOO = {{ publicFoo }}</div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

const publicFoo = config.public.FOO;
</script>
