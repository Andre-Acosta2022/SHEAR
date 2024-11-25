


function uploadFile(event) {
    var file = event.target.files[0];
    if (file) {
      if (file.type === "application/pdf") {
        alert("Archivo PDF seleccionado: " + file.name);
      } else {
        alert("Por favor, selecciona un archivo en formato PDF.");
        event.target.value = "";
      }
    }
  }s