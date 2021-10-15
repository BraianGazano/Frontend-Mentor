
let listaItems = document.querySelectorAll("li");


function actualizarLista() {
  listaItems = document.querySelectorAll("li");
  let listaItemsCompletados = document.querySelectorAll(".completado")
  let itemsRemovidos = document.querySelectorAll(".removido")
  let listaItemsRestantes = document.getElementById("itemsRestantes")
  let itemsRestantes = (listaItems.length - listaItemsCompletados.length) - itemsRemovidos.length
  listaItemsRestantes.innerText = `${itemsRestantes}`
  localStorage.setItem("Tareas",JSON.stringify(listaItems));
}
actualizarLista()


for (let i = 0; i < listaItems.length; i++) {
  let img = document.createElement("IMG")
  img.src = "images/icon-cross.svg"
  img.alt = "CROSS"
  img.className = "cerrar"
  listaItems[i].appendChild(img)
}


function removerItemsCompletados(){
  let botonCerrar = document.getElementsByClassName("cerrar")
  for (let j = 0; j < botonCerrar.length; j++) {
    botonCerrar[j].onclick = function(){
      let div = this.parentElement;
      div.classList.add("removido")
      div.classList.remove("completado")
      actualizarLista()
    }     
  }
}
removerItemsCompletados()


let listaEntera = document.querySelector('ul');
listaEntera.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('completado');
    actualizarLista()
  }
});


let nuevaTarea = document.getElementById("tarea")
nuevaTarea.addEventListener('click', function(){
  if (nuevaTarea.value !== "") {
    let li = document.createElement("LI")
    li.textContent = nuevaTarea.value
    listaEntera.appendChild(li)
    let img = document.createElement("IMG")
    img.src = "images/icon-cross.svg"
    img.alt = "CROSS"
    img.className = "cerrar"
    li.appendChild(img)
    removerItemsCompletados()
    nuevaTarea.value = ""
    actualizarLista()
    slist("listaElementos")
    localStorage.setItem("Tareas", JSON.stringify(listaItems));
  }
})

nuevaTarea.addEventListener('keypress', function(e){
  if (e.key === 'Enter') {
    let li = document.createElement("LI")
    li.textContent = nuevaTarea.value
    listaEntera.appendChild(li)
    let img = document.createElement("IMG")
    img.src = "images/icon-cross.svg"
    img.alt = "CROSS"
    img.className = "cerrar"
    li.appendChild(img)
    removerItemsCompletados()
    nuevaTarea.value = ""
    actualizarLista()
    slist("listaElementos")
  }
})


let botonLimpiar = document.getElementById("botonLimpiar")
botonLimpiar.addEventListener('click', function(){
  let completados = document.querySelectorAll(".completado")
  for (let k = 0; k < completados.length; k++) {
      completados[k].classList.add("removido")
      completados[k].classList.remove("completado")    
  }
  actualizarLista()
})


let showB = document.querySelectorAll(".showBox")[0]
showB.addEventListener('click', function(ev){
  let botones = document.getElementsByClassName("botonVisible")
  for (let k = 0; k < botones.length; k++) botones[k].classList.remove("botonVisibleActivo")  
  listaItems = document.querySelectorAll("li")
  let listaCompletados = document.querySelectorAll(".completado")
  if (ev.target.classList.contains('tareasTodas')) {
    ev.target.classList.add("botonVisibleActivo")
    for (let i = 0; i < listaItems.length; i++) 
      listaItems[i].classList.remove('oculto')
    for (let j = 0; j < listaCompletados.length; j++) {
      listaCompletados[j].classList.remove('oculto')      
    }
  }
  else if (ev.target.classList.contains('activo')) {
    ev.target.classList.add("botonVisibleActivo")
    for (let i = 0; i < listaItems.length; i++) 
      listaItems[i].classList.remove('oculto')    
    for (let j = 0; j < listaCompletados.length; j++) {
      listaCompletados[j].classList.add('oculto')      
    }
  }
  else if (ev.target.classList.contains('tareasCompletas')) {
    ev.target.classList.add("botonVisibleActivo")
    for (let i = 0; i < listaItems.length; i++) 
      listaItems[i].classList.add('oculto')    
    for (let j = 0; j < listaCompletados.length; j++) {
      listaCompletados[j].classList.remove('oculto')      
    }
  }
})

let showBD = document.querySelectorAll(".showBoxDois")[0]
showBD.addEventListener('click', function(ev){
  let botones = document.getElementsByClassName("botonVisible")
  for (let k = 0; k < botones.length; k++) botones[k].classList.remove("botonVisibleActivo")  
  listaItems = document.querySelectorAll("li")
  let listaCompletados = document.querySelectorAll(".completado")
  if (ev.target.classList.contains('tareasTodas')) {
    ev.target.classList.add("botonVisibleActivo")
    for (let i = 0; i < listaItems.length; i++) 
      listaItems[i].classList.remove('oculto')
    for (let j = 0; j < listaCompletados.length; j++) {
      listaCompletados[j].classList.remove('oculto')      
    }
  }
  else if (ev.target.classList.contains('activo')) {
    ev.target.classList.add("botonVisibleActivo")
    for (let i = 0; i < listaItems.length; i++) 
      listaItems[i].classList.remove('oculto')    
    for (let j = 0; j < listaCompletados.length; j++) {
      listaCompletados[j].classList.add('oculto')      
    }
  }
  else if (ev.target.classList.contains('tareasCompletas')) {
    ev.target.classList.add("botonVisibleActivo")
    for (let i = 0; i < listaItems.length; i++) 
      listaItems[i].classList.add('oculto')    
    for (let j = 0; j < listaCompletados.length; j++) {
      listaCompletados[j].classList.remove('oculto')      
    }
  }
})

let botonCambiarTema = document.getElementsByClassName('cambiarTema')[0]
botonCambiarTema.addEventListener('click', function(){
  if (localStorage.getItem('tema') === 'tema-oscuro') {
    cambiarTemaActual('tema-claro');
} else {
    cambiarTemaActual('tema-oscuro');
}
})
function cambiarTemaActual(tema) {
  localStorage.setItem('tema', tema);
  document.documentElement.className = tema;
}



function slist (target) {
  // (A) GET LIST
  target = document.getElementById(target);
  target.classList.add("listaElementos");

  // (B) MAKE ITEMS DRAGGABLE + SORTABLE
  var items = target.getElementsByTagName("li"), current = null;
  for (let i of items) {
    // (B1) ATTACH DRAGGABLE
    i.draggable = true;
    
    // (B2) DRAG START - YELLOW HIGHLIGHT DROPZONES
    i.addEventListener("dragstart", function (ev) {
      current = this;
      for (let it of items) {
        if (it != current) { it.classList.add("hint"); }
      }
    });
    
    // (B3) DRAG ENTER - RED HIGHLIGHT DROPZONE
    i.addEventListener("dragenter", function (ev) {
      if (this != current) { this.classList.add("activo"); }
    });

    // (B4) DRAG LEAVE - REMOVE RED HIGHLIGHT
    i.addEventListener("dragleave", function () {
      this.classList.remove("activo");
    });

    // (B5) DRAG END - REMOVE ALL HIGHLIGHTS
    i.addEventListener("dragend", function () {
      for (let it of items) {
        it.classList.remove("hint");
        it.classList.remove("activo");
      }
    });
 
    // (B6) DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
    i.addEventListener("dragover", function (evt) {
      evt.preventDefault();
    });
 
    // (B7) ON DROP - DO SOMETHING
    i.addEventListener("drop", function (evt) {
      evt.preventDefault();
      if (this != current) {
        let currentpos = 0, droppedpos = 0;
        for (let it=0; it<items.length; it++) {
          if (current == items[it]) { currentpos = it; }
          if (this == items[it]) { droppedpos = it; }
        }
        if (currentpos < droppedpos) {
          this.parentNode.insertBefore(current, this.nextSibling);
        } else {
          this.parentNode.insertBefore(current, this);
        }
      }
    });
  }
}
slist("listaElementos")

