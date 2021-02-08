<template>
  <v-bottom-navigation dark shift height="auto">
    <v-container>
      <v-row>
        <v-col md="3">
          <v-text-field
            class="my-search"
            v-model="search"
            label="Search"
            outlined
            @input="getUserData"
            prepend-inner-icon="search"
          ></v-text-field>
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
.my-search {
  background: #ccc;
  height: 56px;
}
</style>
