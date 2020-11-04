import DetallesPersonajes from "./DetallesPersonajes.js";

(async function llamadoPersonajes() {
  let contenedorPersonajes = [];
  const url = "https://rickandmortyapi.com/api/character/";
  const mostrarPersonaje = document.getElementById("personaje");

  const getData = async () => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      contenedorPersonajes = data.results;
      getDataPersona();
      infoGeneral();
      return contenedorPersonajes;
    } catch (e) {
      console.log(e);
    }
  };

  getData();

  const getDataPersona = async () => {
    let allPersonajes = [];

    contenedorPersonajes.forEach(async (e) => {
      let response = await fetch(url + e.id);
      let data = await response.json();
      let datos = await data;
      allPersonajes.push(
        new DetallesPersonajes(
          datos.id,
          datos.name,
          datos.status,
          datos.species,
          datos.gender,
          datos.created,
          datos.origin,
          datos.location,
          datos.episode,
          datos.image
        )
      );
    });
    return allPersonajes;
  };

  let infoGeneral = () => {
    contenedorPersonajes.forEach((e, i) => {
      mostrarPersonaje.innerHTML += `<img src="${e.image}" data-toggle="modal" data-target="#exampleModal${e.id}" alt="" class ="col-md-2"> <ul><li><span>${e.id}</span></li>
    <li><span>${e.species}</span></li></ul> 

    
<!-- Modal -->
<div class="modal fade" id="exampleModal${e.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <p>id: ${e.id}</p>
      <p>Nombre: ${e.name}</p>
      <p>Genero: ${e.gender}</p>
      <p>Especie: ${e.species}</p>
      <p>Status: ${e.status}</p>
      <p>Creado: ${e.created}</p>
      <p>Origen: ${e.origin.name}</p>
      <p>Cantidad de Episodios: ${e.episode.length}</p>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    
`;
    });
  };
})();
