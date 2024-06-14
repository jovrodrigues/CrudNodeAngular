export class Unidade {
    private _id?: number;
    private _sigla: string;
    private _descricao: string;
  
    constructor(sigla: string, descricao: string, id?: number) {
      this._sigla = sigla;
      this._descricao = descricao;
      this._id = id;
    }
  
    get id(): number | undefined {
      return this._id;
    }
    set id(value: number | undefined) {
      this._id = value;
    }
  
    get sigla(): string {
      return this._sigla;
    }
    set sigla(value: string) {
      this._sigla = value;
    }
  
    get descricao(): string {
      return this._descricao;
    }
    set descricao(value: string) {
      this._descricao = value;
    }
}