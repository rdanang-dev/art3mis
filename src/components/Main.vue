<template>
  <div class="h-screen w-full">
    <div
      class="bg-red-500"
      @click="addPlayerOne"
      :style="{ height: playerOne + '%' }"
    ></div>
    <div
      class="bg-green-500"
      @click="addPlayerTwo"
      :style="{ height: playerTwo + '%' }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // startModal: true,
      playerOne: 50,
      playerTwo: 50,
    };
  },
  methods: {
    addPlayerOne() {
      this.playerOne += 1;
      this.playerTwo -= 1;
    },
    addPlayerTwo() {
      this.playerTwo += 1;
      this.playerOne -= 1;
    },
  },
};
</script>

<style></style>
