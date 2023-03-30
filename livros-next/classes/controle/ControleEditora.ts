import Editora from "../modelo/Editora";

const editoras: Array<Editora> = [
  new Editora(1, "Editora 1"),
  new Editora(2, "Editora 2"),
  new Editora(3, "Editora 3"),
];

class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.filter(
      (editora) => editora.codEditora === codEditora
    );
    return editora[0] ? editora[0].nome : undefined;
  }
}

export default ControleEditora;
