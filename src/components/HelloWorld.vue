<template>
  <div><h1>{{ capitalizedTitle }}</h1></div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  setup() {
    const title = "Home";
    const capitalizedTitle = computed(() => title.toUpperCase());
    return { capitalizedTitle };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  color: #42b983;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>