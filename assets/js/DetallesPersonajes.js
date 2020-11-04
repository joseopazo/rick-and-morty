import Personajes from "./personajes.js";

class DetallesPersonajes extends Personajes {
  constructor(
    id,
    name,
    status,
    species,
    gender,
    created,
    origin,
    location,
    episode,
    image
  ) {
    super(id);
    this.name = () => name;
    this.status = () => status;
    this.species = species;
    this.gender = gender;
    this.created = created;
    this.origin = origin;
    this.location = location;
    this.episode = episode;
    this.image = image;
  }

  get nombre() {
    return this.name();
  }
  get estatus() {
    return this.status();
  }
  get especies() {
    return this.species;
  }
  get cosa() {
    return this.gender;
  }

  set nombre(name) {
    this.name(name);
  }
  set estatus(status) {
    this.status(status);
  }
  set especies(species) {
    this.species = species;
  }
  set cosa(gender) {
    this.gender = gender;
  }
}

export default DetallesPersonajes;
