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
      name: null
    }
  },

  methods: {
    onSubmit () {
      this.$axios.get('https://petbcc.ufscar.br/petufscar/api/petiano/?email=' + this.name).then(response => {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'done',
          message: 'Você já está inscrito'
        })
      }).catch(e => {
        this.$q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'error',
          message: 'Erro, inscrição não encontrada'
        })
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
