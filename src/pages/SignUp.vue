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
        v-model="email"
        label="Seu email *"
        hint="Usado para enviar avisos, caso seja necessário"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor digite seu email'
        ]"
      />
      <q-input
        filled
        type="text"
        v-model="telefone"
        label="Seu telefone"
        hint="Digite seu telefone"
        mask="(##) ##### - ####"
      />
      <q-input
        filled
        type="text"
        v-model="pet"
        label="Seu PET *"
        hint="Digite o nome do seu PET como consta no SIGPET"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Digite o nome do seu PET como consta no SIGPET'
        ]"
      />
      <q-select
        square filled
        v-model="alimentacao"
        :options="options"
        label="Você possui alguma restrição alimentar?"
      />
      <q-toggle v-model="coffee" label="Estou ciente que o coffee possui o preço de 10R$" />
      <br>
      <q-toggle v-model="oficina" label="Pretendo participar de oficinas que vão começar a partir das 16h" />
      <br>
      <q-toggle v-model="accept" label="Li e aceito os termos de uso" />
      <div>
        <q-btn label="Enviar" type="submit" color="primary"/>
        <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
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
      telefone: null,
      coffee: null,
      oficina: null,
      alimentacao: null,
      name: null,
      email: null,
      pet: null,
      accept: false,
      options: [
        'Vegetariano', 'Vegano', 'Nenhuma'
      ]
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true || this.coffee !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'Você precisa aceitar estar ciente sobre o coffee e termos de uso!'
        })
      } else {
        this.$axios({
          method: 'post',
          url: 'https://interpets.petbcc.com.br/api/petiano/',
          data: {
            nome: this.name,
            email: this.email,
            pet: this.pet,
            telefone: this.telefone,
            oficina: this.oficina,
            restricao_alimentar: this.alimentacao
          }
        }).then(response => {
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'fas fa-check-circle',
            message: 'Inscrição feita'
          })
          this.$router.push('/Happy')
        }).catch(error => {
          this.$q.notify({
            color: 'red-4',
            textColor: 'white',
            icon: 'fas fa-check-circle',
            message: error.response.data['email']
          })
        })
      }
    },

    onReset () {
      this.name = null
      this.email = null
      this.pet = null
      this.accept = false
      this.telefone = null
      this.coffee = false
      this.oficina = false
      this.alimentacao = null
    }
  }
}

</script>
