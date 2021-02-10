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
                @focus="search = ''"
                @blur="search = null"
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
    <ListItems :items="filteredData" />
  </div>
</template>

<script>
  // components
  import ListItems from './ListItems';
  import {
    VBtn,
    VIcon,
    VCol,
    VRow,
    VContainer,
    VBottomNavigation,
    VTextField
  } from 'vuetify/lib';

  // mock data
  import data from '../data/data.json';

  export default {
    name: 'Headers',
    components: {
      ListItems,
      VBtn,
      VIcon,
      VCol,
      VRow,
      VContainer,
      VBottomNavigation,
      VTextField
    },
    data: () => ({
      search: null,
      items: []
    }),
    created() {
      this.items = [...data].sort(({ title: a }, { title: b }) =>
        a.toLowerCase() < b.toLowerCase() ? -1 : 1
      );
    },
    computed: {
      filteredData() {
        return this.items.filter(({ title }) => 
          this.search !== null && title.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    },
  };
</script>

<style>
  .my-search {
    background: #ccc;
    height: 56px;
  }
</style>
