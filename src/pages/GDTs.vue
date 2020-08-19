<template>
  <q-page>
    <h3 class="text-center">Grupos de Discussão e Trabalho (GDTs)</h3>
    <div v-for="gdt in gdts" :key="gdt.id" class="row texto">
      <div class="col">
        <h5>{{ gdt.nome }}</h5>
        <h6 v-if="gdt.quantidade_vagas > 1">{{ gdt.quantidade_vagas }} vagas disponíveis</h6>
        <h6 v-if="gdt.quantidade_vagas === 1">{{ gdt.quantidade_vagas }} vaga disponível</h6>
        <h6 v-if="gdt.quantidade_vagas === 0" class="red">Esgotado</h6>
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
    margin-block-end: 0;
}

h6 {
  font-weight: 400;
  font-size: 17px;
  color: #000a;
  margin-block-start: 0;
}

.red {
  color: #f00c;
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
