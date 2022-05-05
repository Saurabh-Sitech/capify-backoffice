<template>
  <div id="Insights-Container">
    <div class="block">
      <div class="d-flex justify-content-between align-items-center">
        <div class="title">Gross Profit %</div>
        <div
          class="sub-title"
          style="background-color: #e8dff5; color: #411884"
        >
          HIGHEST PERFORMING METRIC
        </div>
      </div>
      <div class="map-container">
        <div id="gross_profit_chart" style="height: 100%; width: 100%"></div>
      </div>
      <div class="d-inline-block">
        <div class="legend_container d-flex align-items-center">
          <div class="label">Benchmark</div>
          <div class="value"></div>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="d-flex justify-content-between align-items-center">
        <div class="title">ARR Growth Rate %</div>
        <div
          class="sub-title"
          style="background-color: #fae3d4; color: #cc4e00"
        >
          LOWEST PERFORMING METRIC
        </div>
      </div>
      <div class="map-container">
        <div id="arr_growth_rate" style="height: 100%; width: 100%"></div>
      </div>
      <div class="d-inline-block">
        <div class="legend_container d-flex align-items-center">
          <div class="label">Benchmark</div>
          <div class="value"></div>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="d-flex justify-content-between align-items-center">
        <div class="title">Net Dollar Retention</div>
        <div
          class="sub-title"
          style="background-color: #fae3d4; color: #cc4e00"
        >
          LOWEST PERFORMING METRIC
        </div>
      </div>
      <div class="map-container">
        <div id="net_dollar_retention" style="height: 100%; width: 100%"></div>
      </div>
      <div class="d-inline-block">
        <div class="legend_container d-flex align-items-center">
          <div class="label">Benchmark</div>
          <div class="value"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let CanvasJS = require("../../lib/canvasjs.min");
CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS;

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default {
  name: "InsightsPage",
  data() {
    return {
      gross_profit_chart: null,
      arr_growth_rate: null,
      net_dollar_retention: null,
    };
  },

  mounted() {
    this.gross_profit_chart = new CanvasJS.Chart("gross_profit_chart", {
      animationEnabled: true,
      dataPointWidth: 24,
      axisX: {
        interval: 1,
        labelFontSize: 13,
        labelFontFamily: "Roboto_Regular",
        labelFontColor: "#5E595C",
      },
      axisY: {
        labelFontSize: 13,
        labelFontFamily: "Roboto_Regular",
        labelFontColor: "#5E595C",
      },
      data: [
        {
          type: "column",
          markerType: "none",
          showInLegend: false,
          indexLabelFontSize: 13,
          indexLabelFontFamily: "Robot_Bold",
          indexLabelFontWeight: "bold",
          indexLabelFontColor: "#511332",
          dataPoints: [
            {
              y: randomIntFromInterval(0, 100),
              label: "Jan-21",
              indexLabel: "{y}%",
              color: "#DCDBDB",
            },
            {
              y: randomIntFromInterval(0, 100),
              label: "Feb-21",
              indexLabel: "{y}%",
              color: "#DCDBDB",
            },
            {
              y: randomIntFromInterval(0, 100),
              label: "Mar-21",
              indexLabel: "{y}%",
              color: "#DCDBDB",
            },
            {
              y: randomIntFromInterval(0, 100),
              label: "Apr-21",
              indexLabel: "{y}%",
              color: "#DCDBDB",
            },
            {
              y: randomIntFromInterval(0, 100),
              label: "May-21",
              indexLabel: "{y}%",
              color: "#DCDBDB",
            },
            {
              y: randomIntFromInterval(0, 100),
              label: "Jun-21",
              indexLabel: "{y}%",
              color: "#DCDBDB",
            },
            {
              y: randomIntFromInterval(0, 100),
              label: "Jul-21",
              indexLabel: "{y}%",
              color: "#DCDBDB",
            },
            {
              y: randomIntFromInterval(0, 100),
              label: "Aug-21",
              indexLabel: "{y}%",
              color: "#DCDBDB",
            },
            {
              y: randomIntFromInterval(0, 100),
              label: "Sep-21",
              indexLabel: "{y}%",
              color: "#DCDBDB",
            },
            {
              y: randomIntFromInterval(0, 100),
              label: "Oct-21",
              indexLabel: "{y}%",
              color: "#DCDBDB",
            },
            {
              y: randomIntFromInterval(0, 100),
              label: "Nov-21",
              indexLabel: "{y}%",
              color: "#DCDBDB",
            },
            {
              y: randomIntFromInterval(0, 100),
              label: "Dec-21",
              indexLabel: "{y}%",
              color: "#DCDBDB",
            },
          ],
        },
        {
          type: "line",
          markerType: "none",
          lineDashType: "dash",
          color: "#411884",
          indexLabelFontSize: 13,
          indexLabelFontFamily: "Robot_Medium",
          indexLabelFontWeight: "bold",
          indexLabelFontColor: "#411884",
          dataPoints: [...Array(12).keys()].map((each, index) => {
            return index < 11
              ? { y: 90 }
              : { y: 90, indexLabel: "Outstanding: 90%" };
          }),
        },
        {
          type: "line",
          markerType: "none",
          lineDashType: "dash",
          color: "#411884",
          indexLabelFontSize: 13,
          indexLabelFontFamily: "Robot_Medium",
          indexLabelFontWeight: "bold",
          indexLabelFontColor: "#411884",
          dataPoints: [...Array(12).keys()].map((each, index) => {
            return index < 11 ? { y: 80 } : { y: 80, indexLabel: "Great: 80%" };
          }),
        },
        {
          type: "line",
          markerType: "none",
          lineDashType: "dash",
          color: "#411884",
          indexLabelFontSize: 13,
          indexLabelFontFamily: "Robot_Medium",
          indexLabelFontWeight: "bold",
          indexLabelFontColor: "#411884",
          dataPoints: [...Array(12).keys()].map((each, index) => {
            return index < 11 ? { y: 60 } : { y: 60, indexLabel: "Good: 60%" };
          }),
        },
      ],
    });
    this.gross_profit_chart.render();

    this.arr_growth_rate = new CanvasJS.Chart("arr_growth_rate", {
      animationEnabled: true,
      axisX: {
        interval: 1,
        labelFontSize: 13,
        labelFontFamily: "Roboto_Regular",
        labelFontColor: "#5E595C",
        labelAngle: 90,
      },
      axisY: {
        labelFontSize: 13,
        labelFontFamily: "Roboto_Regular",
        labelFontColor: "#5E595C",
        labelFormatter: function (e) {
          return e.value + "%";
        },
      },
      data: [
        {
          type: "line",
          color: "#511332",
          showInLegend: false,
          indexLabelFontSize: 13,
          indexLabelFontFamily: "Robot_Bold",
          indexLabelFontWeight: "bold",
          indexLabelFontColor: "#511332",
          markerColor: "#DFDDD9",
          markerBorderColor: "#511332",
          markerBorderThickness: 2,
          dataPoints: [
            {
              y: randomIntFromInterval(-10, 100),
              label: "Jan-20",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Feb-20",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Mar-20",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Apr-20",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "May-20",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Jun-20",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Jul-20",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Aug-20",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Sep-20",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Oct-20",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Nov-20",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Dec-20",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Jan-21",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Feb-21",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Mar-21",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Apr-21",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "May-21",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Jun-21",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Jul-21",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Aug-21",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Sep-21",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Oct-21",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Nov-21",
              indexLabel: "{y}%",
            },
            {
              y: randomIntFromInterval(-10, 100),
              label: "Dec-21",
              indexLabel: "{y}%",
            },
          ],
        },
        {
          type: "line",
          markerType: "none",
          lineDashType: "dash",
          color: "#411884",
          indexLabelFontSize: 13,
          indexLabelFontFamily: "Robot_Medium",
          indexLabelFontWeight: "bold",
          indexLabelFontColor: "#411884",
          indexLabelMaxWidth: 60,
          indexLabelWrap: true,
          dataPoints: [...Array(24).keys()].map((each, index) => {
            return index < 23
              ? { y: 40 }
              : { y: 40, indexLabel: "Industry min : 45%" };
          }),
        },
      ],
    });
    this.arr_growth_rate.render();

    this.net_dollar_retention = new CanvasJS.Chart("net_dollar_retention", {
      animationEnabled: true,
      axisX: {
        interval: 1,
        labelFontSize: 13,
        labelFontFamily: "Roboto_Regular",
        labelFontColor: "#5E595C",
        labelAngle: 90,
      },
      axisY: {
        labelFontSize: 13,
        labelFontFamily: "Roboto_Regular",
        labelFontColor: "#5E595C",
        labelFormatter: function (e) {
          return e.value + "%";
        },
      },
      data: [
        {
          type: "line",
          color: "#511332",
          showInLegend: false,
          indexLabelFontSize: 13,
          indexLabelFontFamily: "Robot_Bold",
          indexLabelFontWeight: "bold",
          indexLabelFontColor: "#511332",
          markerType: "none",
          dataPoints: [
            {
              y: randomIntFromInterval(80, 100),
              label: "Jan-20",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Feb-20",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Mar-20",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Apr-20",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "May-20",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Jun-20",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Jul-20",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Aug-20",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Sep-20",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Oct-20",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Nov-20",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Dec-20",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Jan-21",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Feb-21",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Mar-21",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Apr-21",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "May-21",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Jun-21",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Jul-21",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Aug-21",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Sep-21",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Oct-21",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Nov-21",
            },
            {
              y: randomIntFromInterval(80, 100),
              label: "Dec-21",
            },
          ],
        },
        {
          type: "line",
          markerType: "none",
          lineDashType: "dash",
          color: "#411884",
          indexLabelFontSize: 13,
          indexLabelFontFamily: "Robot_Medium",
          indexLabelFontWeight: "bold",
          indexLabelFontColor: "#411884",
          indexLabelMaxWidth: 60,
          indexLabelWrap: true,
          dataPoints: [...Array(24).keys()].map((each, index) => {
            return index < 23
              ? { y: 100 }
              : { y: 100, indexLabel: "Industry min : 100%" };
          }),
        },
      ],
    });
    this.net_dollar_retention.render();
  },
};
</script>

<style scoped>
#Insights-Container {
  padding: 1rem;
}
#Insights-Container .block {
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 1px 4px #17172429;
  margin-bottom: 2rem;
}
#Insights-Container .title {
  font-size: 24px;
  color: #260b19;
}
#Insights-Container .sub-title {
  padding: 0.2rem 0.5rem;
  font-size: 11px;
  font-family: Roboto_Bold;
  text-transform: uppercase;
}
#Insights-Container .map-container {
  height: 400px;
  padding: 1rem 0rem;
}
#Insights-Container .legend_container {
  cursor: pointer;
}
#Insights-Container .legend_container .label {
  font-size: 13px;
  color: #260b19;
  margin-right: 0.5rem;
}
#Insights-Container .legend_container .value {
  border: 1px dashed #411884;
  width: 20px;
}
</style>
