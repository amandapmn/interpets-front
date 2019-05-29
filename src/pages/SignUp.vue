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
        label="Seu nome *"
        hint="Seu primeiro e segundo nome"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor digite seu nome']"
      />

      <q-input
        filled
        type="text"
        label="Seu email *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor digite seu email'
        ]"
      />

      <q-input
        filled
        type="text"
        label="Seu PET *"
        hint="Digite a sigla do seu PET"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Digite a sigla do seu PET'
        ]"
      />

      <q-toggle v-model="accept" label="Li e aceito os termos" />

      <div>
        <q-btn label="Enviar" type="submit" color="primary"/>
        <q-btn label="Fazer outra inscrição" type="reset" color="primary" flat class="q-ml-sm" />
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
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'Você precisa aceitar os termos!'
        })
      } else {
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
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}

</script>
