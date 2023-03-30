import Editora from "../modelo/Editora";

var editoras: Array<Editora> = [
  {
    codEditora: 1,
    editora: "Editra1",
  },
  {
    codEditora: 2,
    editora: "Editora 2",
  },
  {
    codEditora: 3,
    editora: "Editora 3",
  },
];

export default class ControleEditora {
  editoras = editoras;
  getNomeEditora(codigoEditora: number) {
    let editora: Editora[] = this.editoras.filter((editora: Editora) => {
      return editora.codEditora === codigoEditora;
    });
    return editora[0].editora;
  }

  getEditoras() {
    return this.editoras;
  }
}
