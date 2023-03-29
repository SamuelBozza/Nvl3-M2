export class Livro {
  constructor(
    public codigo: number,
    public codEditora: number,
    public titulo: string,
    public resumo: string,
    public autores: string[]
  ) {
    this.codigo = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}
