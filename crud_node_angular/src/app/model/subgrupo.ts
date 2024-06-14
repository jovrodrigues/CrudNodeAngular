export class Subgrupo {
    private _id?: number;
    private _id_produto_grupo: number;
    private _nome: string;
    private _descricao: string;
  
    constructor(id_produto_grupo: number, nome: string, descricao: string, id?: number) {
      this._id_produto_grupo = id_produto_grupo;
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

    get id_produto_grupo(): number {
      return this._id_produto_grupo;
    }
    set id_produto_grupo(value: number) {
      this._id_produto_grupo = value;
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
  