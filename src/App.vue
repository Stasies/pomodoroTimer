<!-- <script setup>
import { ref } from "vue";
import FirstComponent from "./components/FirstComponent.vue";
const likes = ref(0);
const dislikes = ref(0);
const text = ref("");
const blue = ref("");
const ok = true;
const b = 0;
const a = 0;
const c;
function log(a, b) {
  c = a - b;
  return c;
}
</script>

<template>
  <div>Hello, World</div>
  <p>likes: {{ likes }}</p>
  <p>dislikes: {{ dislikes }}</p>
  <button @click="likes += 1">Like</button>
  <button @click="dislikes += 1">Dislike</button>
  <input type="text" @input="(e) => (text = e.target.value)" />
  <input type="text" v-model="blue" />
  <p>{{ text }}</p>
  <p>{{ blue }}</p>
  <input type="number" v-model.number="b" />
  <input type="number" v-model.number="a" />
  <button @click="log(b, a)">count</button>
  <p v-if="blue">yes</p>
  <p v-else>{{ c }}</p>
  <FirstComponent />
</template>

<style></style> -->
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
