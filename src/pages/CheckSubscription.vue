<template>
  <q-page class="flex-center">
    <div class="q-pa-md">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Seu email *"
        hint="Digite seu email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor digite seu email']"
      />

      <div>
        <q-btn label="Checar inscrição" type="submit" color="primary"/>
      </div>
    </q-form>

  </div>
  </q-page>
</template>

<style>
</style>

<script>

export default {
  data () {
    return {
      name: null,
      age: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'fas fa-check-circle',
        message: 'Submitted'
      })
      this.$axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => {
        console.log(response)
      }).catch(e => {
        console.log('fail')
      })
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}

</script>
