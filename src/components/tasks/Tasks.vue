<script setup>
import "./tasks.css";
import AddTask from "@/components/addTask/AddTask.vue";
import { ref } from "vue";

const createNewTask = ref(false);
const Tasks = ref([]);
let finished = ref(false);
const Pomodoros = ref([]);
const currentTask = ref("");
const handleAction = (task, number) => {
  createNewTask.value = !createNewTask;
  if (task || number) {
    Tasks.value.push({ task, number, finished: finished.value });
    console.log(Tasks);
    currentTask.value = task;
  }
};
</script>

<template>
  <div class="tasks-container">
    <div class="task-container-text">
      <p>#1</p>
      <p v-if="currentTask">{{ currentTask }}</p>
      <p v-else>Time to focus</p>
    </div>
    <div class="edit-task">
      <p>Tasks</p>
      <button class="edit-task-button">
        <font-awesome-icon class="ellipsis" icon="ellipsis-vertical" />
      </button>
    </div>
    <div class="tasks-container-list" v-for="(task, index) in Tasks">
      <div
        class="task"
        @click="currentTask = task.task"
        :style="
          currentTask === task.task
            ? { borderLeft: '5px solid black' }
            : { borderLeft: '5px solid white' }
        "
      >
        <div class="task-left">
          <font-awesome-icon
            class="icon"
            icon="circle-check"
            :style="
              task.finished ? { color: '#d95550' } : { color: 'lightgrey' }
            "
            @click="task.finished = !task.finished"
          />
          <p
            :style="
              task.finished
                ? { textDecoration: 'line-through', color: 'lightgrey' }
                : { textDecoration: 'none' }
            "
          >
            {{ task.task }}
          </p>
        </div>
        <div class="task-right">
          <p>0/{{ task.number }}</p>
          <button
            class="task-right-button"
            @click="
              () => {
                Tasks.splice(index, 1);
                currentTask = false;
              }
            "
          >
            <font-awesome-icon class="ellipsis" icon="trash-can" />
          </button>
        </div>
      </div>
    </div>
    <button
      v-if="!createNewTask"
      class="task-container-button"
      @click="createNewTask = !createNewTask"
    >
      <font-awesome-icon class="icon" icon="circle-plus" />
      Add Task
    </button>
    <AddTask v-else :username="matt" @actionCaptured="handleAction" />
  </div>
</template>
