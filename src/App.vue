<script setup>
import BankAccount from './components/bank-account/BankAccount.vue';
import Contact from './components/contact/Contact.vue';
import Gallery from './components/gallery/Gallery.vue';
import Video from './components/gallery/Video.vue';
import HelloWorld from './components/HelloWorld.vue'
import Letter from './components/Letter.vue';
import Location from './components/location/Location.vue';
import MessageBoard from './components/message-board/MessageBoard.vue';
import Start from './components/Start.vue';

const varNameOfBride = "김은채";
const varNameOfGroom = "이준서";
</script>

<template>
  <!-- show modal first for selecting language -->
  <HelloWorld msg="Welcome to ND's happy world!" />
  <Start :nameOfBride="varNameOfBride" :nameOfGroom="varNameOfGroom" dateTime="2099.99.99 SAT PM12:30" vanue="빌라드지디 서울 ㅇㅇ홀"/>
  <Letter />
  <Contact />
  <Gallery />
  <Video />
  <Location />
  <BankAccount />
  <MessageBoard />
</template>

<style scoped>

</style>
