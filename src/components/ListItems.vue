<template>
  <v-container>
    <v-row class="justify-center">
      <v-col md="4">
        <v-card max-width="100%" class="mx-auto" v-show="!!items.length">
          <v-list three-line>
            <ListItem
              v-for="(item, index) in items"
              :key="`${index} ${item.header} `"
              :item="item"
            />
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { VCard, VList, VCol, VRow, VContainer } from 'vuetify/lib';
  import ListItem from './ListItem.vue';

  export default {
    name: 'ListItems',
    components: {
      VCard,
      VList,
      VCol,
      VRow,
      VContainer,
      ListItem
    },
    props: {
      items: {
        type: Array,
        default: () => []
      }
    }
  };
</script>
