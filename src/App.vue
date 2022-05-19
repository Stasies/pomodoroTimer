<script setup>
import Navbar from "@/components/navbar/Navbar.vue";
import Tasks from "@/components/tasks/Tasks.vue";
import Timer from "@/components/timer/Timer.vue";
import { ref } from "vue";
import "./assets/style.css";
import AddTask from "./components/addTask/AddTask.vue";
const background = ref();
const handleChange = (timer) => {
  background.value = timer;
  console.log(background.value);
};
</script>

<template>
  <main>
    <div
      class="container"
      :style="
        background === 'short'
          ? { backgroundColor: 'rgb(76, 145, 149)' }
          : background === 'long'
          ? { backgroundColor: 'rgb(69, 124, 163)' }
          : { backroundColor: 'rgb(217, 85, 80)' }
      "
    >
      <div class="wrapper">
        <Navbar />
        <Timer @changeTimer="handleChange" />
        <Tasks />
      </div>
    </div>
  </main>
</template>
