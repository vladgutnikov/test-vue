<template>
  <div>
    <v-subheader v-if="item.header" v-text="item.header" />

    <v-divider v-else-if="item.divider" :inset="item.inset" />

    <v-list-item v-else :key="item.title">
      <v-list-item-avatar>
        <v-img :src="item.avatar" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-html="item.title" />
        <v-list-item-subtitle v-html="item.subtitle" />
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
  import {
    VListItemTitle,
    VListItemSubtitle,
    VListItemContent,
    VSubheader,
    VListItem
  } from 'vuetify/lib';

  export default {
    name: 'ListItem',
    components: {
      VListItemTitle,
      VListItemSubtitle,
      VListItemContent,
      VSubheader,
      VListItem
    },
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  };
</script>
