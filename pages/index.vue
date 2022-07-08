<template>
  <div>
    {{ foo }}
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

const foo = config.FOO;
</script>
