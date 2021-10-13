<template>
  <section class="trading-flow-view">
    <v-card-title>お取引の流れ</v-card-title>
    <v-card-text>
      ※ 決済方法が『かんたん決済・銀行振り込み』か『代引き発送』お取引の流れが異なります。お選びいただいた決済方法をクリック（タップ）してください。
    </v-card-text>
    <v-tabs
        color="orange darken-1"
        background-color="grey lighten-4"
        show-arrows
      >
        <v-tab>かんたん決済・銀行振り込み</v-tab>
        <v-tab>代引き発送</v-tab>
        <v-tab-item
          v-for="n in 2"
          :key="n"
        >
          <v-container>
            <v-row>
              <v-col
              >
                <template>
                  <v-timeline
                    align-top
                    :dense="$vuetify.breakpoint.smAndDown"
                  >
                    <v-timeline-item
                      v-for="(item, i) in items"
                      :key="i"
                      :color="item.color"
                      class="white--text mb-12"
                      fill-dot
                      large
                    >
                    <template v-slot:icon>
                      <span>{{ i + 1 }}</span>
                    </template>
                      <v-card
                        :color="item.color"
                        dark
                      >
                        <v-card-title class="text-h6">
                          {{ item.title }}
                        </v-card-title>
                        <v-card-text
                          v-if="item.describe"
                          class="white text--primary"
                        >
                          <p>{{ item.describe }}</p>
                        </v-card-text>
                      </v-card>
                    </v-timeline-item>
                  </v-timeline>
                </template>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <template v-if="n == 1">
                  <DetailedExplanationByPaymentMethod1/>
                </template>
                <template v-else>
                  <DetailedExplanationByPaymentMethod2/>
                </template>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
    </v-tabs>
  </section>
</template>
<script>
import DetailedExplanationByPaymentMethod1 from '../parts/DetailedExplanationByPaymentMethod1'
import DetailedExplanationByPaymentMethod2 from '../parts/DetailedExplanationByPaymentMethod2'

export default {
  data: () => ({
    items: [
      {
        color: 'red lighten-2',
        icon: 'mdi-star',
        title: '落札',
        describe: 'ヤフオク！からメールが届きます'
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-book-variant',
        title: 'オーダーフォーム入力',
        describe: '説明〜〜〜〜'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-airballoon',
        title: '支払い方法選択',
        describe: ''
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
        title: 'かんたん決済・銀行振り込み',
        describe: ''
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
        title: '振込金額（商品代＋送料）のお知らせを受け取る',
        describe: ''
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
        title: '決済',
        describe: '１４時までの決済で当日発送'
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
        title: '商品発送',
        describe: ''
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
        title: '弊社より発送完了メール・評価を送付',
        describe: ''
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
        title: '商品到着・確認',
        describe: ''
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
        title: '商品・対応に問題がなければ評価をお願いいたします。',
        describe: ''
      }
    ]
  }),
  components: {
    DetailedExplanationByPaymentMethod1,
    DetailedExplanationByPaymentMethod2
  }
}
</script>
