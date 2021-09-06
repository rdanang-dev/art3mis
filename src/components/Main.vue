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
    },
    pTwo: {
      type: String,
    },
    playAble: {
      type: Boolean,
      default: false,
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
  watch: {
    playAble(newVal) {
      if (newVal === true) {
        window.addEventListener("keypress", this.onPlayable);
      } else {
        window.removeEventListener("keypress", this.onPlayable);
      }
    },
  },
  mounted() {},
  methods: {
    onPlayable(e) {
      if (e.key === "a") {
        this.addPlayerOne();
      }
      if (e.key === "l") {
        this.addPlayerTwo();
      }
    },
    addPlayerOne() {
      this.player.height.playerOne += 1;
      this.player.height.playerTwo -= 1;
      if (this.player.height.playerOne === 100) {
        this.$emit("p1win");
        setTimeout(() => {
          this.player.height.playerOne = 50;
          this.player.height.playerTwo = 50;
        }, 300);
      }
    },
    addPlayerTwo() {
      this.player.height.playerTwo += 1;
      this.player.height.playerOne -= 1;
      if (this.player.height.playerTwo === 100) {
        this.$emit("p2win");
        setTimeout(() => {
          this.player.height.playerOne = 50;
          this.player.height.playerTwo = 50;
        }, 300);
      }
    },
  },
};
</script>

<style></style>
