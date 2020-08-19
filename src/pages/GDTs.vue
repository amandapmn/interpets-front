<template>
  <q-page>
    <h3 class="text-center">Grupos de Discussão e Trabalho (GDTs)</h3>
    <div v-for="gdt in gdts" :key="gdt.id" class="row texto">
      <div class="col">
        <h5>{{ gdt.nome }}</h5>
        <p>{{ gdt.descricao }}</p>
      </div>
    </div>
  </q-page>
</template>

<style>
.texto {
  padding: 0 5%;
  font-size: 20px;
  border-width: medium;
  border-color: black;
}
h5 {
    font-weight: 500;
}
</style>

<script>
export default {
  data () {
    return {
      gdts: []
    }
  },

  created () {
    this.$axios
      .get('https://petbcc.ufscar.br/petufscar/api/gdt/')
      .then((res) => {
        this.gdts = res.data
      })
  }
}
</script>
