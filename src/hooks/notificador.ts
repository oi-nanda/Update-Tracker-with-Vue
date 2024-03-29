import { TipoNotificacao } from "@/interfaces/INotificacao";
import { store } from "@/store";
import { NOTIFICAR } from "@/store/tipo-mutacoes";

type Notificador = {
  notificar: (tipo: TipoNotificacao, titulo: string, texto: string) => void;
};

export default (): Notificador => {
  const notificar = (
    tipo: TipoNotificacao,
    texto: string,
    titulo: string
  ): void => {
    store.commit(NOTIFICAR, {
      titulo,
      texto,
      tipo,
    });
  };

  return {
    notificar,
  };
};
