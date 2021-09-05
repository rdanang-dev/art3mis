<template>
  <div class="h-screen w-full">
    <div
      @click="addPlayerOne"
      class="border-b"
      :class="pOne"
      :style="{ height: player.height.playerOne + '%' }"
    ></div>
    <div
      @click="addPlayerTwo"
      class="border-t"
      :class="pTwo"
      :style="{ height: player.height.playerTwo + '%' }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    pOne: {
      type: String,
      default: "bg-red-500",
    },
    pTwo: {
      type: String,
      default: "bg-green-500",
    },
  },
  data() {
    return {
      // startModal: true,
      player: {
        height: {
          playerOne: 50,
          playerTwo: 50,
        },
      },
    };
  },
  methods: {
    addPlayerOne() {
      this.player.height.playerOne += 1;
      this.player.height.playerTwo -= 1;
    },
    addPlayerTwo() {
      this.player.height.playerTwo += 1;
      this.player.height.playerOne -= 1;
    },
  },
};
</script>

<style></style>
