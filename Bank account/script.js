const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    locale:'mk'
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    locale: 'ar-BH'
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    locale:'de'
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
    locale:'fr-FR'
};

const accounts = [account1, account2, account3, account4];
//let user;
//let pin;
let niza=[];
let flag=0;
let go=true;
let smeesh=true;
//document.querySelector("#eenter").addEventListener('click',function () {
function casual(niza){
    let niz=niza;
    niz = niza.movements.reverse();
    console.log(niz.movements);
    let i = niz.length;
    let div = document.getElementById("project");
    div.innerHTML="";
    niz.forEach(function (items) {



        let clones = document.createElement("div");
        clones.classList = "clones";
        if (items > 0) {
            let deposite = document.createElement("div");
            deposite.classList = "deposite";
            let paragra1 = document.createElement("p")
            paragra1.innerHTML = i + " deposit";


            deposite.append(paragra1);

            clones.append(deposite);
        } else if (items < 0) {
            let withddrawal = document.createElement("div");
            withddrawal.classList = "withdrawal";
            let paragraf1 = document.createElement("p")
            paragraf1.innerHTML = i + " withdrawal";
            //paragra1.style.color="white";
            //deposite.innerText="7 deposit"

            withddrawal.append(paragraf1);
            clones.append(withddrawal);

        }
        let price = document.createElement("div");
        price.classList = "price";
        let paragra2 = document.createElement("p");
        paragra2.innerHTML = items + " $";
        price.append(paragra2);
        // price.innerText="2000 $";

        //clones.append(deposite);
        clones.append(price);
        div.append(clones);
        //console.log(niza.movements.reverse());
        i--;
    })


}
function sortmethod(niza){
    let i=niza.movements.length;
    let div = document.getElementById("project");
    div.innerHTML="";
    let rast=niza.movements;
    rast=rast.sort((a,b)=>{
        if(a<b){
            return 1;
        }
        else{
            return -1;
        }
    })
    rast.forEach(function (items) {
        let clones = document.createElement("div");
        clones.classList = "clones";
        if (items > 0) {
            let deposite = document.createElement("div");
            deposite.classList = "deposite";
            let paragra1 = document.createElement("p")
            paragra1.innerHTML = i + " deposit";
            //paragra1.style.color="white";
            //deposite.innerText="7 deposit"

            deposite.append(paragra1);
            /*let price = document.createElement("div");
            // price.classList="price";
            let paragra2 = document.createElement("p");
            paragra2.innerHTML = items + " $";
            price.append(paragra2);*/
            clones.append(deposite);
        } else if (items < 0) {
            let withddrawal = document.createElement("div");
            withddrawal.classList = "withdrawal";
            let paragraf1 = document.createElement("p")
            paragraf1.innerHTML = i + " withdrawal";
            //paragra1.style.color="white";
            //deposite.innerText="7 deposit"

            withddrawal.append(paragraf1);
            clones.append(withddrawal);

        }
        let price = document.createElement("div");
        price.classList = "price";
        let paragra2 = document.createElement("p");
        paragra2.innerHTML = items + " $";
        price.append(paragra2);
        // price.innerText="2000 $";

        //clones.append(deposite);
        clones.append(price);
        div.append(clones);
        //console.log(niza.movements.reverse());
        i--;
    })
}
function calculate(niza){
    let zbir = 0;
    let pozitivni = 0;
    let negativni = 0;
    document.getElementById("welcome").innerHTML = "Welcome back," + niza.owner.split(" ")[0];
    niza.movements.forEach(function (items) {
        if (items > 0) {
            pozitivni += items;
        } else if (items < 0) {
            negativni += items;
        }
        zbir += items;
    });
    negativni *= -1;
    let procent=Number.parseFloat((pozitivni*niza.interestRate)/100);
    procent=(procent).toFixed(2);
    document.getElementById("interest").innerHTML=procent + " $";

    document.getElementById("zbir").innerHTML = zbir + " $";
    document.getElementById("pozitivni").innerHTML = pozitivni + " $";
    document.getElementById("negativni").innerHTML = negativni + " $";
}
const current={
    day:'numeric',
    month:'numeric',
    year:'numeric',
    weekday:'long',
    hour:'numeric',
    minute:'numeric'
};
function vlezi() {
    //console.log("aasdsad");
   let user =document.querySelector("#user");
    let pin =document.querySelector("#pin").value;
    go=true;
   // if (user.value!= " " && pin!= " ") {
            accounts.forEach(function (items) {
                //console.log(items.owner);
                let str = items.owner.split(" ");
                let name = "";
                str.forEach(function (strs) {
                    name += strs[0].toLowerCase();
                });
                console.log(name);
                console.log(user.value);
                if (name == user.value.trim() && items.pin == pin) {
                    console.log("In");
                    flag = 1;
                    niza = items;


                }


            });
       // }

        console.log(flag);
        if (flag === 1) {
            document.getElementById("user").value= " ";
            document.getElementById("pin").value = " ";

            console.log("dsadasd")
            let app = document.querySelector("main");
            app.style.opacity = 100;
            let zbir = 0;
            let pozitivni = 0;
            let negativni = 0;
            document.getElementById("welcome").innerHTML = "Welcome back," + niza.owner.split(" ")[0];
            document.getElementById("datum").innerHTML="As of "+new Intl.DateTimeFormat(niza.locale,current).format(new Date());
            niza.movements.forEach(function (items) {
                if (items > 0) {
                    pozitivni += items;
                } else if (items < 0) {
                    negativni += items;
                }
                zbir += items;
            });
            negativni *= -1;
            let procent = Number.parseFloat((pozitivni * niza.interestRate) / 100);
            procent = (procent).toFixed(2);
            document.getElementById("interest").innerHTML = procent + " $";
            document.getElementById("zbir").innerHTML = zbir + " $";
            document.getElementById("pozitivni").innerHTML = pozitivni + " $";
            document.getElementById("negativni").innerHTML = negativni + " $";
            niza.movements = niza.movements.reverse();
            console.log(niza.movements);

            casual(niza);

        }




    smeesh=false;
    flag=0;
};

function sorting(){

    if(go) {
        sortmethod(niza);

    }
    else{
        casual(niza);
    }
    go=!go;

}
let zholto=0;
let zholtoaccount=[];
function transfer(){
    let transfer=document.getElementById("transfer").value;
    let amount=document.getElementById("amount1").value;
    //amount=parseInt(amount);
    let am="";
    if(amount.split(" ").length>1){
        //console.log(amount[0]);
        //amount=amount[0]+amount[1];
        let sopranos=amount.split(" ");
        sopranos.forEach(function (items){
            am+=items;
        })
        am=parseInt(am);
    }
    else {
        console.log(am);
        am = Math.round(amount);
    }
    //amount=Math.round(amount);
    console.log(amount);
    let id=niza.owner.split(" ");

    let p=id[0][0].toLowerCase() +id[1][0].toLowerCase();
    console.log(p);
    let zb=document.getElementById("zbir").textContent;
    zb=parseInt(zb);
    console.log(zb);
    if(transfer!==" "&&am!==" "){
        accounts.forEach(function (items) {
            //console.log(items.owner);
            let str = items.owner.split(" ");
            let nam = "";
            str.forEach(function (strs) {
                nam += strs[0].toLowerCase();
            });
            console.log(nam);
            if (nam == transfer &&am<zb&&am>0&&p!=nam) {
                console.log("Inn");
                items.movements.unshift(am);
                console.log(items);
                zholto=1;
                niza.movements.unshift(-am);




            }
        });
    }
    if(zholto){
        // zholtoaccount.movements.push(amount);
        document.getElementById("transfer").value="";
        document.getElementById("amount1").value="";
        calculate(niza);
        if(go){
            casual(niza);
        }
        else{
            sortmethod(niza);
        }
        zholto=0;
    }

}
function requestloan(){
    let amount=document.getElementById("Amount2").value;
    let am="";
    if(amount.split(" ").length>1){
        console.log("split")
        //console.log(amount[0]);
        //amount=amount[0]+amount[1];
        let sopranos=amount.split(" ");
        sopranos.forEach(function (items){
            am+=items;
        })
        am=parseInt(am);
    }
    else {
        console.log("decimal");
        console.log(am);
        am = Math.round(amount);
    }
    //amount=amount.trim();
    let zb=document.getElementById("zbir").textContent;
    zb=parseInt(zb);

    niza.movements.unshift(am);
    document.getElementById("Amount2").value="";
    if(go){
        casual(niza);
    }
    else{
        sortmethod(niza);
    }
    calculate(niza);

}
function confimr() {
   let use = document.querySelector("#confirmuser");
   let pis = document.querySelector("#confirmPIN").value;
    let id=niza.owner.split(" ");
    let p=" ";
    id.forEach(function (items){
        p+=items[0].toLowerCase();
    })
    console.log(p);
    console.log(use);



        if(p.trim()==use.value.trim()&&niza.pin==pis.trim()){
            let app = document.querySelector("main");
            app.style.opacity =0;
            document.getElementById("welcome").innerHTML="Log in to get started";
            document.querySelector("#confirmuser").value="";
            document.querySelector("#confirmPIN").value="";
        }

}