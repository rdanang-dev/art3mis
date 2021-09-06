<template>
  <div
    class="fixed inset-0 overflow-x-hidden overflow-y-auto outline-none focus:outline-none justify-center items-center flex bg-black bg-opacity-25"
  >
    <div class="relative w-auto my-6 mx-auto max-w-2xl">
      <!--content-->
      <div
        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none z-50"
      >
        <!--header-->
        <div class="flex items-center rounded-t">
          <slot name="m-header"></slot>
        </div>
        <!--body-->
        <div class="relative flex-auto">
          <slot name="m-body">
            I always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves! They're
            slowed down by their perception of themselves. If you're taught you
            can’t do anything, you won’t do anything. I was taught I could do
            everything.</slot
          >
        </div>
        <!--footer-->
        <div class="flex items-center rounded-b">
          <slot name="m-footer"></slot>
        </div>
      </div>
    </div>
  </div>
  <slot name="extra"></slot>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
