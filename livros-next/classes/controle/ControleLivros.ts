import Livro from "../modelo/Livro";

const livros: Array<Livro> = [
  new Livro(1, 1, "Titulo 1", "Resumo 1", ["Autor 1"]),
  new Livro(2, 2, "Titulo 2", "Resumo 2", ["Autor 2"]),
  new Livro(3, 3, "Titulo 3", "Resumo 3", ["Autor 3", "Autor4"]),
];

class ControleLivro {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    const codigo =
      livros.reduce(
        (max, livro) => (livro.codigo > max ? livro.codigo : max),
        0
      ) + 1;
    livro.codigo = codigo;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = livros.findIndex((livro) => livro.codigo === codigo);
    if (indice >= 0) {
      livros.splice(indice, 1);
    }
  }
}

export default ControleLivro;
