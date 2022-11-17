<template>
  <client-only>
    <v-img
    class="elevation-6"
    alt=""
    :src=this.avatar
  ></v-img>
  </client-only>
</template>

<script>
export default {
    data:()=>({
        avatar:`https://avataaars.io/?avatarStyle=Transparent`,
    }),
    props:{
        topType: String,
        accessoriesType : String,
        hairColor : String,
        facialHairType : String,
        clotheType : String,
        clotheColor : String,
        eyeType : String,
        eyebrowType : String,
        mouthType : String,
        skinColor : String,
    },
    methods:{
        
    },
    created(){
        // console.log('created : '+ this.topType);
        this.topType ? this.avatar +=('&topType='+this.topType) : this.avatar = this.avatar
        this.accessoriesType ? this.avatar +=('&accessoriesType='+this.accessoriesType) : this.avatar = this.avatar
        this.hairColor ? this.avatar +=('&hairColor='+this.hairColor) : this.avatar = this.avatar
        this.facialHairType ? this.avatar +=('&facialHairType='+this.facialHairType) : this.avatar = this.avatar
        this.clotheType ? this.avatar +=('&clotheType='+this.clotheType) : this.avatar = this.avatar
        this.clotheColor ? this.avatar +=('&clotheColor='+this.clotheColor) : this.avatar = this.avatar
        this.eyeType ? this.avatar +=('&eyeType='+this.eyeType) : this.avatar = this.avatar
        this.eyebrowType ? this.avatar +=('&eyebrowType='+this.eyebrowType) : this.avatar = this.avatar
        this.mouthType ? this.avatar +=('&mouthType='+this.mouthType) : this.avatar = this.avatar
        this.skinColor ? this.avatar +=('&skinColor='+this.skinColor) : this.avatar = this.avatar
    },
    mounted(){
       console.log('mounted : '+ this.avatar);
        
    },
    


};
</script>

<style>
</style>