<script setup>
import startImage from '@/assets/start.png'

defineProps({
  nameOfBride: String,
  nameOfGroom: String,
  dateTime: String,
  vanue: String
})
</script>

<template>
    <div class="image-container">
        <img :src="startImage" alt="image 1" />
        <div class="label name groom"> {{ nameOfGroom }} </div>
        <div class="label name bride"> {{ nameOfBride }} </div>
        <div class="label wedding-info date-time"> {{ dateTime }}</div>
        <div class="label wedding-info vanue"> {{ vanue }}</div>
    </div>

</template>

<style scoped>
.image-container {
    position: relative; 
    display: inline-block;
}

.image-container img {
    display: block;
    width: auto;
    height: auto;
}

.label {
    position: absolute;
    color: black;
    font-weight: bold;
    padding: 4px 8px;
}

.name {
    font-size: 3.5rem;
    left: 39%;
}

.groom {
    top: 40%;
}

.bride {
    top: 47%;
}

.wedding-info {
    font-size: 2rem;
}

.date-time {
    left: 27%;
    bottom: 15%;
}

.vanue {
    left: 33%;
    bottom:10%
}
</style>