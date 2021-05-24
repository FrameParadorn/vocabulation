<template>
  <v-app>
    <v-app-bar app color="#4DBA87" dark>
      <h1>Vocabulation</h1>
      <v-spacer></v-spacer>
      <h3>Score: {{ score.current }} | Max : {{ score.max }}</h3>
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

        <v-row class="mt-5" >
          <v-col>
            <v-btn elevation="2" large @click="random"
              >Re-random</v-btn
            >
          </v-col>
          <v-col>
            <v-text-field
              type="number"
              :min="maxNotRepeat"
              v-model="maxWordOfPage"
              required
              label="จำนวนคำที่จะนำมาสุ่มต่อ 1 หน้า"
            />
          </v-col>
          <v-spacer />
        </v-row>

        <h1 class="mt-10">คำที่ถูกก่อนหน้า</h1>
        <h3 class="success--text" v-if="!!oldCorrect.thai">
          {{ oldCorrect.thai }} : {{ oldCorrect.english }}
        </h3>
        <v-pagination
          v-model="page"
          :length="Math.ceil(vocabulations.length / ( maxWordOfPage || 1))"
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
      maxWordOfPage: 10,
      maxNotRepeat: 3,
      question: {},
      lastQuestion: [],
      answer: "",
      oldCorrect: {},
      vocabulations: [],
      score: {
        current: 0,
        max: 0,
      },
    };
  },
  methods: {
    clearAnswer: function() {
      this.answer = "";
    },
    cleanWord(word) {
      word = word.trim();
      word = word.replaceAll("-", "");
      word = word.toLowerCase();
      word = word.split(" ");
      word = word.join("");
      return word;
    },
    onSubmit: function() {
      if (
        this.cleanWord(this.answer) === this.cleanWord(this.question.english)
      ) {
        this.oldCorrect = this.question;
        this.random();
        this.fail = false;
        this.score.current++;
        if (this.score.current > this.score.max) {
          this.score.max = this.score.current;
        }
      } else {
        this.fail = true;
        this.score.current = 0;
      }
      this.clearAnswer();
    },
    addLastQuestion: function(question) {
      this.lastQuestion.push(question.english);
      if (this.lastQuestion.length > this.maxNotRepeat) {
        this.lastQuestion.shift();
      }
    },
    hasLastQuestion: function(newQuestion) {
      const result = this.lastQuestion.find(
        (question) => question === newQuestion.english,
      );
      return !!result;
    },
    random: function() {
      const limit = this.maxWordOfPage;
      const min = (this.page - 1) * limit;
      const max = parseInt(min + limit);
      const random = Math.floor(Math.random() * (max - min + 1)) + min;
      this.question = this.vocabulations[random];
      if (this.hasLastQuestion(this.question)) {
        this.random();
      } else {
        this.addLastQuestion(this.question);
      }
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
    maxWordOfPage: function() {
      if(this.maxWordOfPage < this.maxNotRepeat) {
        this.maxWordOfPage = this.maxNotRepeat
      }
    }
  },
};
</script>
