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
      if (this.player.height.playerOne === 100) {
        this.$emit("p1win");
        this.player.height.playerOne = 50;
        this.player.height.playerTwo = 50;
      }
    },
    addPlayerTwo() {
      this.player.height.playerTwo += 1;
      this.player.height.playerOne -= 1;
      if (this.player.height.playerTwo === 100) {
        this.$emit("p2win");
        this.player.height.playerOne = 50;
        this.player.height.playerTwo = 50;
      }
    },
  },
};
</script>

<style></style>
