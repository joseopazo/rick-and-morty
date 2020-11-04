export default class Personajes {
  constructor(id) {
    let _id = id;
    this.getId = () => _id;
    this.setId = (newId) => (_id = newId);
  }
  get Id() {
    return this.getId();
  }

  set Id(newId) {
    this.setId(newId);
  }
}
