<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuroAtivo }"
  >
    <!-- caso o modoEscuroAtivo for true ele adiciona a classe 'modo-escuro'-->
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <Notificacoes />
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Notificacoes from "./components/Notificacoes.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Notificacoes,
  },
  data() {
    return {
      modoEscuroAtivo: false,
    };
  },
  methods: {
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    },
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primario: #fff;
  --text-primario: #000;
}

main.modo-escuro {
  --bg-primario: #1a0735;
  --text-primario: #ddd;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
