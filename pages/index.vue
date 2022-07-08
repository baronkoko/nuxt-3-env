<template>
  <div>
    <div>FOO = {{ foo }}</div>
    <div>PUBLIC FOO = {{ publicFoo }}</div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

const foo = config.foo;
const publicFoo = config.public.foo;
</script>
