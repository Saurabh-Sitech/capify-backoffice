<template>
  <div id="repayments-container">
    <div class="title">Repayments</div>

    <b-row>
      <b-col>
        <div
          class="block"
          style="
            background-color: #dfddd9;
            border-color: #dfddd9;
            color: #511332;
          "
        >
          <div class="state">OUTSTANDING</div>
          <div class="amount">$ 5,000,000</div>
          <div class="count">456 repayments</div>
        </div>
      </b-col>
      <b-col>
        <div
          class="block"
          style="
            background-color: #f6edec;
            border-color: #edb3b9;
            color: #d91f3c;
          "
        >
          <div class="state">OVERDUE</div>
          <div class="amount">$ 1,500,000</div>
          <div class="count">122 repayments</div>
        </div>
      </b-col>
      <b-col>
        <div
          class="block"
          style="
            background-color: #eeede9;
            border-color: #c7c5c3;
            color: #5e595c;
          "
        >
          <div class="state">DUE THIS MONTH</div>
          <div class="amount">$ 3,500,000</div>
          <div class="count">34 repayments</div>
        </div>
      </b-col>
    </b-row>

    <div class="content-table">
      <b-container class="filter-container">
        <b-row>
          <b-col class="flex-container">
            <div
              v-for="(tab, index) in tabs"
              :key="index"
              @click="selectTab(index)"
              :class="['tab', selectedTab === index ? 'active-tab' : '']"
            >
              {{ tab }}
            </div>
          </b-col>
          <b-col class="flex-container">
            <base-input
              placeholder="All Companies"
              type="text"
              field="company"
              :value="company"
              @change-value="setValue"
              :removeDefaultMargin="true"
              :customStyle="getInputBoxStyle"
            ></base-input>

            <base-input
              placeholder="This month"
              type="text"
              field="month"
              :value="month"
              @change-value="setValue"
              :removeDefaultMargin="true"
              :customStyle="getInputBoxStyle"
            ></base-input>

            <div class="clear-link">Clear</div>
          </b-col>
        </b-row>
      </b-container>
      <div class="table-container">
        <b-row class="table-title">
          <b-col md="2" class="table-title-field">
            <div class="table-title-text">DUE DATE</div>
            <img
              class="sort-icon"
              src="/images/sort-icon.png"
              alt="sort-icon"
            />
          </b-col>
          <b-col md="3" class="table-title-field">
            <div class="table-title-text">STATUS</div>
            <img
              class="sort-icon"
              src="/images/sort-icon.png"
              alt="sort-icon"
            />
          </b-col>
          <b-col md="3" class="table-title-field">
            <div class="table-title-text">COMPANY</div>
            <img
              class="sort-icon"
              src="/images/sort-icon.png"
              alt="sort-icon"
            />
          </b-col>
          <b-col md="4" class="table-title-field">
            <div class="table-title-text">DUE AMOUNT</div>
            <img
              class="sort-icon"
              src="/images/sort-icon.png"
              alt="sort-icon"
            />
          </b-col>
        </b-row>
        <b-row class="table-data" v-for="(each, index) in data" :key="index">
          <b-col md="2" class="due-date">{{ each.date }}</b-col>
          <b-col md="3">
            <span class="status">
              {{ each.status }}
            </span>
          </b-col>
          <b-col md="3" class="com-info">
            <img
              class="com-avatar"
              src="/images/marz-logo.png"
              alt="marz-logo"
            />
            <div class="com-name">{{ each.name }}</div>
          </b-col>
          <b-col md="4" class="amount-container" style="position: relative">
            <div class="due-amount">{{ each.amount }}</div>
            <div class="action-container" @click="openMenu(index)">
              <img
                :src="
                  openMenuFlag === index
                    ? '/images/eye-icon.png'
                    : '/images/dot-icon.png'
                "
                :alt="openMenuFlag === index ? 'eye-icon' : 'dot-icon'"
              />
            </div>
            <div class="action-menu" v-if="openMenuFlag === index">
              <div class="action-menu-item" style="margin-bottom: 0.5rem">
                View
              </div>
              <div class="action-menu-item">Move to next stage</div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Repayments-Page",
  data() {
    return {
      openMenuFlag: null,
      company: "",
      month: "",
      selectedTab: 0,
      tabs: ["All Repayments", "Upcoming", "Paid", "Overdue"],
      data: [
        {
          date: "Feb 2, 2022",
          status: "PAID ON FEB 2, 2022",
          name: "Marz Inc.",
          amount: "$ 3,403.00",
        },
        {
          date: "Feb 2, 2022",
          status: "PAID ON FEB 2, 2022",
          name: "Marz Inc.",
          amount: "$ 3,403.00",
        },
        {
          date: "Feb 2, 2022",
          status: "PAID ON FEB 2, 2022",
          name: "Marz Inc.",
          amount: "$ 3,403.00",
        },
        {
          date: "Feb 2, 2022",
          status: "PAID ON FEB 2, 2022",
          name: "Marz Inc.",
          amount: "$ 3,403.00",
        },
        {
          date: "Feb 2, 2022",
          status: "PAID ON FEB 2, 2022",
          name: "Marz Inc.",
          amount: "$ 3,403.00",
        },
      ],
    };
  },
  methods: {
    setValue(val, field) {
      this[field] = val;
    },
    selectTab(index) {
      this.selectedTab = index;
    },
    openMenu(index) {
      if (this.openMenuFlag === index) this.openMenuFlag = null;
      else this.openMenuFlag = index;
    },
  },

  computed: {
    getInputBoxStyle() {
      return `margin-right: 1rem;
      border: 1px solid #DFDDD9;
      border-radius: 10px;
      background-color: transparent;
      `;
    },
  },
};
</script>

<style scoped>
#repayments-container {
  padding: 60px;
}
#repayments-container .title {
  font-size: 18px;
  font-family: Roboto_Medium;
  color: #8f8b8d;
  margin-bottom: 1rem;
}
#repayments-container .block {
  border-radius: 5px;
  padding: 1rem;
  border: 1px solid;
}
#repayments-container .state {
  font-size: 14px;
  font-family: Roboto_Medium;
}
#repayments-container .amount {
  font-size: 16px;
  font-family: Roboto_Bold;
}
#repayments-container .count {
  font-size: 13px;
}
#repayments-container .content-table {
  margin-top: 1.5rem;
  box-shadow: 1px 2px 29px #1717241a;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 1rem;
}
#repayments-container .flex-container {
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
}
#repayments-container .tab {
  color: #8f8b8d;
  font-size: 15px;
  font-family: Roboto_Medium;
  margin-right: 2rem;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}
#repayments-container .tab:hover {
  border-bottom: 2px solid #8f8b8d;
}
#repayments-container .active-tab {
  color: #741b47;
  border-bottom: 2px solid #741b47;
}
#repayments-container .clear-link {
  cursor: pointer;
  color: #dfddd9;
  font-size: 15px;
  text-decoration: underline;
}
#repayments-container .table-container {
  padding: 0.5rem;
}
#repayments-container .table-title {
  background-color: #f5f3ef;
  border-radius: 5px;
  padding: 1rem;
  align-items: center;
  margin-bottom: 1rem;
}
#repayments-container .table-title-field {
  display: flex;
  align-items: center;
  border-right: 1px solid #e9e6e3;
}
#repayments-container .sort-icon {
  height: 10px;
  margin-left: 0.5rem;
  cursor: pointer;
}
#repayments-container .table-title-text {
  font-size: 11px;
  font-family: Roboto_Bold;
  color: #5e595c;
}
#repayments-container .table-data {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 0.5rem;
  box-shadow: 0px 1px 4px #17172429;
  align-items: center;
  margin-bottom: 1rem;
}
#repayments-container .due-date {
  font-size: 14px;
  font-family: Roboto_Medium;
  color: #5e595c;
}
#repayments-container .status {
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  background-color: #f6fdf4;
  color: #37a928;
  border: 1px solid #37a928;
  font-size: 11px;
  font-family: Roboto_Bold;
}
#repayments-container .com-avatar {
  margin-right: 0.5rem;
}
#repayments-container .com-info {
  display: flex;
  align-items: center;
}
#repayments-container .com-name {
  font-size: 14px;
}
#repayments-container .amount-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#repayments-container .due-amount {
  font-size: 14px;
  font-family: Roboto_Bold;
  color: #5e595c;
}
#repayments-container .action-container {
  height: 30px;
  width: 30px;
  border-radius: 8px;
  background-color: #dfddd9;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
#repayments-container .action-menu {
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px #17172429;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 12px;
  right: 0;
  bottom: -65px;
  z-index: 99999;
}
#repayments-container .action-menu-item {
  cursor: pointer;
  color: #260b19;
  font-size: 13px;
}
</style>
