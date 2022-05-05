<template>
  <div id="notifications-container">
    <div class="title">Notifications</div>
    <div class="top-container">
      <div class="filter-container">
        <base-input
          placeholder="Search"
          type="text"
          field="searchText"
          :value="searchText"
          @change-value="setValue"
          :removeDefaultMargin="true"
          :customStyle="getSearchBoxStyle"
        ></base-input>

        <base-button
          stylevariant="primary"
          :customStyle="getFilterButtonStyle"
          @onClick="filterData"
        >
          Filters
        </base-button>
      </div>
      <div class="pagination-container" v-if="total_count">
        <base-pagination
          :active_page="active_page"
          :total_page="total_page"
          :total_count="total_count"
          :page_size="page_size"
          @set-page="setPage"
        />
      </div>
    </div>
    <div
      class="list-container"
      v-for="(notification, index) in notifications"
      :key="index"
    >
      <div
        class="block"
        :style="
          notification.is_read
            ? 'border-color:#DFDDD9;'
            : 'border-color:#d91f3c;'
        "
      >
        <div class="date-label">{{ notification.date }}</div>
        <div class="title-label">{{ notification.title }}</div>
        <div class="description-label">{{ notification.description }}</div>
      </div>
    </div>
    <div class="bottom-container">
      <div class="pagination-container" v-if="total_count">
        <base-pagination
          :active_page="active_page"
          :total_page="total_page"
          :total_count="total_count"
          :page_size="page_size"
          @set-page="setPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notifications-Page",
  data() {
    return {
      searchText: "",
      page_size: 5,
      active_page: 1,
      total_page: 0,
      total_count: 58,
      notifications: [
        {
          date: "Feb 5, 2022",
          title: "Notification Title Goes Here",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie
            at elementum eu facilisis sed odio morbi quis.`,
          is_read: false,
        },
        {
          date: "Feb 5, 2022",
          title: "Notification Title Goes Here",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie
            at elementum eu facilisis sed odio morbi quis.`,
          is_read: false,
        },
        {
          date: "Feb 5, 2022",
          title: "Notification Title Goes Here",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie
            at elementum eu facilisis sed odio morbi quis.`,
          is_read: true,
        },
        {
          date: "Feb 5, 2022",
          title: "Notification Title Goes Here",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie
            at elementum eu facilisis sed odio morbi quis.`,
          is_read: true,
        },
        {
          date: "Feb 5, 2022",
          title: "Notification Title Goes Here",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie
            at elementum eu facilisis sed odio morbi quis.`,
          is_read: true,
        },
      ],
    };
  },
  methods: {
    setValue(val, field) {
      this[field] = val;
    },
    setPage(page) {
      this.active_page = page;
    },
    filterData() {},
  },
  computed: {
    getSearchBoxStyle() {
      return `margin-right: 1rem;
      border: 1px solid #dfddd9;
      border-radius: 10px;
      background-color: transparent;
      `;
    },
    getFilterButtonStyle() {
      return `font-size: 15px;
      border-radius: 10px;
      border: 1px solid #dfddd9;
      background-color: transparent;
      color:#8F8B8D;`;
    },
  },
  mounted() {
    this.total_page = Math.ceil(this.total_count / this.page_size);
  },
};
</script>

<style scoped>
#notifications-container {
  padding: 60px;
}
#notifications-container .title {
  font-size: 18px;
  font-family: Roboto_Medium;
  color: #8f8b8d;
  margin-bottom: 25px;
}
#notifications-container .top-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
#notifications-container .filter-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#notifications-container .block {
  background-color: #ffffff;
  border-radius: 5px;
  border-left: 8px solid;
  padding: 1rem;
  margin-bottom: 0.5rem;
}
#notifications-container .date-label {
  font-size: 15px;
  color: #8f8b8d;
}
#notifications-container .title-label {
  font-size: 18px;
  font-family: Roboto_Medium;
  color: #5e595c;
  margin: 0.25rem 0rem;
}
#notifications-container .description-label {
  font-size: 15px;
  color: #8f8b8d;
}
#notifications-container .bottom-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
}
</style>
