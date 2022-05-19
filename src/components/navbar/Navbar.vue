<script setup>
import { ref } from "vue";
import "./navbar.css";
let windowWidth = ref(window.innerWidth);
window.onresize = function (e) {
  windowWidth.value = window.innerWidth;
};
</script>

<template>
  <div class="navbar-container">
    <div class="logo">
      <font-awesome-icon class="icon" icon="circle-check" />
      Pomodoro
    </div>
    <div class="navbar-buttons">
      <button class="navbar-button">
        <font-awesome-icon class="icon" icon="chart-column" />
        <span v-if="windowWidth > 425">Report</span>
      </button>

      <button class="navbar-button">
        <font-awesome-icon class="icon" icon="gear" />
        <span v-if="windowWidth > 425">Setting</span>
      </button>
      <button class="navbar-button">
        <font-awesome-icon class="icon" icon="circle-user" /><span
          v-if="windowWidth > 425"
          >Login</span
        >
      </button>
    </div>
  </div>
</template>
