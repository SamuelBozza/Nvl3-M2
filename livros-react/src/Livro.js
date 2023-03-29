import { useState, useEffect } from "react";
import { controleLivro } from "./controle/livro";
import { controleEditora } from "./controle/editora";


function LinhaLivro(props) {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>
        <button onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
      <td>{livro.titulo}</td>
      <td>{livro.autor.join(", ")}</td>
      <td>{nomeEditora}</td>
    </tr>
  );
}

export default function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      controleLivro.obterLivros().then((livros) => {
        setLivros(livros);
        setCarregado(true);
      });
    }
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivro.excluirLivro(codigo).then(() => setCarregado(false));
  };

  return (
    <main>
      <h1>Lista de Livros</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Título</th>
            <th>Autor(es)</th>
            <th>Editora</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
}
