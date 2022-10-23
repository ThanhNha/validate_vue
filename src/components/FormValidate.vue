<template>
  <div>
    <form v-on:submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-6 col-12 mb-3 pe-xl-5 pe-md-3">
          <!-- First name input -->
          <div class="form-group mb-3">
            <label class="form-label d-block" for="firstname"
              >First name <span class="required-input">*</span></label
            >
            <input
              type="text"
              id="firstname"
              v-model="firstname"
              class="form-control"
              :class="{
                'is-invalid': v$.firstname.$error,
                'is-valid': !v$.firstname.$invalid,
              }"
              @blur="v$.firstname.$touch()"
            />
            <div class="valid-feedback">
              <span> Looks good! </span>
            </div>
            <div class="invalid-feedback">
              <span v-if="v$.firstname.required.$invalid"
                >First name is required</span
              >
              <span v-if="v$.firstname.maxLength.$invalid"
                >First name is
                {{ v$.firstname.maxLength.$params.max }} letters</span
              >
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12 mb-3 ps-xl-5 ps-md-3">
          <!-- Gender select -->
          <div class="form-group mb-3">
            <label class="form-label d-block" for="gender"
              >Gender<span class="required-input">*</span></label
            >
            <SelectGender
              :options="['Male', 'Female']"
              :default="''"
              class="select"
              id="gender"
              @select-value="updateSelect"
            />
          </div>
        </div>
        <div class="col-md-6 col-12 mb-3 pe-xl-5 pe-md-3">
          <!-- Last name input -->
          <div class="form-group mb-3">
            <label class="form-label d-block" for="lastname"
              >Last name <span class="required-input">*</span></label
            >
            <input
              type="text"
              id="lastname"
              class="form-control"
              v-model="lastname"
              :class="{
                'is-invalid': v$.lastname.$error,
                'is-valid': !v$.lastname.$invalid,
              }"
              @blur="v$.lastname.$touch()"
            />
            <div class="valid-feedback">
              <span> Looks good! </span>
            </div>
            <div class="invalid-feedback">
              <span v-if="v$.lastname.required.$invalid"
                >Last name is required</span
              >
              <span v-if="v$.lastname.maxLength.$invalid"
                >Last name is
                {{ v$.lastname.maxLength.$params.max }} letters</span
              >
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12 mb-3 ps-xl-5 ps-md-3">
          <!-- Payment check  -->
          <div class="mb-3 form-group">
            <label class="form-label d-block" for="payment"
              >Payment mode <span class="required-input">*</span></label
            >
            <div class="d-flex mt-3 w-75 justify-content-between">
              <div class="form-check">
                <input
                  type="radio"
                  class="form-check-input"
                  id="visa"
                  name="radio-stacked"
                  required
                />
                <label class="form-check-label" for="visa">Visa</label>
              </div>
              <div class="form-check ms-3">
                <input
                  type="radio"
                  class="form-check-input"
                  id="mastercard"
                  name="radio-stacked"
                  required
                />
                <label class="form-check-label" for="mastercard"
                  >Mastercard</label
                >

                <div class="invalid-feedback">
                  More example invalid feedback text
                </div>
              </div>
              <div class="form-check ms-3">
                <input
                  type="radio"
                  class="form-check-input"
                  id="amex"
                  name="radio-stacked"
                  required
                />
                <label class="form-check-label" for="amex">Amex</label>
                <div class="invalid-feedback">
                  More example invalid feedback text
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12 mb-3 pe-xl-5 pe-md-3">
          <!-- Company input -->
          <div class="form-group mb-3">
            <label class="form-label d-block" for="company"
              >Company <span class="required-input">*</span></label
            >
            <input
              type="text"
              id="company"
              class="form-control"
              v-model="company"
              :class="{
                'is-invalid': v$.company.$error,
                'is-valid': !v$.company.$invalid,
              }"
              @blur="v$.company.$touch()"
            />
            <div class="valid-feedback">
              <span> Looks good! </span>
            </div>
            <div class="invalid-feedback">
              <span v-if="v$.company.required.$invalid"
                >Company name is required</span
              >
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12 mb-3 ps-xl-5 ps-md-3">
          <!-- Card  number input -->
          <div class="form-group mb-3">
            <label class="form-label d-block" for="cardnumber"
              >Card number <span class="required-input">*</span></label
            >
            <input type="text" id="cardnumber" class="form-control" />
          </div>
        </div>
        <div class="col-md-6 col-12 mb-3 pe-xl-5 pe-md-3">
          <!-- Email input -->
          <div class="form-group mb-3">
            <label class="form-label d-block" for="email"
              >Email <span class="required-input">*</span></label
            >
            <input
              type="text"
              id="email"
              v-model="email"
              class="form-control"
              :class="{
                'is-invalid': v$.email.$error,
                'is-valid': !v$.email.$invalid,
              }"
              @blur="v$.email.$touch()"
            />
            <div class="valid-feedback">
              <span> Looks good! </span>
            </div>
            <div class="invalid-feedback">
              <span v-if="v$.email.required">Email name is required</span>
              <span class="ms-2" v-if="v$.email.email"
                >Please enter correct email format</span
              >
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12 mb-3 ps-xl-5 ps-md-3">
          <!-- Expiration input -->
          <div class="form-group mb-3">
            <label class="form-label d-block" for="expiration"
              >Expiration <span class="required-input">*</span></label
            >
            <input type="text" id="expiration" class="form-control" />
          </div>
        </div>
        <div class="col-md-6 col-12 mb-3 pe-xl-5 pe-md-3">
          <!--  Phone number input -->
          <div class="form-group mb-3">
            <label class="form-label d-block" for="phone">
              Phone number <span class="required-input">*</span></label
            >
            <input
              v-model="phone"
              @keypress="onlyNumber"
              type="text"
              id="tel"
              class="form-control"
              :class="{
                'is-invalid': v$.phone.$error,
                'is-valid': !v$.phone.$invalid,
              }"
              @blur="v$.phone.$touch()"
            />
            <div class="valid-feedback">
              <span> Looks good! </span>
            </div>
            <div class="invalid-feedback">
              <span v-if="v$.phone.required">Phone number is required</span>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12 mb-3 ps-xl-5 ps-md-3">
          <!--  Cvn input -->
          <div class="form-group mb-3">
            <label class="form-label d-block" for="cvn">
              Cvn <span class="required-input">*</span></label
            >
            <input type="text" id="cvn" class="form-control" />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="customRange2" class="form-label"
              >Donate us<span class="required-input">*</span></label
            >
            <RangeSlider />
          </div>
        </div>
      </div>
      <!-- Submit button -->
      <div class="d-flex justify-content-end mt-5">
        <button type="submit" class="btn btn-submit btn-primary btn-block ms-4">
          Submit
        </button>
        <button type="reset" class="btn btn-reset btn-primary btn-block ms-4">
          Reset
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import SelectGender from "./SelectGender.vue";
import RangeSlider from "./RangeSlider.vue";
import useValidate from "@vuelidate/core";
import { required, maxLength, email } from "@vuelidate/validators";
export default {
  name: "FormValidate",
  components: {
    SelectGender,
    RangeSlider,
  },
  data() {
    return {
      v$: useValidate(),
      firstname: null,
      lastname: null,
      company: null,
      email: null,
      phone: null,
      gender: null,
      payment: null,
      cardnumber: null,
      expiration: null,
      cvn: null,
    };
  },
  validations() {
    return {
      firstname: {
        required,
        maxLength: maxLength(15),
      },
      lastname: {
        required,
        maxLength: maxLength(15),
      },
      company: {
        required,
      },
      email: {
        required,
        email,
      },
      phone: {
        required,
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.v$);
      this.v$.$touch();
    },
    onlyNumber($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
    updateSelect(data) {
      this.gender = data;
      // console.log(data);
    },
  },
};
</script>
<style lang="scss" scoped>
.form-label {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  .required-input {
    color: red;
    font-weight: bold;
  }
}
.btn-submit {
  background: #319e5e;
  border: none;
  padding: 10px 25px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
}
.btn-reset {
  background: transparent;
  border: 1px solid #ced4da;
  padding: 10px 25px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: #a1a1a1;
}
</style>