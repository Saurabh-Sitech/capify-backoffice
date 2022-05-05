<template>
  <div id="main-sidebar">
    <div class="logo-container">
      <img
        class="tab-avtar"
        src="/images/sidebar-logo.png"
        alt="sidebar-logo"
      />
    </div>
    <div class="tab-container" v-for="(tab, index) in tabs" :key="index">
      <div
        :class="
          activetab === index
            ? 'tab active'
            : tab.comming_soon
            ? 'tab comming-soon'
            : 'tab'
        "
        :style="
          tab.comming_soon || tab.notification_count
            ? 'justify-content: space-between'
            : ''
        "
        @click="selectTab(tab, index)"
      >
        <div style="display: flex; align-items: center">
          <img
            class="tab-avtar"
            :src="
              activetab === index
                ? `/images/${tab.active_icon}`
                : `/images/${tab.inactive_icon}`
            "
            :alt="tab.name"
          />
          <div class="tab-name">{{ tab.name }}</div>
        </div>
        <div class="comming-soon-text" v-if="tab.comming_soon">COMING SOON</div>
        <div class="notification-count" v-else-if="tab.notification_count">
          {{ tab.notification_count }}
        </div>
      </div>
    </div>
    <div class="bottom-container">
      <div class="user-info">
        <div class="avtar-container">D</div>
        <div class="user-email">dunya@growthcapify.com</div>
      </div>
      <div class="link-container">
        <div class="link" @click="logout">Log out</div>
        <div class="link" style="margin-left: 1rem">Settings</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activetab: 0,
      tabs: [
        {
          name: "Dashboard",
          active_icon: "dashboard-icon-active.png",
          inactive_icon: "dashboard-icon-inactive.png",
          link: "/dashboard",
        },
        {
          name: "Companies",
          active_icon: "companies-icon-active.png",
          inactive_icon: "companies-icon-inactive.png",
          link: "/companies",
        },
        {
          name: "Reports",
          active_icon: "report-icon.png",
          inactive_icon: "report-icon.png",
          link: "/reports",
          comming_soon: true,
        },
        {
          name: "Repayments",
          active_icon: "payments-icon-active.png",
          inactive_icon: "payments-icon-inactive.png",
          link: "/repayments",
        },
        {
          name: "Notifications",
          active_icon: "notification-icon-active.png",
          inactive_icon: "notification-icon-inactive.png",
          notification_count: 2,
          link: "/notifications",
        },
      ],
    };
  },
  methods: {
    selectTab(tab, index) {
      if (!tab.comming_soon) {
        this.activetab = index;
        this.$router.push(tab.link);
      }
    },
    logout() {
      sessionStorage.clear();
      this.$router.push("/");
    },
  },
  mounted() {
    this.activetab = this.tabs.findIndex(
      (each) => each.name === this.$route.name
    );
  },
};
</script>

<style scoped>
#main-sidebar {
  height: 100vh;
  background-color: #ffffff;
  position: relative;
}
#main-sidebar .tab-container {
  width: 100%;
}
#main-sidebar .tab.active {
  background-color: #fff2cc;
}
#main-sidebar .tab.comming-soon {
  cursor: not-allowed;
}
#main-sidebar .tab {
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
}
#main-sidebar .active .tab-name {
  color: #511332;
}
#main-sidebar .comming-soon .tab-name {
  color: #dfddd9;
}
#main-sidebar .tab-name {
  margin-left: 1rem;
  font-size: 16px;
  font-family: Roboto_Medium;
  color: #5e595c;
}
#main-sidebar .notification-count {
  font-size: 14px;
  font-family: Roboto_Medium;
  color: #ffffff;
  background-color: #d91f3c;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#main-sidebar .comming-soon-text {
  font-size: 11px;
  font-family: Roboto_Medium;
  color: #bab8b9;
}
#main-sidebar .logo-container {
  background-color: #260b19;
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#main-sidebar .bottom-container {
  width: 100%;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #f0efed;
}
#main-sidebar .user-info {
  padding: 1rem 1rem 0.5rem 1rem;
  display: flex;
  align-items: center;
}
#main-sidebar .avtar-container {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #ebdfe5;
  font-size: 14px;
  font-family: Roboto_Medium;
  color: #260b19;
  display: flex;
  align-items: center;
  justify-content: center;
}
#main-sidebar .user-email {
  margin-left: 1rem;
  font-size: 14px;
  font-family: Roboto_Medium;
  color: #260b19;
}
#main-sidebar .link-container {
  padding: 0.5rem 1rem 1rem 1rem;
  display: flex;
  align-items: center;
}
#main-sidebar .link {
  cursor: pointer;
  font-size: 15px;
  color: #741b47;
}
#main-sidebar .link:hover {
  text-decoration: underline;
}
</style>
