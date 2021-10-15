<template>
  <section class="first-view">
    <v-container class="container--fluid">
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>はじめに</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>お知らせ</v-card-title>
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
          <v-card style="height: 1000px">
            <v-card-title>返品・返金について</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>注意事項</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import TradingFlowView from '../parts/TradingFlowView'

export default {
  data: () => ({
  }),
  components: {
    TradingFlowView
  }
}
</script>
