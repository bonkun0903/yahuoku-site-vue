<template>
  <v-app>
    <v-main>
      <v-navigation-drawer
      v-model="drawer"
      color="basil"
      floating
      app
      >

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.icon"
          :to="link.to"
          link
        >
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ link.name}}</v-list-item-title>
      </v-list-item-content>
      </v-list-item>
      </v-list>
      </v-navigation-drawer>

      <v-card color="basil">
        <v-toolbar color="basil">
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="text-center justify-center py-6 basil--text">
            岡崎車輌部品ヤフオク店
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
          <template v-slot:extension>
            <v-tabs
              v-model="tab"
              background-color="transparent"
              color="basil"
              grow
            >
              <v-tab
                v-for="item in links"
                :key="item.name"
                :to="item.to"
              >
                {{ item.name }}
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>
        <router-view/>
      </v-card>
    </v-main>
  </v-app>
</template>
<script>

export default {
  name: 'App',
  data: () => ({
    tab: null,
    drawer: null,
    links: [
      { name: 'ホーム', to: '/', icon: 'mdi-inbox-arrow-down' },
      { name: 'ストア情報', to: '/store_info', icon: 'mdi-inbox-arrow-down' },
      { name: 'はじめに', to: '/first_view', icon: 'mdi-inbox-arrow-down' },
      { name: 'お知らせ', to: '/notice_view', icon: 'mdi-inbox-arrow-down' },
      { name: 'お取引の流れ', to: '/trading_flow_view', icon: 'mdi-inbox-arrow-down' },
      { name: '注意事項', to: '/considerations_view', icon: 'mdi-inbox-arrow-down' },
      { name: '返品・返金', to: '/return_and_refund_view', icon: 'mdi-inbox-arrow-down' },
      { name: '送料表', to: '/price_list', icon: 'mdi-inbox-arrow-down' }
    ]
  }),
  components: {
  }
}
</script>
<style lang="scss" scoped>
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
