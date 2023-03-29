import { Livro } from "../modelo/Livro";

const livros: Array<Livro> = [
  {
    codigo: 1,
    titulo: "Livro 1",
    autores: ["Autor 1"],
    resumo: "Resumo 1",
    codEditora: 1,
  },
  {
    codigo: 2,
    titulo: "Livro 2",
    autores: ["Autor 2"],
    resumo: "Resumo 2",
    codEditora: 2,
  },
  {
    codigo: 3,
    titulo: "Livro 3",
    autores: ["Autor 3"],
    resumo: "Resumo 3",
    codEditora: 3,
  },
];

export default class ControleLivros {
  private livros: Array<Livro>;

  constructor() {
    this.livros = livros;
  }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const codigo =
      this.livros.reduce((max, l) => (l.codigo > max ? l.codigo : max), 0) + 1;
    this.livros.push({
      ...livro,
      codigo,
    });
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex((l) => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}