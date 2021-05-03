<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Pré-Sudeste 2021
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Pré-Sudeste 2021</q-item-label>
        <q-item clickable tag="a" target="_self" href="#/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label caption>Página inicial</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_self" href="#/GDTs">
          <q-item-section avatar>
            <q-icon name="assignment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>GDTs</q-item-label>
            <q-item-label caption>Veja os GDTs disponíveis no evento</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_self" href="#/SignUp">
          <q-item-section avatar>
            <q-icon name="person_add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Inscreva-se</q-item-label>
            <q-item-label caption>no Pré-Sudeste 2021</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_self" href="#/CheckSubscription">
          <q-item-section avatar>
            <q-icon name="how_to_reg" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Veja a sua inscrição</q-item-label>
            <q-item-label caption>Veja o status da sua inscrição</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_self" href="#/ConditionTerms">
          <q-item-section avatar>
            <q-icon name="message" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Termos de uso</q-item-label>
            <q-item-label caption>Seus dados estão seguros</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
