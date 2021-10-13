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
            <v-card-title>お取引の流れ</v-card-title>
            <v-card-text>
              決済の方法によって、お取引の流れが異なります。<br>
              お選びいただいた決済方法をクリック（タップ）してください。
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
                  <v-container fluid>
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
                              :icon="item.icon"
                              fill-dot
                            >
                              <v-card
                                :color="item.color"
                                dark
                              >
                                <v-card-title class="text-h6">
                                  {{ item.title }}
                                </v-card-title>
                                <v-card-text class="white text--primary">
                                  <p>{{ item.describe }}</p>
                                </v-card-text>
                              </v-card>
                            </v-timeline-item>
                          </v-timeline>
                        </template>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-tab-item>
              </v-tabs>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card>
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
        describe: '※重要※落札後、72時間以内に入力してください。お届け先が【業者・法人様】は必ず屋号・会社名を入力してください。複数の商品を落札した場合、全てのオーダーフォームに入力してください。入力がない場合、同時発送、同梱発送ができない場合があります。また、同梱希望か別梱包希望かをオーダーフォーム内「ご要望」に必ず入力してください。折り返し、送料をお知らせいたします。※破損の恐れがある等、同梱不可の場合があります。ご了承ください。※オーダーフォーム入力後、「決定する」ボタンを押した後は、情報の変更はできません。'
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
  })
}
</script>
