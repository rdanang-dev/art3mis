<template>
  <Main />
  <modal-box v-if="startModal">
    <template v-slot:m-header>
      <div class="flex w-full justify-center">
        <span class="">The Artemis</span>
      </div>
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
      startModal: true,
    };
  },
};
</script>
<style></style>
