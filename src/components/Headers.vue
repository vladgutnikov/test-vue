<template>
  <div>
    <v-bottom-navigation shift height="auto">
      <v-container>
        <v-row>
          <v-col md="4" offset-md="4">
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
          <v-col md="4" class="d-flex justify-end">
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
import {
  VBtn,
  VIcon,
  VCol,
  VRow,
  VContainer,
  VBottomNavigation,
  VTextField,
} from 'vuetify/lib';
import data from '../data/data.json';

export default {
  data: () => ({ search: null, items: [], filterData: [] }),
  components: {
    ListItems,
    VBtn,
    VIcon,
    VCol,
    VRow,
    VContainer,
    VBottomNavigation,
    VTextField,
  },
  methods: {
    getUserData() {
      this.filterData = this.items.filter((item) => {
        if (item.title.toUpperCase().indexOf(this.search.toUpperCase()) > -1)
          return item;
      });
      if (this.filterData) this.sortData();
    },
    sortData() {
      this.filterData.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        else return 1;
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

<style>
.my-search {
  background: #ccc;
  height: 56px;
}
</style>
