function agregarTarea(){

	var ingresoTarea = document.getElementById('tareas').value;

	if(ingresoTarea == "" || ingresoTarea == null){
		alert("Error, ingresa una tarea válida");
		return; 
	}

	// crear los nodos necesarios
	// asignar cada nodo con su hijo
	//añadir el row al HTML

	var divRow = document.createElement("div");

	var divCol = document.createElement("div");

	var divChecklist = document.createElement("div");

	var ticket	= document.createElement("input");

	var spanTarea = document.createElement("span");

	var textoTarea = document.createTextNode(ingresoTarea);

	var iconTrash = document.createElement("i");

	var iconHeart = document.createElement("i");


	//se agregan las clases a los nuevos elementos creados

	divRow.classList.add("row");

	divCol.classList.add("col-xs-16", "col-ms-16", "col-md-16");

	divChecklist.classList.add("cheklist");

	ticket.setAttribute("type","checkbox");

	iconHeart.classList.add("fa","fa-heart","pull-right","iconos");

	iconTrash.classList.add("fa","fa-trash","pull-right","iconos");

	//asigno cada nodo con su hijo

	spanTarea.appendChild(textoTarea);

	divChecklist.appendChild(ticket);

	divChecklist.appendChild(spanTarea);

	divChecklist.appendChild(iconHeart);

	divChecklist.appendChild(iconTrash);

	divCol.appendChild(divChecklist);

	divRow.appendChild(divCol);


	var contenedorTareas = document.getElementById("contenedorTareas");
	contenedorTareas.appendChild(divRow);




	//Si checkbox está tickeado añadir rayita-encima al span
	ticket.addEventListener('click', function(){
		spanTarea.classList.toggle('rayita-encima');
	})

	//para colorear el corazón
	iconHeart.addEventListener('click', function(){
		iconHeart.classList.toggle('corazon');
	})

	//para borrar trea presionando basurero
	iconTrash.addEventListener('click', )
}



