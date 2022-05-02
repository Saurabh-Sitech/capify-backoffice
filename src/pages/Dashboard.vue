<template>
  <div class="container">
    <div class="flex-container">
      <div class="block" style="background-color: transparent">
        <div class="title">Hello Dunya</div>
        <div class="user-role">Admin</div>
      </div>
      <div class="block">
        <div class="label">FACILITY RAISED</div>
        <div class="value">$ 6,000,000</div>
      </div>
      <div class="block">
        <div class="label">FACILITY EXTENDED</div>
        <div class="value">$ 4,500,000</div>
        <div class="sub-title">Sale Price: $ 7,000,000</div>
      </div>
      <div class="block">
        <div class="label">UNUTALIZED</div>
        <div class="value">$ 1,500,000</div>
      </div>
      <div class="block">
        <div class="label">OUTSTANDING</div>
        <div class="value">$ 5,000,000</div>
      </div>
    </div>
    <div class="flex-container" style="margin-top: 10px">
      <div class="content-block" style="margin-right: 10px">
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
          <div id="chart" style="height: 250px"></div>
        </div>
      </div>
      <div class="content-block" style="margin-left: 10px">
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
            <div class="company-state flex-container">
              <img
                src="/images/screening-icon.png"
                alt="screening-icon"
                style="margin-right: 0.2rem"
              />
              <div>SCREENING</div>
            </div>
          </div>
        </div>
        <div class="all-companies-link">See all companies</div>
      </div>
    </div>
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
      companies: [1, 2, 3, 4, 5, 6, 7],
    };
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
.container {
  padding: 60px 40px;
}
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 18px;
  font-family: Roboto_Medium;
  color: #8f8b8d;
  margin-bottom: 5px;
}
.user-role {
  font-size: 14px;
  font-family: Roboto_Medium;
  color: #bab8b9;
  margin-bottom: 25px;
}
.block {
  flex-basis: 100%;
  border-radius: 5px;
  background-color: #dfddd9;
  height: 50px;
  padding: 1rem;
  margin: 5px;
  color: #741b47;
}
.label {
  font-size: 14px;
  font-family: Roboto_Medium;
}
.value {
  font-size: 16px;
  font-family: Roboto_Bold;
}
.sub-title {
  font-size: 13px;
}
.content-block {
  flex-basis: 100%;
  border-radius: 5px;
  background-color: #ffffff;
  height: 560px;
  padding: 2rem 1.5rem;
  margin: 5px;
  box-shadow: 1px 2px 29px #1717241a;
}
.circle {
  height: 6px;
  width: 6px;
  border-radius: 50%;
  margin-right: 1rem;
}
.total-title {
  font-size: 18px;
  font-family: Roboto_Bold;
  color: #260b19;
  border-bottom: 2px solid;
}
.single-title {
  font-size: 15px;
  color: #5e595c;
  padding: 0.5rem 0rem 0.5rem 0rem;
  margin: 0.5rem 0rem 0.5rem 1.5rem;
  border-bottom: 1px solid #dfddd9;
}
.map-container {
  height: 250px;
  border-radius: 5px;
  box-shadow: 0px 1px 4px #17172429;
  margin-top: 2rem;
  padding: 1rem;
}
.company-block {
  box-shadow: 0px 1px 4px #17172429;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
.company-avatar {
  margin-right: 0.5rem;
}
.company-name {
  font-size: 14px;
  font-family: "Roboto_Medium";
  color: #260b19;
}
.company-date {
  font-size: 13px;
  color: #bab8b9;
}
.company-state {
  padding: 0.2rem 0.5rem;
  border: 1px solid #8f8b8d;
  color: #8f8b8d;
  font-size: 11px;
  font-family: "Roboto_Bold";
  border-radius: 5px;
}
.all-companies-link {
  cursor: pointer;
  color: #741b47;
  font-size: 15px;
  text-align: center;
  margin-top: 2rem;
}
.all-companies-link:hover {
  text-decoration: underline;
}
</style>
