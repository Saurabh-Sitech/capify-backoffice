<template>
  <div id="dashboard-container">
    <b-row>
      <b-col>
        <div class="block" style="background-color: transparent; padding: 0rem">
          <div class="title">Hello Dunya</div>
          <div class="user-role">Admin</div>
        </div>
      </b-col>
      <b-col>
        <div class="block">
          <div class="label">FACILITY RAISED</div>
          <div class="value">$ 6,000,000</div>
          <div class="sub-title"></div>
        </div>
      </b-col>
      <b-col>
        <div class="block">
          <div class="label">FACILITY EXTENDED</div>
          <div class="value">$ 4,500,000</div>
          <div class="sub-title">Sale Price: $ 7,000,000</div>
        </div>
      </b-col>
      <b-col>
        <div class="block">
          <div class="label">UNUTALIZED</div>
          <div class="value">$ 1,500,000</div>
          <div class="sub-title"></div>
        </div>
      </b-col>
      <b-col>
        <div class="block">
          <div class="label">OUTSTANDING</div>
          <div class="value">$ 5,000,000</div>
          <div class="sub-title"></div>
        </div>
      </b-col>
    </b-row>

    <b-row style="margin-top: 1rem">
      <b-col lg="6" sm="12">
        <div class="content-block">
          <div
            class="flex-container total-title"
            style="padding-bottom: 1rem; border-color: #dfddd9"
          >
            <div class="flex-container">
              <div class="circle" style="background-color: #bab8b9"></div>
              <div>Total Registered Companies</div>
            </div>
            <div>120</div>
          </div>
          <div class="flex-container single-title">
            <div class="flex-container">
              <div class="circle" style="background-color: #41ce98"></div>
              <div>In Screening</div>
            </div>
            <div>70</div>
          </div>
          <div class="flex-container single-title">
            <div class="flex-container">
              <div class="circle" style="background-color: #411884"></div>
              <div>Qualified</div>
            </div>
            <div>40</div>
          </div>
          <div class="flex-container single-title">
            <div class="flex-container">
              <div class="circle" style="background-color: #cc4e00"></div>
              <div>Not Qualified</div>
            </div>
            <div>30</div>
          </div>
          <div class="flex-container single-title">
            <div class="flex-container">
              <div class="circle" style="background-color: #1c9d0b"></div>
              <div>In Execution</div>
            </div>
            <div>33</div>
          </div>
          <div class="flex-container single-title">
            <div class="flex-container">
              <div class="circle" style="background-color: #741b47"></div>
              <div>Funded</div>
            </div>
            <div>22</div>
          </div>
          <div class="map-container">
            <div id="chart" style="height: 100%; width: 100%"></div>
          </div>
        </div>
      </b-col>
      <b-col lg="6" sm="12">
        <div class="content-block">
          <div
            class="total-title"
            style="padding-bottom: 1rem; border-color: transparent"
          >
            Recently Registered
          </div>
          <div
            class="company-block"
            v-for="(company, index) in companies"
            :key="index"
            @mouseenter="comMouseEnter(index)"
            @mouseleave="comMouseLeave"
            :style="
              hoverIndex === index
                ? 'box-shadow: 1px 2px 8px #17172429'
                : 'box-shadow: 0px 1px 4px #17172429'
            "
          >
            <div class="flex-container">
              <div class="flex-container">
                <img
                  class="company-avatar"
                  src="/images/marz-logo.png"
                  alt="marz-logo"
                />

                <div>
                  <div class="company-name">Marz Inc.</div>
                  <div class="company-date">on Feb 5, 2022</div>
                </div>
              </div>
              <div class="flex-container" style="position: relative">
                <div class="company-state flex-container">
                  <img
                    src="/images/screening-icon.png"
                    alt="screening-icon"
                    style="margin-right: 0.2rem"
                  />
                  <div>SCREENING</div>
                </div>
                <div
                  class="action-container flex-container"
                  style="justify-content: center"
                  v-if="hoverIndex === index"
                  @click="openMenu"
                >
                  <img
                    :src="
                      openMenuFlag
                        ? '/images/eye-icon.png'
                        : '/images/dot-icon.png'
                    "
                    :alt="openMenuFlag ? 'eye-icon' : 'dot-icon'"
                  />
                </div>
                <div
                  class="action-menu"
                  v-if="hoverIndex === index && openMenuFlag"
                >
                  <div class="action-menu-item" style="margin-bottom: 0.5rem">
                    View
                  </div>
                  <div class="action-menu-item">Move to next stage</div>
                </div>
              </div>
            </div>
          </div>
          <div class="all-companies-link">See all companies</div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
let CanvasJS = require("../lib/canvasjs.min");
CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS;

export default {
  name: "Dashboard-Page",
  data() {
    return {
      chart: null,
      hoverIndex: null,
      openMenuFlag: false,
      companies: [1, 2, 3, 4, 5, 6, 7],
    };
  },
  methods: {
    comMouseEnter(index) {
      this.hoverIndex = index;
    },
    comMouseLeave() {
      this.hoverIndex = null;
      this.openMenuFlag = false;
    },
    openMenu() {
      this.openMenuFlag = !this.openMenuFlag;
    },
  },
  mounted() {
    this.chart = new CanvasJS.Chart("chart", {
      animationEnabled: true,
      data: [
        {
          type: "funnel",
          indexLabel: "{label}",
          indexLabelPlacement: "inside",
          indexLabelFontStyle: "bold",
          indexLabelFontColor: "#260B19",
          indexLabelFontSize: 13,
          indexLabelFontFamily: "Roboto_Bold",
          neckWidth: 50,
          neckHeight: 0,
          valueRepresents: "area",
          dataPoints: [
            { y: 5, label: "120", color: "#DDDCDD" },
            { y: 4, label: "70", color: "#C6F0E0" },
            { y: 3, label: "40", color: "#C6B9DA" },
            { y: 2, label: "33", color: "#BAE1B5" },
            { y: 1, label: "22", color: "#D5BAC7" },
          ],
        },
      ],
    });
    this.chart.render();
  },
};
</script>

<style scoped>
#dashboard-container {
  padding: 65px 45px;
}
#dashboard-container .flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#dashboard-container .title {
  font-size: 18px;
  font-family: Roboto_Medium;
  color: #8f8b8d;
  margin-bottom: 5px;
}
#dashboard-container .user-role {
  font-size: 14px;
  font-family: Roboto_Medium;
  color: #bab8b9;
  margin-bottom: 25px;
}
#dashboard-container .block {
  border-radius: 5px;
  background-color: #dfddd9;
  padding: 1rem;
  color: #741b47;
  margin-bottom: 1rem;
}
#dashboard-container .label {
  font-size: 14px;
  font-family: Roboto_Medium;
}
#dashboard-container .value {
  font-size: 16px;
  font-family: Roboto_Bold;
}
#dashboard-container .sub-title {
  font-size: 13px;
  height: 2rem;
  display: flex;
  align-items: center;
}
#dashboard-container .content-block {
  border-radius: 5px;
  background-color: #ffffff;
  padding: 2rem 1.5rem;
  box-shadow: 1px 2px 29px #1717241a;
  margin-bottom: 1rem;
}
#dashboard-container .circle {
  height: 6px;
  width: 6px;
  border-radius: 50%;
  margin-right: 1rem;
}
#dashboard-container .total-title {
  font-size: 18px;
  font-family: Roboto_Bold;
  color: #260b19;
  border-bottom: 2px solid;
}
#dashboard-container .single-title {
  font-size: 15px;
  color: #5e595c;
  padding: 0.5rem 0rem 0.5rem 0rem;
  margin: 0.5rem 0rem 0.5rem 1.5rem;
  border-bottom: 1px solid #dfddd9;
}
#dashboard-container .map-container {
  height: 250px;
  border-radius: 5px;
  box-shadow: 0px 1px 4px #17172429;
  margin-top: 2rem;
  padding: 1rem;
}
#dashboard-container .company-block {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
#dashboard-container .company-avatar {
  margin-right: 0.5rem;
}
#dashboard-container .company-name {
  font-size: 14px;
  font-family: "Roboto_Medium";
  color: #260b19;
}
#dashboard-container .company-date {
  font-size: 13px;
  color: #bab8b9;
}
#dashboard-container .company-state {
  padding: 0.2rem 0.5rem;
  border: 1px solid #8f8b8d;
  color: #8f8b8d;
  font-size: 11px;
  font-family: "Roboto_Bold";
  border-radius: 5px;
}
#dashboard-container .action-container {
  height: 30px;
  width: 30px;
  margin-left: 0.5rem;
  border-radius: 8px;
  background-color: #dfddd9;
  cursor: pointer;
}
#dashboard-container .action-menu {
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px #17172429;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 12px;
  right: 0;
  bottom: -60px;
  z-index: 99999;
}
#dashboard-container .action-menu-item {
  cursor: pointer;
  color: #260b19;
  font-size: 13px;
}
#dashboard-container .all-companies-link {
  cursor: pointer;
  color: #741b47;
  font-size: 15px;
  text-align: center;
  margin-top: 2rem;
}
#dashboard-container .all-companies-link:hover {
  text-decoration: underline;
}
</style>
