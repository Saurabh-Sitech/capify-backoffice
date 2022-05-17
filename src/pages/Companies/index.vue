<template>
  <div id="companies-container">
    <div class="title">Companies</div>

    <b-row>
      <b-col>
        <div class="block" style="background-color: #bab8b9; color: #260b19">
          <div class="label">TOTAL</div>
          <div class="value">120</div>
        </div>
      </b-col>
      <b-col>
        <div class="block" style="background-color: #dfddd9; color: #5e595c">
          <div class="label">IN SCREENING</div>
          <div class="d-flex align-items-center">
            <img
              src="/images/screening-icon.png"
              alt="screening-icon"
              style="margin-right: 0.5rem"
            />
            <div class="value">70</div>
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="block" style="background-color: #e8dff5; color: #411884">
          <div class="label">QUALIFIED</div>
          <div class="d-flex align-items-center">
            <img
              src="/images/qualified-icon.png"
              alt="qualified-icon"
              style="margin-right: 0.5rem"
            />
            <div class="value">40</div>
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="block" style="background-color: #fae3d4; color: #cc4e00">
          <div class="label">NOT QUALIFIED</div>
          <div class="d-flex align-items-center">
            <img
              src="/images/not-qualified-icon.png"
              alt="not-qualified-icon"
              style="margin-right: 0.5rem"
            />
            <div class="value">30</div>
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="block" style="background-color: #dfddd9; color: #5e595c">
          <div class="label">IN EXECUTION</div>
          <div class="d-flex align-items-center">
            <img
              src="/images/execution-icon.png"
              alt="execution-icon"
              style="margin-right: 0.5rem"
            />
            <div class="value">33</div>
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="block" style="background-color: #ebdfe5; color: #741b47">
          <div class="label">FUNDED</div>
          <div class="d-flex align-items-center">
            <img
              src="/images/funded-icon.png"
              alt="funded-icon"
              style="margin-right: 0.5rem"
            />
            <div class="value">22</div>
          </div>
        </div>
      </b-col>
    </b-row>

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

    <b-row>
      <b-col lg="3" sm="6" xs="6" v-for="(each, index) in data" :key="index">
        <div
          class="content-block"
          @mouseenter="comMouseEnter(index)"
          @mouseleave="comMouseLeave"
          @click.stop="openDetail(index)"
        >
          <div class="d-flex align-items-center">
            <img
              class="com-avatar"
              src="/images/marz-logo.png"
              alt="marz-logo"
            />
            <div>
              <div class="com-name">{{ each.name }}</div>
              <div class="com-place">{{ each.place }}</div>
            </div>
          </div>
          <div class="amount-container">
            <div v-if="each.funded_amount && each.total_amount">
              <b-progress height="8px">
                <b-progress-bar
                  style="background-color: #741b47"
                  :value="45"
                ></b-progress-bar>
              </b-progress>
              <div class="amount-label">
                {{ each.funded_amount }} / {{ each.total_amount }}
              </div>
            </div>
          </div>
          <div class="discount-label">
            <div v-if="each.discount">
              <span style="font-family: Roboto_Bold">Good.</span>
              <span>{{ each.discount }} discount</span>
            </div>
          </div>
          <div class="d-inline-block">
            <div
              class="state"
              style="
                color: #8f8b8d;
                background-color: #ffffff;
                border: 1px solid #8f8b8d;
              "
            >
              <img
                src="/images/screening-icon.png"
                alt="screening-icon"
                style="margin-right: 0.5rem"
              />
              <div style="margin-top: 2px">SCREENING</div>
            </div>
          </div>
          <div
            class="action-container"
            v-if="hoverIndex === index"
            @click.stop="openMenu"
          >
            <img
              :src="
                openMenuFlag ? '/images/eye-icon.png' : '/images/dot-icon.png'
              "
              :alt="openMenuFlag ? 'eye-icon' : 'dot-icon'"
            />
          </div>
          <div class="action-menu" v-if="hoverIndex === index && openMenuFlag">
            <div class="action-menu-item" style="margin-bottom: 0.5rem">
              View
            </div>
            <div class="action-menu-item">Move to next stage</div>
          </div>
        </div>
      </b-col>
    </b-row>

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
  name: "Companies-Page",
  data() {
    return {
      hoverIndex: null,
      openMenuFlag: false,
      searchText: "",
      page_size: 20,
      active_page: 1,
      total_page: 0,
      total_count: 120,
      data: [
        {
          name: "Marz Inc.",
          place: "Jordan",
          funded_amount: "$ 42,334",
          total_amount: "$ 100,000",
          discount: "15%",
        },
        {
          name: "Marz Inc.",
          place: "Jordan",
        },
        {
          name: "Marz Inc.",
          place: "Jordan",
          discount: "13%",
        },
        {
          name: "Marz Inc.",
          place: "Jordan",
        },
        {
          name: "Marz Inc.",
          place: "Jordan",
          discount: "13%",
        },
        {
          name: "Marz Inc.",
          place: "Jordan",
          funded_amount: "$ 42,334",
          total_amount: "$ 100,000",
          discount: "15%",
        },
        {
          name: "Marz Inc.",
          place: "Jordan",
          discount: "13%",
        },
        {
          name: "Marz Inc.",
          place: "Jordan",
        },
      ],
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
    openDetail(index) {
      this.$router.push(`/companies/${index}`);
    },
    openMenu() {
      this.openMenuFlag = !this.openMenuFlag;
    },
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
#companies-container {
  padding: 60px;
}
#companies-container .title {
  font-size: 18px;
  font-family: Roboto_Medium;
  color: #8f8b8d;
  margin-bottom: 1rem;
}
#companies-container .block {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
}
#companies-container .label {
  font-size: 14px;
  font-family: Roboto_Medium;
}
#companies-container .value {
  font-size: 16px;
  font-family: Roboto_Bold;
}
#companies-container .top-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0rem;
}
#companies-container .filter-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#companies-container .content-block {
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px #17172429;
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;
  cursor: pointer;
}
#companies-container .content-block:hover {
  box-shadow: 1px 2px 8px #17172429;
}
#companies-container .com-name {
  font-size: 15px;
  font-family: Roboto_Bold;
  color: #260b19;
}
#companies-container .com-place {
  font-size: 13px;
  color: #8f8b8d;
}
#companies-container .amount-container {
  height: 5rem;
  display: flex;
  align-items: center;
}
#companies-container .amount-label {
  font-size: 13px;
  font-family: Roboto_Medium;
  color: #741b47;
}
#companies-container .discount-label {
  height: 1.5rem;
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #411884;
}
#companies-container .state {
  padding: 0.1rem;
  font-size: 11px;
  font-family: Roboto_Bold;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#companies-container .bottom-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
}
#companies-container .action-container {
  height: 30px;
  width: 30px;
  margin-left: 0.5rem;
  border-radius: 8px;
  background-color: #dfddd9;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
#companies-container .action-menu {
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px #17172429;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 12px;
  right: 0.5rem;
  top: 2.7rem;
  z-index: 99999;
}
#companies-container .action-menu-item {
  cursor: pointer;
  color: #260b19;
  font-size: 13px;
}
</style>
