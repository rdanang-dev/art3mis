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
      <div class="font-mono text-4xl pb-3 py-5 px-8">{{ winner }} WIN !</div>
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
        { name: "Green", val: "bg-green-500" },
        { name: "Red", val: "bg-red-500" },
        { name: "yellow", val: "bg-yellow-500" },
        { name: "blue", val: "bg-blue-500" },
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
