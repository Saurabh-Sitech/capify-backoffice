<template>
  <div id="company-detail-container">
    <div class="d-inline-block">
      <div class="back-link" @click="goBack">
        <img
          src="/images/back-icon.png"
          alt="back-icon"
          style="margin-right: 0.5rem"
        />
        <div>All Companies</div>
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center mt-4 mb-4">
      <div class="d-flex align-items-center">
        <img
          class="com-avatar"
          src="/images/marz-logo-big.png"
          alt="marz-logo-big"
          height="100px"
          width="100px"
        />
        <div>
          <div class="com-name">Marz Inc.</div>
          <div class="com-place">Jordan</div>
          <div class="com-email">ali@marzinc.com</div>
        </div>
      </div>
      <div>
        <div class="d-inline-block com-state">FUNDED ON FEB 2, 2022</div>
        <div class="app-status">Application submitted on April 17, 2021</div>
        <div class="d-inline-block payment-status">
          1 OVERDUE REPAYMENT. DUE ON APR 17, 2022
        </div>
      </div>
    </div>
    <b-row>
      <b-col lg="3" sc="6">
        <div class="block" style="background-color: #e8dff5; color: #411884">
          <div class="top-label">SCREENING SCORE</div>
          <div class="middle-label">Excellent</div>
          <div class="bottom-label">12% discount rate</div>
        </div>
      </b-col>
      <b-col lg="3" sc="6">
        <div class="block" style="background-color: #dfddd9; color: #741b47">
          <div class="top-label">FACILITY</div>
          <div class="middle-label">$100,000</div>
          <div class="bottom-label">Sale Price: $ 120,000</div>
        </div>
      </b-col>
      <b-col lg="3" sc="6">
        <div class="block" style="background-color: #dfddd9; color: #741b47">
          <div class="top-label">PAID</div>
          <div class="middle-label">$ 77,334 (43%)</div>
          <div class="bottom-label">
            <b-progress height="8px" style="margin: 5px 0px">
              <b-progress-bar
                style="background-color: #741b47"
                :value="45"
              ></b-progress-bar>
            </b-progress>
          </div>
        </div>
      </b-col>
      <b-col lg="3" sc="6">
        <div class="block" style="background-color: #dfddd9; color: #741b47">
          <div class="top-label">OUTSTANDING</div>
          <div class="middle-label">$ 42,666</div>
          <div class="bottom-label">2 remaining repayments</div>
        </div>
      </b-col>
    </b-row>
    <div v-if="!isEdit" class="content-table">
      <b-container class="filter-container">
        <b-row>
          <b-col md="11" class="flex-container">
            <div
              v-for="(tab, index) in tabs"
              :key="index"
              @click="selectTab(index)"
              :class="['tab', selectedTab === index ? 'active-tab' : '']"
            >
              {{ tab }}
            </div>
          </b-col>
          <b-col
            v-if="selectedTab === 2"
            md="1"
            class="d-flex align-items-center justify-content-end"
          >
            <div class="action-container" @click="edit">
              <img
                :src="'/images/edit.png'"
                :alt="'edit'"
                height="15px"
                width="15px"
              />
            </div>
          </b-col>
        </b-row>
      </b-container>
      <RepaymentsSchedule v-if="selectedTab === 0" />
      <Insights v-if="selectedTab === 1" />
      <DetailData v-if="selectedTab === 2" />
    </div>
    <div v-if="isEdit" class="edit-data-container">
      <EditDetailData @close-edit-mode="edit" />
    </div>
  </div>
</template>

<script>
import RepaymentsSchedule from "./RepaymentsSchedule.vue";
import Insights from "./Insights.vue";
import DetailData from "./DetailData.vue";
import EditDetailData from "./EditDetailData.vue";

export default {
  components: { RepaymentsSchedule, Insights, DetailData, EditDetailData },
  data() {
    return {
      selectedTab: 0,
      isEdit: false,
      tabs: ["Repayments Schedule", "Insights", "Company Details", "Documents"],
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    selectTab(index) {
      this.selectedTab = index;
    },
    edit() {
      this.isEdit = !this.isEdit;
      const element = document.getElementById("content-container");
      if (element) {
        element.scrollTop = 0;
      }
    },
  },
};
</script>

<style scoped>
#company-detail-container {
  padding: 25px 45px;
}
#company-detail-container .back-link {
  font-size: 13px;
  color: #8f8b8d;
  display: flex;
  align-items: center;
  cursor: pointer;
}
#company-detail-container .com-name {
  font-size: 18px;
  font-family: Roboto_Bold;
  color: #260b19;
}
#company-detail-container .com-place {
  font-size: 15px;
  color: #8f8b8d;
  margin: 0.2rem 0rem;
}
#company-detail-container .com-email {
  font-size: 15px;
  text-decoration: underline;
  color: #741b47;
}
#company-detail-container .com-state {
  font-size: 11px;
  font-family: Roboto_Bold;
  color: #741b47;
  background-color: #f8f7f4;
  border: 1px solid #dcc9cf;
  border-radius: 5px;
  padding: 0rem 0.2rem;
}
#company-detail-container .app-status {
  font-size: 12px;
  font-family: Roboto_Italic;
  color: #5e595c;
  margin: 0.2rem 0rem;
}
#company-detail-container .payment-status {
  font-size: 11px;
  font-family: Roboto_Bold;
  color: #d91f3c;
  background-color: #f6edec;
  border: 1px solid #f0c6ca;
  border-radius: 5px;
  padding: 0rem 0.2rem;
}
#company-detail-container .block {
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
}
#company-detail-container .top-label {
  font-size: 14px;
  font-family: Roboto_Medium;
}
#company-detail-container .middle-label {
  font-size: 16px;
  font-family: Roboto_Bold;
}
#company-detail-container .bottom-label {
  font-size: 13px;
}
#company-detail-container .content-table {
  margin-top: 1.5rem;
  box-shadow: 1px 2px 29px #1717241a;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 1rem;
}
#company-detail-container .flex-container {
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
}
#company-detail-container .tab {
  color: #8f8b8d;
  font-size: 15px;
  font-family: Roboto_Medium;
  margin-right: 2rem;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}
#company-detail-container .tab:hover {
  border-bottom: 2px solid #8f8b8d;
}
#company-detail-container .active-tab {
  color: #741b47;
  border-bottom: 2px solid #741b47;
}
#company-detail-container .action-container {
  height: 30px;
  width: 30px;
  margin-left: 0.5rem;
  border-radius: 8px;
  background-color: #dfddd9;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
#company-detail-container .edit-data-container {
  margin-top: 1.5rem;
  box-shadow: 1px 2px 29px #1717241a;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 1rem;
}
</style>
