<template>
  <v-form ref="form" @submit.prevent="submit">
    <v-text-field ref="english" v-model="english" label="English" required></v-text-field>
    <v-text-field v-model="thai" label="Thai" required></v-text-field>

    <v-btn type="submit" class="mr-4">
      submit
    </v-btn>
  </v-form>
</template>

<script>
import { vocab } from "@/plugins/firebase";

export default {
  data() {
    return {
      english: "",
      thai: "",
    };
  },
  methods: {
    submit: function() {
      vocab.push({
        english: this.english,
        thai: this.thai
      })

      this.english = ""
      this.thai = ""

      this.$refs.english.focus();

    }
  }
};
</script>
