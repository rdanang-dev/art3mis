<template>
  <Main
    :pOne="pOne"
    :pTwo="pTwo"
    @p1win="win('Plyayer1')"
    @p2win="win('Plyayer2')"
    :playAble="playAble"
  />

  <modal-box v-if="startModal">
    <template v-slot:m-header>
      <div class="flex w-full justify-center py-3 px-10">
        <span class="text-3xl font-mono leading-tight">The Artemis</span>
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
    <template v-slot:extra>
      <div class="text-white">
        <div class="flex flex-col fixed bottom-0 left-0">
          <span>P1 : Click or Press A</span>
          <span>P2 : Click or Press L</span>
        </div>
        <span class="fixed bottom-0 right-0">Copyright @2021 RDanang</span>
      </div>
    </template>
  </modal-box>

  <modal-box v-if="countDownModal">
    <template v-slot:m-body>
      <div class="font-mono text-7xl p-20">{{ timer }}</div>
    </template>
  </modal-box>

  <modal-box v-if="winnerModal">
    <template v-slot:m-header>
      <div class="font-mono text-3xl pb-3 py-5 px-8">{{ winner }} WIN!</div>
    </template>
    <template v-slot:m-body>
      <div class="flex justify-center font-mono text-2xl py-2">Try Again ?</div>
    </template>
    <template v-slot:m-footer>
      <div class="flex flex-col w-full px-4 py-2 space-y-1">
        <button
          class="flex w-full rounded-lg py-1 justify-center bg-green-500 hover:bg-green-400"
          @click="onRepeat"
        >
          Yes!
        </button>
        <button
          class="flex w-full rounded-lg py-1 justify-center bg-red-500 hover:bg-red-400"
          @click="onExit"
        >
          NO
        </button>
      </div>
    </template>
  </modal-box>
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
        { name: "green", val: "bg-green-300" },
        { name: "green2", val: "bg-green-400" },
        { name: "green3", val: "bg-green-500" },
        { name: "green4", val: "bg-green-600" },
        { name: "green5", val: "bg-green-700" },
        { name: "red", val: "bg-red-300" },
        { name: "red2", val: "bg-red-400" },
        { name: "red3", val: "bg-red-500" },
        { name: "red4", val: "bg-red-600" },
        { name: "red5", val: "bg-red-700" },
        { name: "yellow", val: "bg-yellow-300" },
        { name: "yellow2", val: "bg-yellow-400" },
        { name: "yellow3", val: "bg-yellow-500" },
        { name: "yellow4", val: "bg-yellow-600" },
        { name: "yellow5", val: "bg-yellow-700" },
        { name: "blue", val: "bg-blue-300" },
        { name: "blue2", val: "bg-blue-400" },
        { name: "blue3", val: "bg-blue-500" },
        { name: "blue4", val: "bg-blue-600" },
        { name: "blue5", val: "bg-blue-700" },
        { name: "indigo", val: "bg-indigo-300" },
        { name: "indigo2", val: "bg-indigo-400" },
        { name: "indigo3", val: "bg-indigo-500" },
        { name: "indigo4", val: "bg-indigo-600" },
        { name: "indigo5", val: "bg-indigo-700" },
        { name: "purple", val: "bg-purple-300" },
        { name: "purple2", val: "bg-purple-400" },
        { name: "purple3", val: "bg-purple-500" },
        { name: "purple4", val: "bg-purple-600" },
        { name: "purple5", val: "bg-purple-700" },
        { name: "pink", val: "bg-pink-300" },
        { name: "pink2", val: "bg-pink-400" },
        { name: "pink3", val: "bg-pink-500" },
        { name: "pink4", val: "bg-pink-600" },
        { name: "pink5", val: "bg-pink-700" },
        { name: "gray", val: "bg-gray-300" },
        { name: "gray2", val: "bg-gray-400" },
        { name: "gray3", val: "bg-gray-500" },
        { name: "gray4", val: "bg-gray-600" },
        { name: "gray5", val: "bg-gray-700" },
        { name: "pastel", val: "bg-pastel" },
        { name: "pastel2", val: "bg-pastel2" },
        { name: "pastel3", val: "bg-pastel3" },
        { name: "pastel4", val: "bg-pastel4" },
        { name: "pastel5", val: "bg-pastel5" },
        { name: "pastel6", val: "bg-pastel6" },
        { name: "pastel7", val: "bg-pastel7" },
        { name: "pastel8", val: "bg-pastel8" },
      ],
      startModal: true,
      countDownModal: false,
      winnerModal: false,
      timer: 0,
      winner: "",
      playAble: false,
    };
  },
  watch: {
    timer(newVal) {
      if (newVal > 0) {
        setTimeout(() => {
          this.timer--;
        }, 1000);
      } else {
        this.countDownModal = !this.countDownModal;
        this.playAble = true;
      }
    },
  },
  computed: {},
  methods: {
    onStart() {
      this.startModal = !this.startModal;
      this.timer = 3;
      this.countDownModal = !this.countDownModal;
    },
    win(val) {
      this.winnerModal = !this.winnerModal;
      this.playAble = false;
      this.winner = val;
    },
    onRepeat() {
      this.winnerModal = !this.winnerModal;
      this.timer = 3;
      this.countDownModal = !this.countDownModal;
    },
    onExit() {
      this.winnerModal = !this.winnerModal;
      this.startModal = !this.startModal;
    },
  },
};
</script>
