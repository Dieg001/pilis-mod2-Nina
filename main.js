function onClick (event) {
        event.preventDefault();
    this.style.backgroundColor = "black";
    console.log("click...");
    console.log(event);
  }
  
    const mensaje = {
      solicitante: document.getElementById('solicitante').value,
      cuit: document.getElementById('cuit').value,
      email: document.getElementById('email').value,
      telefono: document.getElementById('telefono').value
    }
console.log(mensaje);

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(mensaje),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => { 
        console.log(json);
        Swal.fire(
            'Enviado',
            'Gracias por tu comentario',
            'success'
        );
        cleanForm();})

        .catch((err) => console.log(err));

        let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);