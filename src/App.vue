<template>
  <Main :pOne="pOne" :pTwo="pTwo" />

  <modal-box v-if="startModal">
    <template v-slot:m-header>
      <div class="flex w-full justify-center py-3 px-10">
        <span class="text-3xl">The Artemis</span>
      </div>
    </template>
    <template v-slot:m-body>
      <div class="flex flex-col w-full px-5">
        <span>Player 1</span>
        <div class="flex flex-row space-x-2">
          <div class="w-10" :class="pOne"></div>
          <select v-model="pOne" class="w-full">
            <option v-for="opt in colorOpt" :value="opt.val" :key="opt.val">{{
              opt.name
            }}</option>
          </select>
        </div>
        <span>Player 2</span>
        <div class="flex flex-row space-x-2">
          <div class="w-10" :class="pTwo"></div>
          <select v-model="pTwo" class="w-full">
            <option v-for="opt in colorOpt" :value="opt.val" :key="opt.val">{{
              opt.name
            }}</option>
          </select>
        </div>
      </div>
    </template>
    <template v-slot:m-footer>
      <button
        class="w-full mb-2 mt-6 mx-2 rounded-lg py-1 bg-green-500"
        @click="onStart"
      >
        Start
      </button>
    </template>
  </modal-box>

  <router-view />
</template>

<script>
import Main from "../src/components/Main.vue";
import ModalBox from "../src/components/ModalBox.vue";
export default {
  components: { Main, ModalBox },
  data() {
    return {
      pOne: "bg-red-500",
      pTwo: "bg-green-500",
      colorOpt: [
        { name: "Green", val: "bg-green-500" },
        { name: "Red", val: "bg-red-500" },
        { name: "yellow", val: "bg-yellow-500" },
        { name: "blue", val: "bg-blue-500" },
      ],
      startModal: true,
    };
  },
  methods: {},
};
</script>
<style></style>
