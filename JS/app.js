'Use srtict';
const TravelForm = document.getElementById('TravelForm');
const TravelTable =document.getElementById('tableBox');
function tableHeaderRender ()
{
  let trE1 = document.createElement('tr');
  TravelTable.append(trE1);

  let thEl = document.createElement('th');
  thEl.textContent='Place Name';
  trE1.append(thEl);

  let thE2 = document.createElement('th');
  thE2.textContent='Trip Place';
  trE1.append(thE2);

  let thE3 = document.createElement('th');
  thE3.textContent='Type Of transport';
  trE1.append(thE3);
}
tableHeaderRender();
function tableCreateElement(Name ,Place , transport )
{
  let trE1 = document.createElement('tr');
  TravelTable.append(trE1);

  let tdE1 = document.createElement('td');
  tdE1.textContent=Name;
  trE1.append(tdE1);

  let tdE2 = document.createElement('td');
  tdE2.textContent=Place;
  trE1.append(tdE2);

  let tdE3 = document.createElement('td');
  tdE3.textContent=transport;
  trE1.append(tdE3);
}
function Travel (travel)
{
  this.travel=travel;
}
Travel.prototype.addTravel= function (Name , place , transport)
{
  this.travel.push({Name , place , transport});
};
Travel.prototype.saveToLocalStorge=function()
{
  localStorage.setItem('Travel',JSON.stringify(this.travel));
};
let travel = new Travel([]);

function loadLacalStorge(){
  const myLocalStorge = JSON.parse(localStorage.getItem('Travel')) || [];
  travel=new Travel(myLocalStorge);
}
loadLacalStorge();

TravelForm.addEventListener('submit',addNewTravel);
function addNewTravel(event)
{
  event.preventdefault();
  let name = event.target.value;
  let place = event.target.value;
  let transport = event.target.value;
  travel.renderTravelList();
  travel.addTravel(name , place , transport);
  travel.saveToLocalStorge();


}
function renderTravelList()
{
  for (let i=0 ; i<travel.travel.length ; i++)
  {
    let name = travel.travel[i].name;
    let place = travel.travel[i].place;
    let transport = travel.travel[i].transport;
    tableCreateElement(name , place , transport);
  }
}
renderTravelList();

