<template>
  <v-app>
    <v-app-bar app color="#4DBA87" dark>
      <h1>Vocabulation</h1>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-alert
          dense
          type="warning"
          transition="scale-transition"
          :value="fail"
          >ไม่ถูกต้อง</v-alert
        >

        <v-card elevation="2" class="pa-10 mt-10">
          <v-row justify="center">
            <h1 v-if="!!question.thai">{{ question.thai }}</h1>
          </v-row>
        </v-card>

        <v-form ref="form" class="mt-5" @submit.prevent="onSubmit">
          <v-text-field
            ref="answer"
            v-model="answer"
            label="Answer"
            required
            autocomplete="off"
          ></v-text-field>
          <v-btn block color="#4DBA87" dark elevation="2" large type="submit"
            >OK</v-btn
          >
        </v-form>

        <h1 class="mt-10">คำที่ถูกก่อนหน้า</h1>
        <h3 class="success--text" v-if="!!oldCorrect.thai">
          {{ oldCorrect.thai }} : {{ oldCorrect.english }}
        </h3>
        <v-pagination
          v-model="page"
          :length="Math.ceil(vocabulations.length / 10)"
          :total-visible="7"
          class="mt-10"
          color="#4DBA87"
        ></v-pagination>

        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import { vocab } from "@/plugins/firebase";

export default {
  name: "App",
  data() {
    return {
      fail: false,
      page: 1,
      question: {},
      answer: "",
      oldCorrect: {},
      vocabulations: [],
    };
  },
  methods: {
    clearAnswer: function() {
      this.answer = "";
    },
    onSubmit: function() {
      if (this.answer === this.question.english) {
        this.oldCorrect = this.question;
        this.random();
        this.fail = false;
      } else {
        this.fail = true;
      }
      this.clearAnswer();
    },
    random: function() {
      const min = (this.page - 1) * 10;
      const max = this.vocabulations.length - 1;
      const random = Math.floor(Math.random() * (max - min + 1)) + min;
      this.question = this.vocabulations[random];
    },
    focusAnswer: function() {
      this.$refs.answer.focus();
    },
  },
  async mounted() {
    this.focusAnswer();
    const vocabs = (await vocab.get()).val();
    for (let index in vocabs) {
      this.vocabulations.push(vocabs[index]);
    }

    this.random();
  },
  watch: {
    page: function() {
      this.random();
    },
  },
};
</script>
