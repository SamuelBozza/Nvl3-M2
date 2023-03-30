import Livro from "../modelo/Livro";

var livros: Array<Livro> = [
  {
    codigo: 1,
    codEditora: 1,
    titulo: "Titulo 1",
    resumo: "Resumo 1",
    autores: ["Autor 1", "Autor 2"],
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: "Titulo 2",
    resumo: "Resumo 2",
    autores: ["Autor 1"],
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: "Titulo 3",
    resumo: "Resumo 3",
    autores: ["Autor 1", "Autor 2"],
  },
];

export default class ControleLivro {
  livros = livros;

  obterLivros() {
    return livros;
  }
  incluir(livro: Livro) {
    try {
      var codigo: number = this.livros.length - 1;
      livro.codigo = this.livros[codigo].codigo + 1;
      this.livros.push(livro);
    } catch {
      livro.codigo = 1;
      this.livros.push(livro);
    }
  }
  excluir(num: Number) {
    var livroEncontrado = this.livros.findIndex((livro: Livro) => {
      return num === livro.codigo;
    });
    this.livros.splice(livroEncontrado, 1);
  }
}
