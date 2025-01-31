document.getElementById('beach').onclick = beachTime
document.getElementById('city').onclick = cityTime
document.getElementById('mountains').onclick = mountainTime
document.getElementById('desert').onclick = desertTime
document.getElementById('forest').onclick = forestTime


function beachTime() {
  document.querySelector('body').style.background = "url(../img/Beach.png) no-repeat";
  document.querySelector('body').style.backgroundSize="100% 100%";
  document.querySelector('body').style.color = 'white';
  document.querySelector('li').style.fontWeight = "400";
  document.querySelector("#beach").style.fontWeight = '800';
}

function cityTime() {
  document.querySelector('body').style.background = "url(../img/city.png) no-repeat";
  document.querySelector('body').style.backgroundSize="100% 100%";
  document.querySelector('body').style.color = 'white';
  document.querySelector('li').style.fontWeight = "400";
  document.querySelector("#city").style.fontWeight = '800';
}

function mountainTime() {
  document.querySelector('body').style.background = "url(../img/Mountain.png) no-repeat";
  document.querySelector('body').style.backgroundSize="100% 100%";
  document.querySelector('body').style.color = 'white';
  document.querySelector('li').style.fontWeight = "400";
  document.querySelector("#mountains").style.fontWeight = '800';
}

function desertTime() {
  document.querySelector('body').style.background = "url(../img/Desert.png) no-repeat";
  document.querySelector('body').style.backgroundSize="100% 100%";
  document.querySelector('body').style.color = 'white';
  document.querySelector('li').style.fontWeight = "400";
  document.querySelector("#desert").style.fontWeight = '800';
}

function forestTime() {
  document.querySelector('body').style.background = "url(../img/Forest.png) no-repeat";
  document.querySelector('body').style.backgroundSize="100% 100%";
  document.querySelector('body').style.color = 'white';
  document.querySelector('li').style.fontWeight = "400";
  document.querySelector("#forest").style.fontWeight = '800';
}