export enum TipoNotificacao {
  SUCESSO,
  FALHA,
  ATENCAO,
}

export interface INotificacoes {
  id: number;
  texto: string;
  titulo: string;
  tipo: TipoNotificacao;
}
