<template>
  <main>
    <div class="home">
    <router-view/>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  }
}
</script>
