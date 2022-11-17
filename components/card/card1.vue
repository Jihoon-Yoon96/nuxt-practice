<template>
  <v-card
    class="mx-auto"
    color="#26c6da"
    dark
    
  >
    <v-card-title>
      <!-- <v-icon
        large
        left
      >
        mdi-twitter
      </v-icon> -->
      <span class="text-h6 font-weight-bold">{{this.title}}</span>
    </v-card-title>

    <v-card-text class="text-h5 font-weight-bold" v-html=this.content />

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <avatar
            :topType = this.avt.topType
            :accessoriesType = this.avt.accessoriesType
            :hairColor = this.avt.hairColor
            :facialHairType = this.avt.facialHairType
            :clotheType = this.avt.clotheType
            :clotheColor = this.avt.clotheColor
            :eyeType = this.avt.eyeType
            :eyebrowType = this.avt.eyebrowType
            :mouthType = this.avt.mouthType
            :skinColor = this.avt.skinColor
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{this.user}}</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">
            mdi-heart
          </v-icon>
          <span class="subheading mr-2">{{this.heart_num}}</span>

          <v-icon class="mr-1">
            mdi-share-variant
          </v-icon>
          <span class="subheading">{{this.share_num}}</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>

import avatar from '../card/avatar.vue'

export default {
  components: { avatar },
  props:{
    title: String,
    user: String,
    content: String,
    heart_num: Number,
    share_num: Number,
    avt: Object
  },
  data:()=>({
    // content1:"안녕"
  }),
  mounted(){
    // console.log(this.avt)
    // console.log(typeof(this.avt))
  }

}
</script>

<style>

</style>