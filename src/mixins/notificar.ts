import { TipoNotificacao } from "@/interfaces/INotificacao";
import { NOTIFICAR } from "@/store/tipo-mutacoes";
import { store } from "@/store/index";
export const notificacaoMixin = {
  methods: {
    notificar(tipo: TipoNotificacao, texto: string, titulo: string): void {
      store.commit(NOTIFICAR, {
        titulo,
        texto,
        tipo,
      });
    },
  },
};
