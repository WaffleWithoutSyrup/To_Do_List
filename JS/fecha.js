let fecha= new Date();
let dia=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

let mes=['January','February','March','April','May','June','July','August','September','October','November','December']

console.log(`${dia[fecha.getDay()]}, ${fecha.getDate()}, ${mes[fecha.getMonth()]}, ${fecha.getFullYear()}`);

const fechaHtml= document.getElementById('#dateInList')
console.log(fechaHtml);

const dateForList= document.getElementById('dateInList')