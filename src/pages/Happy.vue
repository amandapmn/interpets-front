<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/happy.png"
        style="width:30vw;max-width:150px;"
      >
    </p>
    <p class="text-faded"><strong>Inscrição feita com sucesso!</strong></p>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/')"
    >Voltar</q-btn>
  </div>
</template>

<script>
export default {
  name: 'Happy'
}
</script>
