<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">UUID v4 衝突シミュレーター</v-card-title>
        <v-card-text>
          <p>{{ first }}に衝突するまで</p>
          <p>{{ current }}</p>
          <p>試行回数: {{ tryCount }}</p>
          <p id="conflict_message" v-if="isConflict">衝突！</p>
        </v-card-text>

        <v-card-actions>
          <v-radio-group v-model="speed" @change="onChangeSpeed">
            <v-radio :value="0" label="高速" />
            <v-radio :value="100" label="中速" />
            <v-radio :value="500" label="低速" />
            <v-radio :value="1000" label="超低速" />
          </v-radio-group>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  data() {
    return {
      first: null,
      current: null,
      tryCount: 0,
      speed: 100,
      interval: null,
      isConflict: false
    }
  },
  mounted() {
    this.first = uuidv4()

    this.start()
  },
  methods: {
    start() {
      this.interval = setInterval(() => {
        this.current = uuidv4()
        this.tryCount += 1

        // eslint-disable-next-line no-self-compare
        if (this.first === this.current) {
          this.conflict()
        }
      }, this.speed)
    },
    onChangeSpeed() {
      clearInterval(this.interval)
      this.start()
    },
    conflict() {
      clearInterval(this.interval)
      this.isConflict = true
    }
  }
}
</script>

<style scoped>
#conflict_message {
  font-size: large;
  color: orangered;
}
</style>
