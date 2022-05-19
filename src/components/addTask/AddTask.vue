<script setup>
import "./addTask.css";
import { ref } from "vue";
const number = ref(1);
const task = ref("");
const emit = defineEmits(["actionCaptured"]);

const handleClick = (action) => {
  if (action == "send") {
    emit("actionCaptured", task.value, number.value);
  } else {
    emit("actionCaptured");
  }
};
</script>

<template>
  <div class="addTask-container">
    <div class="addTask-wrapper">
      <input
        type="text"
        class="addTask-input"
        v-model="task"
        placeholder="What are you working on?"
      />
      <div class="addTask-estimates">
        <p>Est Pomodoros</p>
        <div class="addTask-buttons">
          <input type="number" class="number" :value="number" />
          <button class="addTask-button" @click="number += 1">
            <font-awesome-icon class="sort-icon" icon="caret-up" />
          </button>
          <button
            class="addTask-button"
            @click="number -= 1"
            :disabled="number < 1"
          >
            <font-awesome-icon class="sort-icon" icon="caret-down" />
          </button>
        </div>
      </div>
    </div>
    <div class="addTask-save">
      <div class="addTask-save-buttons">
        <button class="cancel" @click="() => handleClick('close')">
          Cancel
        </button>
        <button
          class="save"
          :disabled="task.length < 1"
          @click="() => handleClick('send')"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>
