<template>
  <div id="edit-detail-container">
    <b-row class="mb-4">
      <b-col lg="7" sm="12" class="title">Edit Company Details</b-col>
      <b-col lg="5" sm="12" class="d-flex align-items-center">
        <base-button
          type="submit"
          stylevariant="secondary"
          customStyle="font-size: 15px; font-family: Roboto_Medium;margin-right:0.5rem;"
          @onClick="save"
        >
          SAVE CHANGES
        </base-button>
        <base-button
          type="submit"
          stylevariant="secondary"
          customStyle="font-size: 15px; font-family: Roboto_Medium"
          @onClick="cancel"
        >
          CANCEL
        </base-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6" sm="12">
        <base-input
          label="Company Name"
          type="text"
          value="Marz Inc."
        ></base-input>
      </b-col>
      <b-col lg="6" sm="12">
        <base-input
          label="Work Email Address"
          type="text"
          value="ali@marzinc.com"
        ></base-input>
      </b-col>
      <b-col lg="6" sm="12">
        <base-input
          label="Mobile Phone Number"
          type="text"
          value="00962777463646"
        ></base-input>
      </b-col>
      <b-col lg="6" sm="12">
        <base-input
          label="Company Website URL"
          type="text"
          value="www.marzinc.com"
        ></base-input>
      </b-col>
      <b-col lg="6" sm="12">
        <base-input
          label="Place of Operations"
          type="text"
          value="Jordan"
          helperText="This field cannot be edited"
          :helperTextStyle="getInputStyle"
          readOnly
        ></base-input>
      </b-col>
      <b-col lg="6" sm="12">
        <base-input
          label="Date of Establishment"
          type="text"
          value="03 / 04 / 2019"
          helperText="This field cannot be edited"
          :helperTextStyle="getInputStyle"
          readOnly
        ></base-input>
      </b-col>
      <b-col lg="6" sm="12">
        <base-input
          label="Company Business Type"
          type="text"
          value="Media"
          helperText="This field cannot be edited"
          :helperTextStyle="getInputStyle"
          readOnly
        ></base-input>
      </b-col>
      <b-col lg="6" sm="12">
        <base-input
          label="Average Annual Recurring Revenue (ARR)"
          type="text"
          value="1,000,000"
          helperText="This field cannot be edited"
          :helperTextStyle="getInputStyle"
          readOnly
        ></base-input>
      </b-col>
      <b-col lg="6" sm="12">
        <base-input
          label="Requested Amount From Capify"
          type="text"
          value="100,000"
          helperText="This field cannot be edited"
          :helperTextStyle="getInputStyle"
          readOnly
        ></base-input>
      </b-col>
      <b-col lg="6" sm="12">
        <base-input
          label="Number of Investment Rounds to Date"
          type="text"
          value="2"
          helperText="This field cannot be edited"
          :helperTextStyle="getInputStyle"
          readOnly
        ></base-input>
      </b-col>
      <b-col lg="6" sm="12">
        <base-input
          label="Number of Active Contracts"
          type="text"
          value="500,000"
          helperText="This field cannot be edited"
          :helperTextStyle="getInputStyle"
          readOnly
        ></base-input>
      </b-col>
      <b-col lg="6" sm="12">
        <base-input
          label="Shariah Compliant Facility Preference"
          type="text"
          value="Yes"
          helperText="This field cannot be edited"
          :helperTextStyle="getInputStyle"
          readOnly
        ></base-input>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col offset-lg="7" lg="5" sm="12" class="d-flex align-items-center">
        <base-button
          type="submit"
          stylevariant="secondary"
          customStyle="font-size: 15px; font-family: Roboto_Medium;margin-right:0.5rem;"
          @onClick="save"
        >
          SAVE CHANGES
        </base-button>
        <base-button
          type="submit"
          stylevariant="secondary"
          customStyle="font-size: 15px; font-family: Roboto_Medium"
          @onClick="cancel"
        >
          CANCEL
        </base-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  emits: ["close-edit-mode"],
  methods: {
    save() {
      this.$emit("close-edit-mode");
    },
    cancel() {
      this.$emit("close-edit-mode");
    },
  },
  computed: {
    getInputStyle() {
      return `text-align:right;color:#8F8B8D;font-family:Roboto_Italic;font-size:13px;`;
    },
  },
};
</script>

<style scoped>
#edit-detail-container {
  padding: 1rem;
}
#edit-detail-container .title {
  font-size: 24px;
  color: #260b19;
}
</style>
