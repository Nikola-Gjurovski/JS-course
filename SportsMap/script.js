//let map = document.querySelector("#map");
'use strict';




let mapEvent;
let najava=document.querySelector("#najava_blok");
let select=document.querySelector("select");
let p=document.querySelector(".pcad");
let input=document.querySelector(".min");
let golem=document.getElementsByClassName("golem");
let eden=document.querySelector(".a");
let dva=document.querySelector(".b");
let tri=document.querySelector(".c");
let block=document.getElementById("block");



class App{
    #map
    #mapEvent
    #flag=true;
    #workouts=[];
    constructor() {
        this._start();
        select.addEventListener("change",this._changeNajava.bind(this));
        najava.addEventListener("submit",this._submits.bind(this));
        block.addEventListener("click",this._find.bind(this));
    }
    _start(){

        if (navigator.geolocation) {
            console.log("ovde")
            navigator.geolocation.getCurrentPosition((position)=> {
                const {latitude} = position.coords;
                const {longitude} = position.coords;
                console.log(latitude, longitude);
                const coordinates = [latitude, longitude];
                this.#map = L.map('map').setView(coordinates, 13);

                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.#map);

                /* L.marker(coordinates).addTo(map)
                     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
                     .openPopup();*/
                this.#map.on("click", (mapE)=> {
                    console.log(najava)
                    this.#mapEvent = mapE;
                    najava.style.opacity = 1;
                    najava.style.visibility = "visible";
                    //inputDistance.focus();
                    /*const {lat, lng} = mapEvent.latlng;
                    L.marker([lat, lng])
                        .addTo(map).bindPopup(L.popup({
                        maxWidth: 250,
                        minWidth: 100,
                        autoCLose: false,
                        closeOnClick: false,
                        //className:"running-popup"
                    }))
                        .setPopupContent("Workout")
                        .openPopup();*/
                })
            }, function () {
                alert("Could not get your position");
            });
        }

    }
    _changeNajava(){
        if(this.#flag){
            p.innerHTML="Elev Gain";
            input.placeholder="meters"

        }
        else{
            p.innerHTML="Cadance";
            input.placeholder="step/min"
        }
        this.#flag=!this.#flag;
    }

    _submits(e) {
        e.preventDefault()
        const edenValue = parseFloat(eden.value);
        const dvaValue = parseFloat(dva.value);
        const triValue = parseFloat(tri.value);
        const {lat, lng} = this.#mapEvent.latlng;
        let workout;
        najava.style.display="none";
        najava.style.opacity=0;
        setTimeout(()=>najava.style.display="block");
        if (select.value === "Running") {
            if (Number.isFinite(edenValue)&&Number.isFinite(dvaValue)&&Number.isFinite(triValue)&& edenValue>0 && dvaValue >0 && triValue>0) {
                workout=new Running([lat,lng],edenValue,dvaValue,triValue);
                let html= `<div class="sports" id="${workout.coords}">
                    <div class="red3">
                        <div class="h3">
                            <h3>${workout.description}</h3>
                        </div>
                        <ul>
                            <li>
                                <span>🏃‍♂️</span>
                                <span>${workout.distane} km</span>
                            </li>
                            <li>
                                <span>⏱</span>
                                <span>${workout.duration } min</span>
                            </li>
                            <li>
                                <span>⚡️</span>
                                <span>${workout.pace} min/km</span>
                            </li>
                            <li>
                                <span>🦶</span>
                                <span>${workout.cadance} spm</span>
                            </li>

                        </ul>
                    </div>
                </div>`



                block.insertAdjacentHTML("afterbegin",html);
                L.marker(workout.coords)
                    .addTo(this.#map)
                    .bindPopup(L.popup({
                    maxWidth: 250,
                    minWidth: 100,
                    autoCLose: false,
                    closeOnClick: false,
                    className:"running"
                }))
                    .setPopupContent("🏃‍♂️ "+workout.description)
                    .openPopup();

                //najava.style.display="none";
            }
            else {
                console.log(eden.value.trim())
                console.log(dva.value)
                console.log(tri.value)
                alert("The inputs must be positive numbers")
            }
            console.log("sdssads");
        }
        else{
            if (Number.isFinite(edenValue)&&Number.isFinite(dvaValue)&&Number.isFinite(triValue)&& edenValue>0 && dvaValue >0) {
                workout=new Cycling([lat,lng],edenValue,dvaValue,triValue);
                let html= `<div class="sports" id="${workout.coords}">
                    <div class="red3">
                        <div class="h3">
                            <h3>${workout.description}</h3>
                        </div>
                        <ul>
                            <li>
                                <span>🚴‍♀️️</span>
                                <span>${workout.distane} km</span>
                            </li>
                            <li>
                                <span>⏱</span>
                                <span>${workout.duration} min</span>
                            </li>
                            <li>
                                <span>⚡️</span>
                                <span>${workout.speed} km/h</span>
                            </li>
                            <li>
                                <span>⛰</span>
                                <span>${workout.elev_gain} m</span>
                            </li>

                        </ul>
                    </div>
                </div>`



                block.insertAdjacentHTML("afterbegin",html);
                L.marker(workout.coords)
                    .addTo(this.#map).bindPopup(L.popup({
                    maxWidth: 250,
                    minWidth: 100,
                    autoCLose: false,
                    closeOnClick: false,
                    className:"cycling"
                }))
                    .setPopupContent("🚴‍♀️ "+workout.description)
                    .openPopup();

            }
            else {
                /*console.log(eden.value.trim())
                console.log(dva.value)
                console.log(tri.value)*/
                alert("The inputs must be positive numbers")
            }
        }
        // this._hideForm();
        this.#workouts.push(workout);
        eden.value=dva.value=tri.value="";
        eden.placeholder="km"


    }

    _find(e){
        const workoutEl=e.target.closest('.sports');
       /* if(!workoutEl)return;
        console.log(workoutEl);
        const works=this.#workouts.find(work=>work.id===workoutEl.id);
        console.log(works);
        this.#map.setView(works.coords,13, {
            animate: true,
            pan: {
                duration: 1,
            },
        });*/
        if(!workoutEl)return;
        console.log(workoutEl);
        const compas=workoutEl.id.split(",");
        console.log(compas[0]);

        this.#map.setView([compas[0],compas[1]],13, {
            animate: true,
            pan: {
                duration: 1,
            },
        })
    }
}
class WorkOut{
    date=new Date();
    option={
        day:"numeric",
        month:"long"
    }
    time=new Intl.DateTimeFormat('mk',this.option).format(this.date);
    id=(Date.now()+"").slice(-10);
    constructor(coords,distance,duration) {
        this.coords=coords;
        this.distane=distance;
        this.duration=duration;
    }


}
class Running extends WorkOut{
    type="running";
    constructor(coords,distance,duration,cadance) {
        super(coords,distance,duration);
        this.cadance=cadance;
    }
    pace=(this.duration/this.distane).toFixed(1);
    description="Running on "+this.time;


}
class Cycling extends WorkOut{
    type="cycling";
    constructor(coords,distance,duration,elev_gain) {
        super(coords,distance,duration);
        this.elev_gain=elev_gain;
    }
    km=this.duration/60;
    speed=(this.distane/this.km).toFixed(1);
    description="Cycling on "+this.time;


}
const app=new App();

/*if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        console.log(latitude, longitude);
        const coordinates = [latitude, longitude];
         map = L.map('map').setView(coordinates, 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker(coordinates).addTo(map)
            .bindPopup('A pretty CSS popup.<br> Easily customizable.')
            .openPopup();
        map.on("click",function (mapE){
            mapEvent=mapE;
          najava.style.opacity=1;
          najava.style.visibility="visible";
            //inputDistance.focus();
            const{lat,lng}=mapEvent.latlng;
            L.marker([lat,lng])
          .addTo(map).bindPopup(L.popup({
         maxWidth:250,
         minWidth:100,
         autoCLose:false,
         closeOnClick:false,
         //className:"running-popup"
     }))
     .setPopupContent("Workout")
     .openPopup();})
}, function () {
alert("Could not get your position");
});
}*/
