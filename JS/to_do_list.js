const input= document.querySelector("input");
const agregar =document.querySelector(".agregar");
const ul = document.querySelector("ul");
const vacio= document.querySelector(".sin-tareas");

agregar.addEventListener('click', (e)=>{
    e.preventDefault();
    const text = input.value;
    const li = document.createElement('li');
    p.textContent = text;

    li.appendChild(p);
    ul.appendChild(li);
});

function add_delete_boton(){
    const delete_btn = document.createElement('button');
    delete_btn.textContent = "x";
    delete_btn.className= "eliminar";
    delete_btn.addEventListener('click')
}
