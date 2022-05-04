<template>
  <div id="repayments-schedule-container">
    <b-row class="table-title">
      <b-col md="3" class="table-title-field">
        <div class="table-title-text">DUE DATE</div>
        <img class="sort-icon" src="/images/sort-icon.png" alt="sort-icon" />
      </b-col>
      <b-col md="3" class="table-title-field">
        <div class="table-title-text">STATUS</div>
        <img class="sort-icon" src="/images/sort-icon.png" alt="sort-icon" />
      </b-col>
      <b-col md="6" class="table-title-field">
        <div class="table-title-text">DUE AMOUNT</div>
        <img class="sort-icon" src="/images/sort-icon.png" alt="sort-icon" />
      </b-col>
    </b-row>
    <b-row class="table-data" v-for="(each, index) in data" :key="index">
      <b-col md="3" class="due-date">{{ each.date }}</b-col>
      <b-col md="3">
        <span class="status">
          {{ each.status }}
        </span>
      </b-col>
      <b-col md="6" class="amount-container" style="position: relative">
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
          <div class="action-menu-item" style="margin-bottom: 0.5rem">View</div>
          <div class="action-menu-item">Move to next stage</div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "RepaymentsSchedule",
  data() {
    return {
      openMenuFlag: null,
      data: [
        {
          date: "Feb 2, 2022",
          status: "PAID ON FEB 2, 2022",
          amount: "$ 3,403.00",
        },
        {
          date: "Feb 2, 2022",
          status: "PAID ON FEB 2, 2022",
          amount: "$ 3,403.00",
        },
        {
          date: "Feb 2, 2022",
          status: "PAID ON FEB 2, 2022",
          amount: "$ 3,403.00",
        },
        {
          date: "Feb 2, 2022",
          status: "PAID ON FEB 2, 2022",
          amount: "$ 3,403.00",
        },
        {
          date: "Feb 2, 2022",
          status: "PAID ON FEB 2, 2022",
          amount: "$ 3,403.00",
        },
      ],
    };
  },
  methods: {
    openMenu(index) {
      if (this.openMenuFlag === index) this.openMenuFlag = null;
      else this.openMenuFlag = index;
    },
  },
};
</script>

<style scoped>
#repayments-schedule-container {
  padding: 1rem;
}
#repayments-schedule-container .table-title {
  background-color: #f5f3ef;
  border-radius: 5px;
  padding: 1rem;
  align-items: center;
  margin-bottom: 1rem;
}
#repayments-schedule-container .table-title-field {
  display: flex;
  align-items: center;
  border-right: 1px solid #e9e6e3;
}
#repayments-schedule-container .sort-icon {
  height: 10px;
  margin-left: 0.5rem;
  cursor: pointer;
}
#repayments-schedule-container .table-title-text {
  font-size: 11px;
  font-family: Roboto_Bold;
  color: #5e595c;
}
#repayments-schedule-container .table-data {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 0.5rem;
  box-shadow: 0px 1px 4px #17172429;
  align-items: center;
  margin-bottom: 1rem;
}
#repayments-schedule-container .due-date {
  font-size: 14px;
  font-family: Roboto_Medium;
  color: #5e595c;
}
#repayments-schedule-container .status {
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  background-color: #f6fdf4;
  color: #37a928;
  border: 1px solid #37a928;
  font-size: 11px;
  font-family: Roboto_Bold;
}
#repayments-schedule-container .com-avatar {
  margin-right: 0.5rem;
}
#repayments-schedule-container .com-info {
  display: flex;
  align-items: center;
}
#repayments-schedule-container .com-name {
  font-size: 14px;
}
#repayments-schedule-container .amount-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#repayments-schedule-container .due-amount {
  font-size: 14px;
  font-family: Roboto_Bold;
  color: #5e595c;
}
#repayments-schedule-container .action-container {
  height: 30px;
  width: 30px;
  border-radius: 8px;
  background-color: #dfddd9;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
#repayments-schedule-container .action-menu {
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px #17172429;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 12px;
  right: 12px;
  bottom: -70px;
  z-index: 99999;
}
#repayments-schedule-container .action-menu-item {
  cursor: pointer;
  color: #260b19;
  font-size: 13px;
}
</style>
