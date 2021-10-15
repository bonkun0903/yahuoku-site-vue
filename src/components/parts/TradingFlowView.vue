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
                    v-for="(item, i) in choiceItems(n)"
                    :key="i"
                    :color="item.color"
                    class="white--text mb-12"
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
    tabs: null,
    items1: [
      {
        color: 'green lighten-1',
        icon: 'mdi-star',
        title: '落札'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-book-variant',
        title: 'オーダーフォーム入力'
      },
      {
        color: 'yellow darken-2',
        icon: 'mdi-airballoon',
        title: 'かんたん決済または、銀行振り込みを選択'
      },
      {
        color: 'yellow darken-2',
        icon: 'mdi-buffer',
        title: '振込金額（商品代＋送料）のお知らせを受け取る'
      },
      {
        color: 'yellow darken-2',
        icon: 'mdi-buffer',
        title: '決済'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-buffer',
        title: '商品発送'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-buffer',
        title: '弊社より発送完了メール・評価を送付'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-buffer',
        title: '商品到着・確認'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-buffer',
        title: '商品・対応に問題がなければ評価をお願いいたします。'
      }
    ],
    items2: [
      {
        color: 'green lighten-1',
        icon: 'mdi-star',
        title: '代引き落札'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-book-variant',
        title: 'オーダーフォーム入力'
      },
      {
        color: 'yellow darken-2',
        icon: 'mdi-airballoon',
        title: 'かんたん決済または、銀行振り込みを選択'
      },
      {
        color: 'yellow darken-2',
        icon: 'mdi-buffer',
        title: '振込金額（商品代＋送料）のお知らせを受け取る'
      },
      {
        color: 'yellow darken-2',
        icon: 'mdi-buffer',
        title: '決済'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-buffer',
        title: '商品発送'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-buffer',
        title: '弊社より発送完了メール・評価を送付'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-buffer',
        title: '商品到着・確認'
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-buffer',
        title: '商品・対応に問題がなければ評価をお願いいたします。'
      }
    ]
  }),
  computed: {
    choiceItems: function () {
      return function (n) {
        return n === 1 ? this.items1 : this.items2
      }
    }
  },
  components: {
    DetailedExplanationByPaymentMethod1,
    DetailedExplanationByPaymentMethod2
  }
}
</script>
