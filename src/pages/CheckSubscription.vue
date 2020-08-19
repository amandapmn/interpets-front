<template>
  <q-page class="flex-center">
    <div class="q-pa-md">

    <q-form
      @submit="onSubmit"
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
      <div class="row justify-center q-ma-md q-mt-lg">
        <div class="col-12 col-md-2 text-weight-bold">
          <p>Nome:</p>
        </div>
        <div class="col-12 col-md-4">
          <p>{{pessoa.nome}}</p>
        </div>
      </div>
      <div class="row justify-center q-ma-md">
        <div class="col-12 col-md-2 text-weight-bold">
          <p>Grupo:</p>
        </div>
        <div class="col-12 col-md-4">
          <p>{{pessoa.pet}}</p>
        </div>
      </div>
      <div class="row justify-center q-ma-md">
        <div class="col-12 col-md-2 text-weight-bold">
          <p>GDT:</p>
        </div>
        <div class="col-12 col-md-4">
          <p>{{pessoa.gdt.nome}}</p>
        </div>
      </div>
    </div>

  </div>
  </q-page>
</template>

<style>
p {
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0.2rem 0;
  font-size: 18px;
}
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
