<template>
  <v-app>
    <Headers />
  </v-app>
</template>

<script>
import { VApp } from 'vuetify/lib';
import Headers from './components/Headers';
export default {
  name: 'App',
  components: { Headers, VApp },
};
</script>
