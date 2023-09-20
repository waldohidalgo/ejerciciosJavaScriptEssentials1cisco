const data = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  { name: "Helen Richards", phone: "0800 1111", email: "libero@convallis.edu" },
];

function showContact(data, index) {
  if (data instanceof Array) {
    return `${data[index].name}-${data[index].phone}-${data[index].email}`;
  }
}
function showAllContacts(data) {
  if (data instanceof Array) {
    const arrayContacto = data.map((objeto) => {
      return `${objeto.name}/${objeto.phone}/${objeto.email}`;
    });
    alert(`Los contactos son:${arrayContacto.join(",")}`);
  }
}

function addNewContact(data, nombre, phone, email) {
  if (
    data instanceof Array &&
    nombre.length > 0 &&
    phone.length > 0 &&
    email.length > 0
  ) {
    data.push({
      name: nombre,
      phone,
      email,
    });
  } else {
    alert(
      "Has ingresado data inválida y la agregación no se ha realizado por dicho motivo"
    );
  }
}

function sorting(data) {
  const tipo = prompt(
    'Ingresa el atributo por el cual deseas ordenar: "name","phone","email" (Si deseas salir, escribe "quit")'
  );
  if (tipo == "quit") {
    return "quit";
  }
  if (tipo == "name" || tipo == "phone" || tipo == "email") {
    data.sort((a, b) => {
      if (a[tipo] < b[tipo]) {
        return -1;
      }
      if (a[tipo] > b[tipo]) {
        return 1;
      }
      return 0;
    });
  }
}

const consulta = (nombre, phone, email) => {
  const request = prompt(
    'Escribe "first" si deseas mostrar el primer contacto.\n Escribe "last" si deseas mostrar el último contacto. \n Escribe "new" si deseas agregar un nuevo contacto. \n Escribe "all" si deseas mostrar todos los contactos. (Si deseas salir, escribe "quit") \n Escribe "sort" si deseas ordenar la data por alguno de los campos siguientes: name, phone, email'
  );
  if (request == "quit") {
    return "quit";
  }

  switch (request) {
    case "first": {
      alert(`El primer contacto es: ${showContact(data, 0)}`);
      break;
    }
    case "last": {
      const indexLastElement = data.length - 1;
      alert(`El último contacto es: ${showContact(data, indexLastElement)}`);
      break;
    }
    case "all": {
      showAllContacts(data);
      break;
    }
    case "new": {
      addNewContact(data, nombre, phone, email);
      break;
    }
    case "sort": {
      sorting(data);
      break;
    }
    default: {
      alert("La selección ingresada no es válida");
    }
  }
};

while (true) {
  const nombre = prompt("Ingresa tu nombre. (Si deseas salir, escribe 'quit')");
  if (nombre == "quit") {
    break;
  }
  const phone = prompt(
    "Ingresa tu telefono. (Si deseas salir, escribe 'quit')"
  );
  if (phone == "quit") {
    break;
  }
  const email = prompt("Ingresa tu email. (Si deseas salir, escribe 'quit')");
  if (email == "quit") {
    break;
  }

  const request = consulta(nombre, phone, email);
  if (request == "quit") {
    break;
  }
  const continuar = confirm("¿Deseas continuar?");
  if (!continuar) {
    break;
  }
}
