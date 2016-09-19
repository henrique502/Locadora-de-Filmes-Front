
export default class Filme  {
  constructor(id, titulo, diretor, copias) {
    this.id = id;
    this.titulo = titulo;
    this.diretor = diretor;
    this.copias = copias;
  }

  getId(){
    return this.id;
  }

  getTitulo(){
    return this.titulo;
  }

  getDiretor(){
    return this.diretor;
  }

  getCopias(){
    return this.copias;
  }

  toString(){
    return this.titulo;
  }
}
