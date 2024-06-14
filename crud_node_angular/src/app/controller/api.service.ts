import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subgrupo } from '../model/subgrupo';
import { Grupo } from '../model/grupo';
import { Produto } from '../model/produto';
import { Marca } from '../model/marca';
import { Unidade } from '../model/unidade';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }
  getDados(): Observable<any> { return this.http.get<any>(`${this.apiUrl}/produto_geral`); }


  getGrupo(): Observable<Grupo[]> { return this.http.get<Grupo[]>(`${this.apiUrl}/produto_grupo`); }
  postGrupo(data : Grupo): Observable<Grupo> { return this.http.post<Grupo>(`${this.apiUrl}/produto_grupo`, data); }
  putGrupo(id : any, data: any) { return this.http.put<any>(`${this.apiUrl}/produto_grupo/${id}`, data); }
  deleteGrupo(id : any) { return this.http.delete(`${this.apiUrl}/produto_grupo/${id}`); }

  
  getSubgrupo(): Observable<Subgrupo[]> { return this.http.get<Subgrupo[]>(`${this.apiUrl}/produto_subgrupo`); }
  postSubgrupo(data : any): Observable<Subgrupo> { return this.http.post<Subgrupo>(`${this.apiUrl}/produto_subgrupo`, data); }
  putSubgrupo(id : any, data: any) { return this.http.put<any>(`${this.apiUrl}/produto_subgrupo/${id}`, data); }
  deleteSubgrupo(id : any) { return this.http.delete(`${this.apiUrl}/produto_subgrupo/${id}`); }


  getMarca(): Observable<Marca[]> { return this.http.get<Marca[]>(`${this.apiUrl}/produto_marca`); }
  postMarca(data : Marca): Observable<Marca> { return this.http.post<Marca>(`${this.apiUrl}/produto_marca`, data); }
  putMarca(id : any, data: any) { return this.http.put<any>(`${this.apiUrl}/produto_marca/${id}`, data); }
  deleteMarca(id : any) { return this.http.delete(`${this.apiUrl}/produto_marca/${id}`); }


  getProdutos(): Observable<Produto[]> { return this.http.get<Produto[]>(`${this.apiUrl}/produto`); }
  postProdutos(data : any): Observable<Produto> { return this.http.post<Produto>(`${this.apiUrl}/produto`, data); }
  putProdutos(id : any, data: any) { return this.http.put<any>(`${this.apiUrl}/produto/${id}`, data); }
  deleteProdutos(id : any) { return this.http.delete(`${this.apiUrl}/produto/${id}`); }


  getUnidades(): Observable<Unidade[]> { return this.http.get<Unidade[]>(`${this.apiUrl}/produto_unidade`); }
  postUnidades(data : Unidade): Observable<Unidade> { return this.http.post<Unidade>(`${this.apiUrl}/produto_unidade`, data); }
  putUnidades(id : any, data: any) { return this.http.put<any>(`${this.apiUrl}/produto_unidade/${id}`, data); }
  deleteUnidades(id : any) { return this.http.delete(`${this.apiUrl}/produto_unidade/${id}`); }
}
