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
              v-model="formValue.firstname"
              class="form-control"
              placeholder="Enter your first name"
              :class="{
                'is-invalid': v$.formValue.firstname.$error,
                'is-valid': !v$.formValue.firstname.$invalid,
              }"
              @blur="v$.formValue.firstname.$touch()"
            />
            <div class="valid-feedback">
              <span> Looks good! </span>
            </div>
            <div class="invalid-feedback">
              <span v-if="v$.formValue.firstname.required.$invalid"
                >First name is required</span
              >
              <span v-if="v$.formValue.firstname.maxLength.$invalid"
                >First name is
                {{ v$.formValue.firstname.maxLength.$params.max }} letters</span
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
              placeholder="Enter your last name"
              v-model="formValue.lastname"
              :class="{
                'is-invalid': v$.formValue.lastname.$error,
                'is-valid': !v$.formValue.lastname.$invalid,
              }"
              @blur="v$.formValue.lastname.$touch()"
            />
            <div class="valid-feedback">
              <span> Looks good! </span>
            </div>
            <div class="invalid-feedback">
              <span v-if="v$.formValue.lastname.required.$invalid"
                >Last name is required</span
              >
              <span v-if="v$.formValue.lastname.maxLength.$invalid"
                >Last name is
                {{ v$.formValue.lastname.maxLength.$params.max }} letters</span
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
                  v-model="formValue.payment"
                  value="visa"
                />
                <label
                  class="form-check-label"
                  :class="v$.formValue.payment.$error ? 'invalid-check' : ''"
                  for="visa"
                  >Visa</label
                >
              </div>
              <div class="form-check ms-3">
                <input
                  type="radio"
                  class="form-check-input"
                  id="mastercard"
                  v-model="formValue.payment"
                  value="mastercard"
                />
                <label
                  class="form-check-label"
                  :class="v$.formValue.payment.$error ? 'invalid-check' : ''"
                  for="mastercard"
                  >Mastercard</label
                >
              </div>
              <div class="form-check ms-3">
                <input
                  type="radio"
                  class="form-check-input"
                  id="amex"
                  value="amex"
                  v-model="formValue.payment"
                />
                <label
                  class="form-check-label"
                  :class="v$.formValue.payment.$error ? 'invalid-check' : ''"
                  for="amex"
                  >Amex</label
                >
              </div>
            </div>
            <div v-if="v$.formValue.payment.$error" class="invalid-check mt-1">
              <span>Please choose your payment</span>
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
              placeholder="Enter your company name"
              v-model="formValue.company"
              :class="{
                'is-invalid': v$.formValue.company.$error,
                'is-valid': !v$.formValue.company.$invalid,
              }"
              @blur="v$.formValue.company.$touch()"
            />
            <div class="valid-feedback">
              <span> Looks good! </span>
            </div>
            <div class="invalid-feedback">
              <span v-if="v$.formValue.company.required.$invalid"
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
            <input
              type="text"
              id="cardnumber"
              class="form-control"
              placeholder="Enter your card number"
              @keypress="onlyNumber"
              v-model="formValue.cardnumber"
              :class="{
                'is-invalid': v$.formValue.cardnumber.$error,
                'is-valid': !v$.formValue.cardnumber.$invalid,
              }"
            />
            <div class="valid-feedback">
              <span> Looks good! </span>
            </div>
            <div class="invalid-feedback">
              <span v-if="v$.formValue.cardnumber.required.$invalid"
                >Card number is required</span
              >
            </div>
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
              placeholder="Enter your email"
              class="form-control"
              v-model="formValue.email"
              :class="{
                'is-invalid': v$.formValue.email.$error,
                'is-valid': !v$.formValue.email.$invalid,
              }"
              @blur="v$.formValue.email.$touch()"
            />
            <div class="valid-feedback">
              <span> Looks good! </span>
            </div>
            <div class="invalid-feedback">
              <span v-if="v$.formValue.email.required.$invalid"
                >Email name is required</span
              >
              <span class="ms-2" v-if="v$.formValue.email.email.$invalid"
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
            <MothYear
              @ex-value="exSelect"
              @blur="v$.formValue.expiration.year.$touch()"
              :state="v$.formValue.expiration.year.$error"
            />
            <div class="invalid-check mt-1">
              <span v-if="v$.formValue.expiration.year.$error"
                >Expiration month is required</span
              >
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12 mb-3 pe-xl-5 pe-md-3">
          <!--  Phone number input -->
          <div class="form-group mb-3">
            <label class="form-label d-block" for="phone">
              Phone number <span class="required-input">*</span></label
            >
            <input
              @keypress="onlyNumber"
              type="text"
              id="tel"
              placeholder="Enter your phone number"
              class="form-control"
              v-model="formValue.phone"
              :class="{
                'is-invalid': v$.formValue.phone.$error,
                'is-valid': !v$.formValue.phone.$invalid,
              }"
              @blur="v$.formValue.phone.$touch()"
            />
            <div class="valid-feedback">
              <span> Looks good! </span>
            </div>
            <div class="invalid-feedback">
              <span v-if="v$.formValue.phone.required.$invalid"
                >Phone number is required</span
              >
              <span v-if="v$.formValue.phone.minLength.$invalid"
                >Phone number min
                {{ v$.formValue.phone.minLength.$params.min }} number</span
              >
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12 mb-3 ps-xl-5 ps-md-3">
          <!--  Cvn input -->
          <div class="form-group mb-3">
            <label class="form-label d-block" for="cvn">
              Cvn <span class="required-input">*</span></label
            >
            <input
              type="text"
              id="cvn"
              class="form-control"
              @keypress="onlyNumber"
              placeholder="Enter your Cvn number"
              v-model="formValue.cvn"
              :class="{
                'is-invalid': v$.formValue.cvn.$error,
                'is-valid': !v$.formValue.cvn.$invalid,
              }"
            />
            <div class="valid-feedback">
              <span> Looks good! </span>
            </div>
            <div class="invalid-feedback">
              <span v-if="v$.formValue.cvn.required.$invalid"
                >Cvn number is required</span
              >
            </div>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="customRange2" class="form-label"
              >Donate us<span class="required-input">*</span></label
            >
            <RangeSlider
              @range-value="updateRangeInput"
              :rangeValue="formValue.bonus"
            />
          </div>
        </div>
      </div>
      <!-- Submit button -->
      <div class="d-flex justify-content-end align-items-center mt-5">
        <button v-show="!loadding" type="submit" class="btn btn-submit btn-primary btn-block ms-4">
          Submit
        </button>
        <div v-show="loadding" class="text-center ms-4">
          <div class="spinner-border btn-loading" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <button
          type="reset"
          @click="resetForm"
          class="btn btn-reset btn-primary btn-block ms-4"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import SelectGender from "./SelectGender.vue";
import MothYear from "./MothYear.vue";
import RangeSlider from "./RangeSlider.vue";
import useValidate from "@vuelidate/core";
import { required, maxLength, minLength, email } from "@vuelidate/validators";
export default {
  name: "FormValidate",
  components: {
    SelectGender,
    RangeSlider,
    MothYear,
  },
  data() {
    return {
      v$: useValidate(),
      loadding: false,
      formValue: {
        firstname: null,
        lastname: null,
        company: null,
        email: null,
        phone: null,
        gender: null,
        payment: null,
        cardnumber: null,
        cvn: null,
        expiration: {
          month: null,
          year: null,
        },
        bonus: 500,
      },
    };
  },
  validations() {
    return {
      formValue: {
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
          minLength: minLength(10),
        },
        payment: {
          required,
        },
        cardnumber: {
          required,
        },
        cvn: {
          required,
        },
        expiration: {
          month: { required },
          year: { required },
        },
      },
    };
  },
  methods: {
    submitForm() {
      // console.log(this.v$);
      this.v$.$touch();
      if (this.v$.$invalid) {
        console.log("have error");
      } else {
        this.loadding = true;
        localStorage.setItem("valueForm", JSON.stringify(this.formValue));
        setTimeout(() => this.$emit("done", true), 2000);
      }
    },
    onlyNumber($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        $event.preventDefault();
      }
    },
    updateSelect(data) {
      if (data) {
        this.formValue.gender = data;
      }
    },
    exSelect(data) {
      if (data) {
        this.formValue.expiration.month = data.month + 1;
        this.formValue.expiration.year = data.year;
      }
    },
    updateRangeInput(data) {
      this.formValue.bonus = data;
    },
    resetForm() {
      this.formValue = {
        firstname: null,
        lastname: null,
        company: null,
        email: null,
        phone: null,
        gender: null,
        payment: null,
        cardnumber: null,
        cvn: null,
        expiration: {
          month: null,
          year: null,
        },
        bonus: 500,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.invalid-check {
  color: #dc3545;
  font-size: 14px;
}
.form-label {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  .required-input {
    color: #dc3545;
    font-weight: bold;
  }
}
.form-check-input:checked[type="radio"] {
  background-image: url(../assets/icon.svg);
}
.form-check-input:checked[type="radio"] {
  background-color: transparent;
  border: 1px solid #319e5e;
}
.btn-submit {
  background: #319e5e;
  border: none;
  padding: 10px 25px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  &:active {
    background-color: #0d6331;
    border-color: #0d6331;
  }
}
.btn-loading{
  border-color:  #319e5e;
  border-right-color: transparent;
}
.btn-reset {
  background: transparent;
  border: 1px solid #ced4da;
  padding: 10px 25px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: #a1a1a1;
  &:active {
    background-color: #ced4da;
    border-color: #ced4da;
  }
}
</style>