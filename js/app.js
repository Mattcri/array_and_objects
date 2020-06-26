const radiologia = [
   {hora: '11:00', especialista: 'Ignacio Schulz', paciente: 'Francisca Rojas', rut: '9878782-1', prevision: 'FONASA'},
   {hora: '11:30', especialista: 'Federico Subercaseaux', paciente: 'Pamela Estrada', rut: '15345241-3', prevision: 'ISAPRE'},
   {hora: '15:00', especialista: 'Fernando Wurthz', paciente: 'Armando Luna', rut: '16445345-9', prevision: 'ISAPRE'},
   {hora: '15:30', especialista: 'Ana Marìa Godoy', paciente: 'Manuel Godoy', rut: '17664419-0', prevision: 'FONASA'},
   {hora: '16:00', especialista: 'Patricia Suazo', paciente: 'Ramon Ulloa', rut: '14989389-k', prevision: 'FONASA'}
]

const traumatologia = [
   {hora: '8:00', especialista: 'María Paz Altuzarra', paciente: 'Paula Sanchez', rut: '15554774-5', prevision: 'FONASA'},
   {hora: '10:00', especialista: 'Raul Araya', paciente: 'Angélica Navas', rut: '15444147-9', prevision: 'ISAPRE'},
   {hora: '10:30', especialista: 'María Arriagada', paciente: 'Ana Klapp', rut: '17879423-9', prevision: 'ISAPRE'},
   {hora: '11:00', especialista: 'Alejandro Badilla', paciente: 'Felipe Mardones', rut: '15474223-6', prevision: 'ISAPRE'},
   {hora: '11:30', especialista: 'Cecilia Budnik', paciente: 'Diego Marre', rut: '16554741-k', prevision: 'FONASA'},
   {hora: '12:00', especialista: 'Arturo Cavagnaro', paciente: 'Cecilia Mendez', rut: '9747535-8', prevision: 'ISAPRE'},
   {hora: '12:30', especialista: 'Andres Vidal', paciente: 'Marcial Suazo', rut: '11254785-5', prevision: 'ISAPRE'},
]

const dental = [
   {hora: '8:30', especialista: 'Andrea Zuñiga', paciente: 'Marcela Retamal', rut: '11123425-6', prevision: 'ISAPRE'},
   {hora: '11:00', especialista: 'María Paz Zañartu', paciente: 'Angel Muñoz', rut: '9878789-2', prevision: 'ISAPRE'},
   {hora: '11:30', especialista: 'Scarlett Witting', paciente: 'Mario Kast', rut: '7998789-5', prevision: 'FONASA'},
   {hora: '13:00', especialista: 'Francisco Rojas', paciente: 'Karin Fernadez', rut: '18887662-k', prevision: 'FONASA'},
   {hora: '13:30', especialista: 'Eduardo Viñuela', paciente: 'Hugo Sanchez', rut: '17665461-4', prevision: 'FONASA'},
   {hora: '14:00', especialista: 'Raquel Villaseca', paciente: 'Ana Sepulveda', rut: '14441281-0', prevision: 'ISAPRE'},
]

traumatologia.unshift({hora: '09:00', especialista: 'René Poblete', paciente: 'Ana Gellona', rut: '13123329-7', prevision: 'ISAPRE'}, {hora: '09:30', especialista: 'María Solar', paciente: 'Ramiro Andrade', rut: '12221451-k', prevision: 'FONASA'}, {hora: '10:00', especialista: 'Raul Loyola', paciente: 'Carmen Isla', rut: '10112348-3', prevision: 'ISAPRE'}, {hora: '10:30', especialista: 'Antonio Larenas', paciente: 'Pablo Loayza', rut: '13453234-1', prevision: 'ISAPRE'}, {hora: '12:00', especialista: 'Matías Aravena', paciente: 'Susana Poblete', rut: '14345656-6', prevision: 'FONASA'});
radiologia.pop();
radiologia.shift();

const radioConsultas = document.querySelector('.stats__length-r');
const trauConsultas = document.querySelector('.stats__length-t');
const dentalConsultas = document.querySelector('.stats__length-d');
const radioAtenciones = document.querySelector('.stats__first-atention-r');
const trauAtenciones = document.querySelector('.stats__first-atention-t');
const dentalAtenciones = document.querySelector('.stats__first-atention-d');

insertarConsultas()
function insertarConsultas() {
   let valorR = document.createElement('p');
   let valorT = document.createElement('p');
   let valorD = document.createElement('p');
   valorR.innerText = radiologia.length;
   valorT.innerText = traumatologia.length;
   valorD.innerText = dental.length;
   radioConsultas.appendChild(valorR);
   trauConsultas.appendChild(valorT);
   dentalConsultas.appendChild(valorD);
}

insertarAtenciones()
function insertarAtenciones() {
   let firstR = document.createElement('p');
   let firstT = document.createElement('p');
   let firstD = document.createElement('p');
   let lastR = document.createElement('p');
   let lastT = document.createElement('p');
   let lastD = document.createElement('p');
   firstR.textContent = `
   Paciente: ${radiologia[0].paciente} | Rut: ${radiologia[0].rut} | Previsión: ${radiologia[0].prevision}`;
   firstT.textContent = `
   Paciente: ${traumatologia[0].paciente} | Rut: ${traumatologia[0].rut} | Previsión: ${traumatologia[0].prevision}`;
   firstD.textContent = `
   Paciente: ${dental[0].paciente} | Rut: ${dental[0].rut} | Previsión: ${dental[0].prevision}`;
   lastR.textContent = `
   Paciente: ${radiologia[radiologia.length-1].paciente} | Rut: ${radiologia[radiologia.length-1].rut} | Previsión: ${radiologia[radiologia.length-1].prevision}`;
   lastT.textContent = `
   Paciente: ${traumatologia[traumatologia.length-1].paciente} | Rut: ${traumatologia[traumatologia.length-1].rut} | Previsión: ${traumatologia[traumatologia.length-1].prevision}`;
   lastD.textContent = `
   Paciente: ${dental[dental.length-1].paciente} | Rut: ${dental[dental.length-1].rut} | Previsión: ${dental[dental.length-1].prevision}`;
   
   radioAtenciones.appendChild(firstR);
   trauAtenciones.appendChild(firstT);
   dentalAtenciones.appendChild(firstD);
   document.querySelector('.stats__last-atention-r').appendChild(lastR);
   document.querySelector('.stats__last-atention-t').appendChild(lastT);
   document.querySelector('.stats__last-atention-d').appendChild(lastD);
} 

dental.forEach(function(element){
   let text = document.createElement('p');
   text.textContent = `${element.hora} - ${element.especialista} - ${element.paciente} - ${element.rut} - ${element.prevision}`
   document.querySelector('.details__pacient-dental').appendChild(text)
});

changePrevision = dental.map(function(element){
   if(element.prevision === 'FONASA') {
      element.prevision = 'ISAPRE'
   } else {
      element.prevision = 'FONASA'
   }
   return element;
});

changePrevision.forEach(function(element){
   let text = document.createElement('p');
   text.textContent = `${element.prevision} - ${element.rut}`;
   document.querySelector('.details__pacient-prevision').appendChild(text);
});

var consultasTotales = [];
consultasTotales = radiologia.concat(traumatologia, dental);
consultasTotales.forEach(function(element){
   let text = document.createElement('p');
   text.textContent = `Nombre paciente: ${element.paciente}`;
   document.querySelector('.details__all-names-consult').appendChild(text);
});

console.log(radiologia)
console.log(traumatologia)
console.log(dental)