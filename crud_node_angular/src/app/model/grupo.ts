export class Grupo {
    private _id?: number;
    private _nome: string;
    private _descricao: string;
  
    constructor(nome: string, descricao: string, id?: number) {
      this._nome = nome;
      this._descricao = descricao;
      this._id = id;
    }
  
    get id(): number | undefined {
      return this._id;
    }
    set id(value: number | undefined) {
      this._id = value;
    }
  
    get nome(): string {
      return this._nome;
    }
    set nome(value: string) {
      this._nome = value;
    }
  
    get descricao(): string {
      return this._descricao;
    }
    set descricao(value: string) {
      this._descricao = value;
    }
  }
  