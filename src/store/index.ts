import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import {
  ADICIONA_PROJETO,
  ALTERA_PROJETO,
  EXCLUIR_PROJETO,
  NOTIFICAR,
} from "./tipo-mutacoes";
import { INotificacoes } from "@/interfaces/INotificacao";

interface Estado {
  projetos: IProjeto[];
  notificacoes: INotificacoes[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [],
    notificacoes: [],
  },
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto,
      } as IProjeto;
      state.projetos.push(projeto);
    },
    [ALTERA_PROJETO](state, projeto: IProjeto) {
      const index = state.projetos.findIndex((proj) => proj.id == proj.id);
      state.projetos[index] = projeto;
    },
    [EXCLUIR_PROJETO](state, id: string) {
      state.projetos = state.projetos.filter((proj) => proj.id != id);
    },
    [NOTIFICAR](state, novaNotificacao: INotificacoes) {
      novaNotificacao.id = new Date().getTime();
      state.notificacoes.push(novaNotificacao);

      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(
          (not) => not.id != novaNotificacao.id
        );
      }, 3000);
    },
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
