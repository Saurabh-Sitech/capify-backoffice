<template>
  <div id="pagination-container">
    <div class="page-counts">
      <span class="page-size"
        >{{ start_count }}-{{ end_count }}
        <span class="page-total">of {{ total_count }}</span></span
      >
    </div>
    <div
      class="page-change-button"
      style="margin: 0rem 0.5rem"
      :class="{ disabled: active_page === 1 }"
      @click="prevPage"
    >
      <img src="/images/back-icon.png" alt="back-icon" />
    </div>
    <div
      class="page-change-button"
      :class="{ disabled: active_page === total_page }"
      @click="nextPage"
    >
      <img src="/images/next-icon.png" alt="next-icon" />
    </div>
  </div>
</template>

<script>
export default {
  emits: ["set-page"],
  props: ["active_page", "total_page", "total_count", "page_size"],
  data() {
    return {
      start_count: 0,
      end_count: 0,
    };
  },
  methods: {
    prevPage() {
      if (this.active_page > 1) {
        this.$emit("set-page", this.active_page - 1);
      }
    },
    changePage(page) {
      this.$emit("set-page", page);
    },
    nextPage() {
      if (this.active_page < this.total_page) {
        this.$emit("set-page", this.active_page + 1);
      }
    },
  },
  watch: {
    active_page: function (val) {
      this.start_count = (val - 1) * this.page_size + 1;
      this.end_count = Math.min(val * this.page_size, this.total_count);
    },
  },
  mounted() {
    this.start_count = (this.active_page - 1) * this.page_size + 1;
    this.end_count = Math.min(
      this.active_page * this.page_size,
      this.total_count
    );
  },
};
</script>

<style scoped>
#pagination-container {
  display: flex;
  align-items: center;
}
#pagination-container .page-counts {
  font-size: 13px;
}
#pagination-container .page-size {
  font-family: "Roboto_Bold";
  color: #5e595c;
}
#pagination-container .page-total {
  font-family: "Roboto_Regular";
  color: #8f8b8d;
}
#pagination-container .page-change-button {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px #17172429;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
#pagination-container .page-change-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
#pagination-container .page-change-button img {
  height: 18px;
  width: 18px;
}
</style>
