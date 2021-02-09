<template>
  <div>
    <v-bottom-navigation shift height="auto">
      <v-container>
        <v-row>
          <v-col md="4">
            <div class="wrapper-search">
              <v-text-field
                class="my-search"
                v-model="search"
                label="Search"
                outlined
                @input="getUserData"
                @blur="clearDataArray"
                prepend-inner-icon="search"
              ></v-text-field>
            </div>
          </v-col>
          <v-col md="3">
            <v-btn>
              home
              <v-icon x-large dark>home</v-icon>
            </v-btn>
            <v-btn>
              My network
              <v-icon x-large dark>view_list</v-icon>
            </v-btn>
            <v-btn>
              Jobs
              <v-icon x-large dark>work</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-bottom-navigation>
    <ListItems :items="filterData" />
  </div>
</template>

<script>
import ListItems from './ListItems';
import data from '../data/data.json';

export default {
  data: () => ({ search: null, items: [], filterData: [] }),
  components: {
    ListItems,
  },
  methods: {
    getUserData() {
      this.filterData = this.items.filter((item) => {
        if (item.title.toUpperCase().indexOf(this.search.toUpperCase()) > -1)
          return item;
      });
    },
    clearDataArray() {
      if (!this.search) this.filterData = [];
    },
  },
  mounted() {
    this.items = [...data];
  },
};
</script>

<style lang="scss">
.my-search {
  background: #ccc;
  height: 56px;
}
</style>
