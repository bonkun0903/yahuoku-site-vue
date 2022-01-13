<template>
  <section id="notice-view">
    <v-card-title>お知らせ</v-card-title>
    <v-card-text>
      <h2 style="color: red">営業日カレンダー</h2>
      <v-row>
        <v-col class="col-sm-6 col-12"><Calender202201/></v-col>
        <v-col><Calender202202/></v-col>
      </v-row>
      <p>
        ＜商品落札後のメール送信＞<br>
        商品落札時、オーダーフォーム入力時に通知メールがお客様のアドレス宛に送信されます。<br>
        こちらの自動送信メールが届かない場合は、連絡掲示板又は当店連絡用メールアドレス<br>【okazakiyahuoku@gmail.com】へご一報ください。<br>
        ＜当店営業日＞<br>
        ◎営業日：平日8:00〜17:00<br>
        ◎定休日：毎週土・日,祝祭日,その他大型連休（お正月休み,ＧＷ,お盆休み）<br>
        <!-- ※連休などの対応につきましては当サイト営業日カレンダーをご覧ください。<br> -->
        ※営業日・営業時間以外での質問・問い合わせ・メール対応・発送・評価などにつきましては、対応いたしかねますのでご了承ください。
      </p>
    </v-card-text>
  </section>
</template>
<script>
import Calender202201 from './/Calender202201'
import Calender202202 from './/Calender202202'

export default {
  components: {
    Calender202201,
    Calender202202
  }
}
</script>
