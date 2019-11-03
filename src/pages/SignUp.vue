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

      <q-select
        filled
        v-model="pet"
        :options="pets"
        label="Selecione o seu PET"
        :rules="[
          val => val !== null && val !== '' || 'Selecione o seu PET'
        ]"
      />

      <q-select
        square filled
        v-model="alimentacao"
        :options="options"
        label="Você possui alguma restrição alimentar?"
      />
      <q-toggle v-model="coffee" label="Estou ciente de que a inscrição tem o valor de 12 reais referentes a dois coffees" />
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
      alimentacao: null,
      name: null,
      email: null,
      pet: null,
      accept: false,
      options: [
        'Vegetariano', 'Vegano', 'Nenhuma'
      ],
      pets: [
        'PET Agroecologia',
        'PET Ambiental',
        'PET Biblioteconomia e Ciência da Informação',
        'PET Biologia',
        'PET Ciência da Computação',
        'PET Economia Solidária',
        'PET Engenharia Civil',
        'PET Engenharia da Computação',
        'PET Engenharia de Produção',
        'PET Engenharia Química',
        'PET Estatística',
        'PET Indígenas',
        'PET Licenciatura em Física',
        'PET Matemática',
        'PET Química (Araras)',
        'PET Química (São Carlos)',
        'PET Saúde',
        'PET Usina de Reflexão',
        'Outro'
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
      this.alimentacao = null
    }
  }
}

</script>
