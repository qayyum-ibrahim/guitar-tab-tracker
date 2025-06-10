<template>
  <div>
    <input type="email" name="email" placeholder="email" v-model="email" />
    <input
      type="password"
      name="password"
      placeholder="password"
      v-model="password"
    />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "RegisterComp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      await AuthenticationService.register({
        email: this.email,
        password: this.password,
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
