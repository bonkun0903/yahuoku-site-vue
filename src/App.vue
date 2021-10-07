<template>
  <v-app>
    <v-main>
      <v-navigation-drawer
      v-model="drawer"
      app
      >
      <v-sheet
      color="grey lighten-4"
      class="pa-4"
      >
      <v-avatar
      class="mb-4"
      color="grey darken-1"
      size="64"
      ></v-avatar>

      <div>john@vuetifyjs.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text, to] in links"
          :key="icon"
          :to="to"
          link
        >
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ text }}</v-list-item-title>
      </v-list-item-content>
      </v-list-item>
      </v-list>
      </v-navigation-drawer>

      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>岡崎車輌部品ヤフオク店</v-toolbar-title>
      </v-app-bar>

      <router-view/>
    </v-main>
  </v-app>
</template>
<script>

export default {
  name: 'App',
  data: () => ({
    drawer: null,
    links: [
      ['mdi-inbox-arrow-down', 'ホーム', '/'],
      ['mdi-inbox-arrow-down', 'ストア情報', '/'],
      ['mdi-inbox-arrow-down', 'はじめに', '/'],
      ['mdi-inbox-arrow-down', 'お知らせ', '/'],
      ['mdi-inbox-arrow-down', 'お取引の流れ', '/'],
      ['mdi-inbox-arrow-down', '注意事項', '/'],
      ['mdi-inbox-arrow-down', '返品・返金', '/'],
      ['mdi-send', '送料表', 'price_list']
    ]
  })
}
</script>
