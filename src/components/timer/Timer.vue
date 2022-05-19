<script setup>
import "./timer.css";
import { ref } from "vue";
import sound from "../../alarm.mp3";
let type = ref("pomodoro");
let minutes = ref(25);
let seconds = ref(60);
let state = ref(true);
let first = ref(true);
let audio = new Audio(sound);
const emit = defineEmits(["changeTimer"]);
let minuteId;
let secondsId;
const handleTimer = () => {
  if (state.value) {
    if (first.value) {
      minutes.value--;
      first.value = false;
    }
    startTimer();
    state.value = !state.value;
  } else {
    stopTimer();
    state.value = !state.value;
  }
};
const startTimer = () => {
  minuteId = setInterval(() => {
    if (minutes.value !== 0 || seconds.value !== 0) {
      seconds.value = 60;
      minutes.value--;
    } else {
      stopTimer();
      audio.play();
      first.value = true;
      setTimeout(() => {
        state.value = !state.value;
        changeType(type.value);
      }, 5000);
    }
  }, 60000);
  secondsId = setInterval(() => {
    seconds.value--;
  }, 1000);
};

const stopTimer = () => {
  clearInterval(minuteId);
  clearInterval(secondsId);
};

const changeType = (val) => {
  if (!state.value) {
    if (
      window.confirm(
        "The timer is still running, are you sure you want to switch?"
      )
    ) {
      type.value = val;
      console.log(type);
      if (val === "long") {
        minutes.value = 15;
      } else if (val === "short") {
        minutes.value = 5;
      } else {
        minutes.value = 25;
      }
      seconds.value = 60;
      emit("changeTimer", val);
      stopTimer();
      state.value = true;
    }
  } else {
    type.value = val;
    if (val === "long") {
      minutes.value = 15;
    } else if (val === "short") {
      minutes.value = 5;
    } else {
      minutes.value = 25;
    }
    seconds.value = 60;
    emit("changeTimer", val);
    stopTimer();
    state.value = true;
  }
};
</script>

<template>
  <div class="timer-container">
    <div class="timer-container-switch">
      <button
        class="timer-container-switch-item"
        @click="() => changeType('pomodoro')"
        :style="type == 'pomodoro' && { backgroundColor: 'rgb(0,0,0,0.2)' }"
      >
        Pomodoro
      </button>
      <button
        class="timer-container-switch-item"
        :style="type == 'short' && { backgroundColor: 'rgb(0,0,0,0.2)' }"
        @click="() => changeType('short')"
      >
        Short Break
      </button>
      <button
        class="timer-container-switch-item"
        :style="type == 'long' && { backgroundColor: 'rgb(0,0,0,0.2)' }"
        @click="() => changeType('long')"
      >
        Long Break
      </button>
    </div>
    <div class="time">
      <!-- <span v-if="(state = 'START')">25:00</span> -->
      <!-- <span v-else-if="(state = 'STOP')"> {{ minutes }}:{{ seconds }}</span> -->
      <span>
        {{ minutes }}:{{
          seconds == 60 ? "00" : seconds < 10 ? "0".concat(seconds) : seconds
        }}</span
      >
    </div>
    <!-- <div class="time" v-else-if="(state = 'STOP')">
      {{ minutes }}:{{ seconds }}
    </div> -->
    <!-- <div class="time" v-else-if="(type = 'short')">5:00</div>
    <div class="time" v-else>15:00</div> -->
    <button class="timer-container-button" @click="handleTimer">
      <span class="button-shadow"></span>
      <span class="button-edge"></span>
      <span
        class="button-front text"
        :style="
          type == 'short'
            ? { color: 'rgb(76, 145, 149)' }
            : type == 'long'
            ? { color: 'rgb(69, 124, 163)' }
            : { color: 'rgb(217, 85, 80)' }
        "
      >
        {{ state ? "START" : "STOP" }}
      </span>
    </button>
  </div>
</template>
