<template>
  <section class="price-list">
    <v-container
      class="pt-15 pb-15 fluid"
    >
      <v-row>
        <v-card class="mx-auto">
          <v-card-title>送料一覧表</v-card-title>
          <v-divider
            class="ml-3 mr-3"
          ></v-divider>
          <v-card-text
            class="pb-0"
          >
            <p>■ こちらは、<a href="https://auctions.yahoo.co.jp/seller/okazakis808" target="_blank" rel="noopenner">パーツショップタッキー</a>の税込送料一覧表です。</p>
            <p>
              ■ ヤフオクストア掲載商品の『送料区分』の欄をよくご覧になって、送料の見間違いのないようにご注意ください。<br>
              当店からの発送は、基本的に福山通運（元払い）と佐川急便（元払い）での発送とさせていただきます。<br>
              ※ 運送会社の指定はできませんのでご了承ください。
            </p>
            <p>
              ■ 運送会社の都合により送料は【業者・法人様宛】と【個人様宛】で異なります。<br>
              商品落札後、お届け先が【業者・法人様宛】の場合は必ず会社名をオーダーフォームに会社名をご記入ください。<br>
              ※ 個人様で修理工場に持ち込む場合は、修理工場直送にされますと【業者・法人様宛】料金となりお得です。<br>
              ※ お届け先の名前が個人様の場合は、営業所（支店）止めの場合でも、【個人様宛】料金となります。ご了承ください。
            </p>
            <p>
              （表中 ※１）サイズ「 I 」は御入札の前に、商品ページの『出品者へ質問』ボタンより、運送の可否をお問い合わせください。<br>
              質問欄へ<br>
              ・送り先住所（市町村まで）<br>
              ・業者・法人様または個人様であること<br>
              ・重量物の場合はリフトの有無<br>
              をご記載の上、ご質問ください。<br>
              ご質問欄に<strong style="color: red;">氏名・電話番号等の個人情報を掲載しないでください。</strong><br>
              運送会社の都合でサイズ「 I 」は配達ができない地域があります。<br>
              ※ 日曜日・祝祭日指定は運送会社の都合によりできません。
            </p>
          </v-card-text>
          <v-container class="scroll" id="price-table">
            ← スマートフォンでご覧の方は横スクロールしてご覧ください。→
            <table style="margin: auto;" class="tbl-r07" cellspacing="0" cellpadding="0">
              <tr>
                <tr>
                  <th colspan="2" rowspan="3" width="300" style="font-size: 24px">送料区分</th>
                </tr>
                <tr>
                  <td class="th02">中国</td>
                  <td class="th02">四国</td>
                  <td class="th02">関西</td>
                  <td class="th02" style="font-size:12px;">北九州</td>
                  <td class="th02">北陸</td>
                  <td class="th02">南九州</td>
                  <td class="th02">東海</td>
                  <td class="th02">信越</td>
                  <td class="th02">関東</td>
                  <td class="th02">南東北</td>
                  <td class="th02">北東北</td>
                  <td class="th02">北海道</td>
                  <td class="th02">沖縄</td>
                  <td class="th02">離島</td>
                </tr>
                <tr class="th_pref">
                  <td class="th_pref"> 鳥取<br> 島根<br> 岡山<br> 広島<br> 山口 </td>
                  <td class="th_pref"> <span>徳島</span><br> <span>香川</span><br> <span>愛媛</span><br> <span>高知</span><br> </td>
                  <td class="th_pref"> <span>滋賀県</span><br> <span>京都府</span><br> <span>大阪府</span><br> <span>兵庫県</span><br> <span>奈良県</span><br> <span>和歌山県</span><br> </td>
                  <td class="th_pref"> <span>福岡県</span><br> <span>佐賀県</span><br> <span>長崎県</span><br> <span>大分県</span><br> </td>
                  <td class="th_pref"> <span>富山県</span><br> <span>石川県</span><br> <span>福井県</span><br> </td>
                  <td class="th_pref"> <span>熊本県</span><br> <span>宮崎県</span><br> <span>鹿児島県</span><br> </td>
                  <td class="th_pref"> <span>岐阜県</span><br> <span>静岡県</span><br> <span>愛知県</span><br> <span>三重県</span><br> </td>
                  <td class="th_pref"> <span>新潟県</span><br> <span>長野県</span><br> </td>
                  <td class="th_pref"> <span>茨城県</span><br> <span>栃木県</span><br> <span>群馬県</span><br> <span>埼玉県</span><br> <span>千葉県</span><br> <span>東京都</span><br> <span>神奈川県</span><br> <span>山梨県</span><br> </td>
                  <td class="th_pref"> <span>宮城県</span><br> <span>山形県</span><br> <span>福島県</span><br> </td>
                  <td class="th_pref"> <span>青森県</span><br> <span>岩手県</span><br> <span>秋田県</span><br> </td>
                  <td class="th_pref"> <span>北海道</span><br> </td>
                  <td class="th_pref"> <span>沖縄</span><br> </td>
                  <td class="th_pref"> <span>離島</span><br> </td>
                </tr>
                <tr>
                  <td rowspan="1" class="th02" width="200px">SS</td>
                  <td rowspan="2" style="vertical-align: inherit; font-size: 16px;"><span>個人宛て</span><br>法人宛て<br>どちらも同額</td>
                  <td>1035</td>
                  <td>1050</td>
                  <td>1050</td>
                  <td>1200</td>
                  <td>1230</td>
                  <td>1230</td>
                  <td>1230</td>
                  <td>1290</td>
                  <td>1290</td>
                  <td>1620</td>
                  <td>1680</td>
                  <td>2415</td>
                  <td rowspan="16" style="vertical-align: inherit;">要問合わせ</td>
                  <td rowspan="16" style="vertical-align: inherit;">要問合わせ</td>
                </tr>
                <tr>
                  <td rowspan="1" class="th02" width="200px">S</td>
                  <td>2580</td>
                  <td>2685</td>
                  <td>2685</td>
                  <td>2730</td>
                  <td>3150</td>
                  <td>3150</td>
                  <td>3045</td>
                  <td>3420</td>
                  <td>3570</td>
                  <td>3885</td>
                  <td>4305</td>
                  <td>5460</td>
                </tr>
                <tr>
                  <td rowspan="2" class="th02" width="200px">M</td>
                  <td>法人宛て送料</td>
                  <td>1800</td>
                  <td>1950</td>
                  <td>1950</td>
                  <td>2250</td>
                  <td>2400</td>
                  <td>2550</td>
                  <td>2250</td>
                  <td>2700</td>
                  <td>2850</td>
                  <td>3150</td>
                  <td>3600</td>
                  <td>3900</td>
                </tr>
                <tr>
                  <td>個人宛て送料</td>
                  <td>3630</td>
                  <td>3735</td>
                  <td>3675</td>
                  <td>3735</td>
                  <td>4470</td>
                  <td>4515</td>
                  <td>4305</td>
                  <td>4890</td>
                  <td>5205</td>
                  <td>5730</td>
                  <td>6465</td>
                  <td>8295</td>
                </tr>
                <tr>
                  <td rowspan="2" class="th02" width="200px">L</td>
                  <td>法人宛て送料</td>
                  <td>2400</td>
                  <td>2550</td>
                  <td>2700</td>
                  <td>3450</td>
                  <td>3450</td>
                  <td>3750</td>
                  <td>3450</td>
                  <td>4050</td>
                  <td>4350</td>
                  <td>5100</td>
                  <td>5850</td>
                  <td>6600</td>
                </tr>
                <tr >
                  <td>個人宛て送料</td>
                  <td>5730</td>
                  <td>5835</td>
                  <td>5730</td>
                  <td>5835</td>
                  <td>7095</td>
                  <td>7200</td>
                  <td>6825</td>
                  <td>7875</td>
                  <td>8400</td>
                  <td>9405</td>
                  <td>10710</td>
                  <td>14070</td>
                </tr>
                <tr>
                  <td rowspan="2" class="th02" width="200px">2L</td>
                  <td>法人宛て送料</td>
                  <td>2700</td>
                  <td>3000</td>
                  <td>3150</td>
                  <td>3900</td>
                  <td>4050</td>
                  <td>4350</td>
                  <td>3900</td>
                  <td>4650</td>
                  <td>4950</td>
                  <td>5850</td>
                  <td>6750</td>
                  <td>7650</td>
                </tr>
                <tr >
                  <td>個人宛て送料</td>
                  <td colspan="12" style="vertical-align: inherit;">要問合わせ</td>
                </tr>
                <tr>
                  <td rowspan="2" class="th02" width="200px">3L</td>
                  <td>法人宛て送料</td>
                  <td>3000</td>
                  <td>3300</td>
                  <td>3450</td>
                  <td>4350</td>
                  <td>4650</td>
                  <td>4950</td>
                  <td>4350</td>
                  <td>5400</td>
                  <td>5700</td>
                  <td>6750</td>
                  <td>7950</td>
                  <td>9000</td>
                </tr>
                <tr >
                  <td>個人宛て送料</td>
                  <td colspan="12" style="vertical-align: inherit;">要問合わせ</td>
                </tr>
                <tr>
                  <td rowspan="2" class="th02" width="200px">4L</td>
                  <td>法人宛て送料</td>
                  <td>4500</td>
                  <td>4950</td>
                  <td>5250</td>
                  <td>6750</td>
                  <td>7050</td>
                  <td>7800</td>
                  <td>6750</td>
                  <td>8400</td>
                  <td>9000</td>
                  <td>10950</td>
                  <td>12900</td>
                  <td>14700</td>
                </tr>
                <tr >
                  <td>個人宛て送料</td>
                  <td colspan="12" style="vertical-align: inherit;">要問合わせ</td>
                </tr>
                <tr>
                  <td rowspan="2" class="th02" width="200px">I</td>
                  <td colspan="13">要問い合わせ</td>
                </tr>
            </table>
          </v-container>
        </v-card>
      </v-row>
    </v-container>
  </section>
</template>
<script>
// import ScrollHint from 'scroll-hint'

// export default {
//   scrollHint: ScrollHint.new('.js-scrollable', {
//     suggestiveShadow: true,
//     remainingTime: 5000,
//     i18n: {
//       scrollable: 'スクロールできます'
//     }
//   })
// }
</script>
