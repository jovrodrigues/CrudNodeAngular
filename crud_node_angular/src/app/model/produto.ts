export class Produto {
    private _id?: number;
    private _id_produto_subgrupo: number;
    private _id_produto_marca: number;
    private _id_produto_unidade: number;
    private _nome: string;
    private _gtln: string;
    private _valor: number;
    private _data_cadastro: string;
  
    constructor(
      id_produto_subgrupo: number,
      id_produto_marca: number,
      id_produto_unidade: number,
      nome: string,
      gtln: string,
      valor: number,
      data_cadastro: string,
      id?: number
    ) {
      this._id = id;
      this._id_produto_subgrupo = id_produto_subgrupo;
      this._id_produto_marca = id_produto_marca;
      this._id_produto_unidade = id_produto_unidade;
      this._nome = nome;
      this._gtln = gtln;
      this._valor = valor;
      this._data_cadastro = data_cadastro;
    }
  
    get id(): number | undefined {
      return this._id;
    }
    set id(value: number | undefined) {
      this._id = value;
    }
  
    get id_produto_subgrupo(): number {
      return this._id_produto_subgrupo;
    }
    set id_produto_subgrupo(value: number) {
      this._id_produto_subgrupo = value;
    }
  
    get id_produto_marca(): number {
      return this._id_produto_marca;
    }
    set id_produto_marca(value: number) {
      this._id_produto_marca = value;
    }
  
    get id_produto_unidade(): number {
      return this._id_produto_unidade;
    }
    set id_produto_unidade(value: number) {
      this._id_produto_unidade = value;
    }
  
    get nome(): string {
      return this._nome;
    }
    set nome(value: string) {
      this._nome = value;
    }
  
    get gtln(): string {
      return this._gtln;
    }
    set gtln(value: string) {
      this._gtln = value;
    }
  
    get valor(): number {
      return this._valor;
    }
    set valor(value: number) {
      this._valor = value;
    }
  
    get data_cadastro(): string {
      return this._data_cadastro;
    }
    set data_cadastro(value: string) {
      this._data_cadastro = value;
    }
  }
  