<template>
  <v-bottom-navigation dark shift height="auto">
    <v-container>
      <v-row class="justify-center">
        <v-col md="3">
          <div class="wrapper-search">
            <v-text-field
              class="my-search"
              v-model="search"
              label="Search"
              outlined
              @input="getUserData"
              prepend-inner-icon="search"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({ search: null }),
  computed: {},
  methods: {
    getUserData() {
      console.log(this.search);
    },
  },
};
</script>

<style>
.wrapper-search {
  position: relative;
}
.my-search {
  background: #ccc;
  height: 56px;
}
</style>
