<template>
  <v-container>
    <h2>{{this.$store.state.user.name}}</h2>
    <ul>
      <li>- 나이 : {{this.$store.state.user.age}}</li>
      <li>- 주소 : {{this.$store.state.user.address}}</li>
      <li>- 번호 : {{this.$store.state.user.phone}}</li>
    </ul>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>