<template>
  <v-row justify="center" align="center">
    <v-col  sm="12" md="auto" v-for="(b, i) in border" :key="i">
      <card1 
        :title = b.title
        :content = b.content
        :user = b.user
        :heart_num = b.heart_num
        :share_num = b.share_num
        :avt= b.avt
      />
    </v-col>
  </v-row>
</template>

<script>
import card1 from '@/components/card/card1'

export default {
  name: 'IndexPage',
  components:{card1},
  data:()=>({
    border:[
      {
        title:"test1",
        content:"test<br>test<br>test<br>",
        user:"test1",
        heart_num:12,
        share_num:300,
        avt:{
          topType: "WinterHat1",
          accessoriesType : "Kurt",
          hairColor : "Red",
          facialHairType : "BeardMedium",
          clotheType : "Hoodie",
          clotheColor : "Black",
          eyeType : "Default",
          eyebrowType : "Default",
          mouthType : "Default",
          skinColor : "Brown"
        }
      },
      {
        title:"test1",
        content:"testtesttesttesttesttesttesttesttesttesttesttesttest<br>test<br>test<br>",
        user:"test1",
        heart_num:6,
        share_num:34,
        avt:{
          topType: "",
          accessoriesType : "",
          hairColor : "",
          facialHairType : "",
          clotheType : "",
          clotheColor : "",
          eyeType : "",
          eyebrowType : "",
          mouthType : "",
          skinColor : ""
        }
      },
      {
        title:"test1",
        content:"test<br>testtesttesttesttesttesttesttesttesttesttesttesttesttesttestv<br>test<br>",
        user:"test1",
        heart_num:7,
        share_num:400,
        avt:{
          topType: "ShortHairDreads01",
          accessoriesType : "Round",
          hairColor : "Blue",
          facialHairType : "Blank",
          clotheType : "GraphicShirt",
          clotheColor : "Pink",
          eyeType : "Default",
          eyebrowType : "Default",
          mouthType : "Default",
          skinColor : "Pale"
        }
      },
    ]
  })
}
</script>
