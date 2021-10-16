<template>
  <section class="first-view">
    <div class="my-2 pagetop">
      <v-btn
        color="success"
        fab
        x-large
        dark
        @click="scrollTop"
      >
        <v-icon>mdi-domain</v-icon>
      </v-btn>
    </div>
    <v-container>
      <v-row
        class="pt-3"
        align="center"
        justify="space-around"
      >
        <v-btn
          v-for="(item, i) in links"
          :key=i
          class="hidden-sm-and-down white--text yellow darken-2"
          elevation="1"
          x-large
          v-scroll-to="item.linkTo"
          style="width: 180px;"
        >
          {{ item.title }}
        </v-btn>
      </v-row>
      <v-row>
        <v-col>
          <v-card>
            <FirstMessageView/>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card>
            <NoticeView/>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card>
            <TradingFlowView/>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card>
            <ConsiderationsView/>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card>
            <ReturnAndRefundView/>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import TradingFlowView from '../parts/TradingFlowView'
import FirstMessageView from '../parts/FirstMessageView'
import NoticeView from '../parts/NoticeView'
import ConsiderationsView from '../parts/ConsiderationsView'
import ReturnAndRefundView from '../parts/ReturnAndRefundView'

export default {
  data: () => ({
    links: [
      {
        title: 'はじめに',
        linkTo: '#first-message-view'
      },
      {
        title: 'お知らせ',
        linkTo: '#notice-view'
      },
      {
        title: 'お取引の流れ',
        linkTo: '#trading-flow-view'
      },
      {
        title: '注意事項',
        linkTo: '#considerations-view'
      },
      {
        title: '返品・返金について',
        linkTo: '#return-and-refund-view'
      }
    ]
  }),
  methods: {
    scrollTop: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  components: {
    TradingFlowView,
    FirstMessageView,
    NoticeView,
    ConsiderationsView,
    ReturnAndRefundView
  }
}
</script>
<style scoped>

</style>
