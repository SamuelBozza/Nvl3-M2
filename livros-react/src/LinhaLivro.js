import React, { useState, useEffect, useMemo } from 'react';
import ControleLivros from './controle/ControleLivro';
import ControleEditora from './controle/ControleEditora';
import LinhaLivro from './LinhaLivro';
import { Livro } from './modelo/Livro';

export default function LivroLista() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  const controleLivro = useMemo(() => new ControleLivros(), []);
  const controleEditora = new ControleEditora();

  useEffect(() => {
    if (!carregado) {
      async function obterLivros() {
        const listaLivros = await controleLivro.getLivros();
        setLivros(listaLivros);
        setCarregado(true);
      }
      obterLivros();
    }
  }, [carregado, controleLivro]);

  const excluir = (codLivro: number) => {
    controleLivro.excluir(codLivro);
    setCarregado(false);
  };

  return (
    <main>
      <h1>Livros</h1>
      <table>
        <thead>
          <tr>
            <th>Excluir</th>
            <th>Código</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Editora</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro
              livro={livro}
              excluir={() => excluir(livro.codigo)}
              nomeEditora={controleEditora.getNomeEditora(livro.codEditora)}
              key={livro.codigo}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}
