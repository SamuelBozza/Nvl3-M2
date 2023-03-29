import { Editora } from "../modelo/Editora";

const editoras: Array<Editora> = [
  {
    codEditora: 1,
    nome: "Editora 1",
  },
  {
    codEditora: 2,
    nome: "Editora B",
  },
  {
    codEditora: 3,
    nome: "Editora C",
  },
];

class ControleEditora {
  private editoras: Array<Editora>;

  constructor() {
    this.editoras = editoras;
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : "";
  }
}

export default ControleEditora;
