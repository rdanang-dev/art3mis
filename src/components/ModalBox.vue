<template>
  <div
    class="fixed inset-0 overflow-x-hidden overflow-y-auto outline-none focus:outline-none justify-center items-center flex bg-black bg-opacity-25"
    @click.self="closeModal"
  >
    <div class="relative w-auto my-6 mx-auto md:max-w-3xl">
      <!--content-->
      <div
        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none z-50"
      >
        <!--header-->
        <div class="flex items-center p-5 rounded-t">
          <slot name="m-header">Header</slot>
        </div>
        <!--body-->
        <div class="relative p-6 flex-auto">
          <slot name="m-body">
            I always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves! They're
            slowed down by their perception of themselves. If you're taught you
            can’t do anything, you won’t do anything. I was taught I could do
            everything.</slot
          >
        </div>
        <!--footer-->
        <div class="flex items-center p-6 rounded-b">
          <slot name="m-footer">
            footer
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
