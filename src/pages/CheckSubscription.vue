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
        v-model="email"
        label="Seu email *"
        hint="Digite seu email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor digite seu email']"
      />

      <div>
        <q-btn label="Checar inscrição" type="submit" color="primary"/>
      </div>
    </q-form>

    <div v-if="this.pessoa">
      <h4>{{pessoa.nome}}</h4>
      <h4>{{pessoa.pet}}</h4>
      <h4 v-if="pessoa.gdt">GDT: {{pessoa.gdt}}</h4>
    </div>

  </div>
  </q-page>
</template>

<style>
</style>

<script>

export default {
  data () {
    return {
      email: null,
      pessoa: null
    }
  },

  methods: {
    onSubmit () {
      this.$axios.get('https://petbcc.ufscar.br/petufscar/api/petiano/?email=' + this.email).then(response => {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'done',
          message: 'Você já está inscrito'
        })
        this.pessoa = response.data
      }).catch(e => {
        this.$q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'error',
          message: 'Erro, inscrição não encontrada'
        })
      })
    }
  }
}

</script>
