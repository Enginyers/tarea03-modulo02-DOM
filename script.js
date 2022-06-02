const containerInfo = document.querySelector(".gallery-container");

for (let i = 0; i < 12; i++) {
  //creo el elemento que contendra la img y los h2,h3
  const newColumn = document.createElement("div");
  newColumn.classList.add("items" + i);

  const newImage = document.createElement("img");
  const newTitle = document.createElement("h2");
  const newSubTitle = document.createElement("h3");

  //solicito la info al usuario
  let titulo = prompt("Por favor ingresa el titulo de la imagen " + (i + 1));
  let subtitulo = prompt("Por favor ingresa subtitulo de la imagen " + (i + 1));
  let imageUsuario = prompt("Por favor ingresa la imagen - url " + (i + 1));

  newImage.setAttribute("src", imageUsuario);
  newImage.setAttribute("alt", `${titulo} titulo `);

  newImage.classList.add("img");
  newTitle.classList.add("titulo");
  newTitle.textContent = `${titulo} `;
  newSubTitle.textContent = `${subtitulo} `;
  newSubTitle.classList.add("subtitulo");

  // inserto los datos en el dom
  newColumn.appendChild(newImage);
  newColumn.appendChild(newTitle);
  newColumn.appendChild(newSubTitle);
  containerInfo.appendChild(newColumn);
}

//console.log(containerInfo);
