function hotel (textoinicio, textocierre, opciones) {
	
	let mensaje = '';
	
	mensaje += textoinicio + "\n\n";
	
	for (const opcion of opciones) {
		mensaje += opcion.codigo + ". " + opcion.habitacion + ": $ " + opcion.precio + "\n" + " Personas a hospedar: "  + opcion.cantPersonas + "\n";
	}
		
	mensaje += "\n" + textocierre;
	
	let habitacion = 0
	
	do {
		
		habitacion = Number(prompt(mensaje));
		
		if (habitacion !== 0) {
			
			let habitacionSel = false;
		
			for (const opcion of opciones) {
				if (opcion.codigo == habitacion) {
					habitacionSel = opcion;
				}
			}

			if (habitacion >=1 && habitacion <= 9) {
				alert("Usted eligió la habitación " + habitacionSel.habitacion)	
				let total = parseFloat(habitacionSel.precio);
				alert("Total a pagar: $ " + total + "\n\n" + cierre);
				

			} else {
				alert("Opción inválida");
			}

		}
		
	} while (habitacion !== 0);
	
}
function saludar() { 
	nombre = prompt("Ingrese su nombre").toLocaleUpperCase()
	alert("HOLA " + nombre)
}