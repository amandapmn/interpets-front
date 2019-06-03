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
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor digite seu email'
        ]"
      />

      <q-input
        filled
        type="text"
        v-model="pet"
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
      email: null,
      pet: null,
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
        this.$axios({
          method: 'post',
          url: '/api/petiano/',
          data: {
            nome: this.name,
            email: this.email,
            pet_sigla: this.pet,
            pet_extenso: this.pet + 'UFSCar'
          }
        }).then(response => {
          this.name = null
          this.email = null
          this.pet = null
          this.accept = false
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'fas fa-check-circle',
            message: 'Inscrição feita'
          })
        }).catch(error => {
          console.log(error)
          this.$q.notify({
            color: 'red-4',
            textColor: 'white',
            icon: 'fas fa-check-circle',
            message: error
          })
        })
      }
    },

    onReset () {
      this.name = null
      this.email = null
      this.pet = null
      this.accept = false
    }
  }
}

</script>
