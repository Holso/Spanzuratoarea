/*====Intrebarile====*/
let bazaIntrebariRaspunsuri = [
    {
        id: 1,
        intrebarea: 'Ce culoare are trunchiul unui pom?',
        raspunsul: 'MARO',
        litere: 4
    },
    {
        id: 2,
        intrebarea: 'Care animal este considerat ca fiind prietenul omului?',
        raspunsul: 'CAINELE',
        litere: 7
    },
    {
        id: 3,
        intrebarea: 'Care este capitala Romaniei?',
        raspunsul: 'BUCURESTI',
        litere: 9
    },
    {
        id: 4,
        intrebarea: 'Cum il cheama pe cel care a conceput acest joc(pe discord)?',
        raspunsul: 'HOLSO',
        litere: 5
    }
];
    /*=== Declarare ===*/
let i,j;

const numarArray = [1,2,3,4]; //numarul de intrebari
let numarTotalDeIntrebari,incepe,start,randomNumar,numarR,numarBoxPentruLitere,numarLitereAfisatePeEcran,raspunsCorect,resultat;
let numarLitereCuvantDinArray, numarBoxCurent, numarBoxAnterior, numarDeGhiciriCorecte,win,lose;
numarBoxAnterior = 0, raspunsCorect = 0;

//Sir 
let sir = "", raspuns = ""; 

let informatiiNumarCifreCuvant = document.getElementById("infLitere");
let numarLitereAfisate = document.getElementById("numarLitere");
let intrebareAfisata = document.getElementById("intrebare");
let nuExistaIntrebari = document.getElementById("infLitereNuExista");

    /*=== Un numar random pentru a alege intrebarea(nu se poate repeta) ===*/
function randomNumber(min, max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

    /*=== Incepe Jocul ===*/
start = 0;incepe = 1;//j = incepe
function incepeJocul(startJoc){
    if(startJoc == incepe && start == 0){
        start = 1;
        intrebareaUrmatoare(2)
    }else if(numarTotalDeIntrebari == 6){
        alert("Nu mai sunt intrebari. Apasati butonul de Restart Game");
    }else{
        alert("O data ce ai apasat Start nu poti sa il mai apesi, doar daca iesi de pe pagina");
    }
}

    /*=== Intrebarea Urmatoare ===*/
numarTotalDeIntrebari = 1; gataSetIntrebari = 1;
function intrebareaUrmatoare(next){
    console.log("start");
    if(numarTotalDeIntrebari < 5 && start == 1 && gataSetIntrebari == 1){
        
        if(numarTotalDeIntrebari == 1){
            informatiiNumarCifreCuvant.style.opacity="1";
        }
        incepe = 2;numarTotalDeIntrebari++;    
        if(numarArray.length != 0){
            randomNumar = randomNumber(0,numarArray.length-1);
            numarR = numarArray[randomNumar] -1;
            numarArray.splice(randomNumar, 1);
            document.getElementById("numarLitere").innerHTML = bazaIntrebariRaspunsuri[numarR].litere;
            document.getElementById("intrebare").innerHTML = bazaIntrebariRaspunsuri[numarR].intrebarea;

            console.log(numarTotalDeIntrebari);
            document.getElementById("numarulConcretDeIntrebari").innerHTML = numarTotalDeIntrebari-1;
            /* Afisare Numarul Box-urilor de Litere */
            numarLitereCuvantDinArray = bazaIntrebariRaspunsuri[numarR].litere;
            numarBoxCurent = bazaIntrebariRaspunsuri[numarR].litere;
            for(g=1;g<=numarBoxAnterior;g++){
                box = document.getElementById("box" + g);
                box.innerHTML= "";
                box.style.display="none";
                sir = "";
                numarLitereAfisatePeEcran = 1;
                numarBoxPentruLitere = 1;
            }
            for(g=1;g<=numarBoxCurent;g++){
                box = document.getElementById("box" + g);
                box.style.display="flex";
            }
            numarBoxAnterior = numarBoxCurent;
        }
    }else if(gataSetIntrebari == 1 && start == 1){
        informatiiNumarCifreCuvant.style.display = "none";
        intrebareAfisata.style.display = "none";
        nuExistaIntrebari.style.display = "flex";
        gataSetIntrebari ++; numarTotalDeIntrebari++;
        for(g=1;g<=10;g++){
            box = document.getElementById("box" + g);
            box.style.display="none";
        }

    }else if(gataSetIntrebari > 1 && start == 1){
        alert("Ca sa jucati din nou apasati 'Restart Game' ");
    }else if(start == 0){
        alert("Apasati butonul de start");
    }
}

    /*=== Restart Game ===*/
function restartGame(){
    if(numarTotalDeIntrebari == 6 && start == 1){
        numarTotalDeIntrebari = 1;
        window.location.reload();
    }else if(start == 0){
        alert("Pentru a incepe jocul apasati Start");
    }else if(numarTotalDeIntrebari < 6){
        alert("Nu puteti da restart la joc pana nu terminati setul de intrebari");
    }
}

    /*=== Afisare Litere Pe Ecran In Box ===*/

numarBoxPentruLitere = 1;
numarLitereAfisatePeEcran = 1; 
numarDeGhiciriCorecte = 0;
win=0;lose=0;
function afisareLitere(literaPrimita){//numarLitereDinArray = numarLitereCuvantDinArray
    if(numarLitereAfisatePeEcran <= numarLitereCuvantDinArray){
        numarLitereAfisatePeEcran++;
        console.log(numarLitereAfisatePeEcran, numarLitereCuvantDinArray + 1);
        if(numarTotalDeIntrebari!=0 && numarTotalDeIntrebari <= 5){
            box = document.getElementById("box" + numarBoxPentruLitere);
            box.innerHTML = literaPrimita;
            numarBoxPentruLitere++; 
            sir += literaPrimita;
            console.log(sir);

            if(numarLitereAfisatePeEcran == bazaIntrebariRaspunsuri[numarR].litere + 1){
                raspuns = bazaIntrebariRaspunsuri[numarR].raspunsul;
                resultat = raspuns.localeCompare(sir);
                if(resultat === 0){
                    raspunsCorect = 1;
                }else{
                    raspunsCorect = -1;
                }
                
                /*=== Win or Lose ===*/
                if(raspunsCorect == 1){
                    //document.getElementById("modalWiner").style.display="flex";
                    //document.getElementById("modalWiner").classList.add("modalWinerActive");
                    //document.getElementById("intrebareModalWiner").innerHTML = bazaIntrebariRaspunsuri[numarR].intrebarea;
                    numarDeGhiciriCorecte ++;win++;
                    sir = " ";
                    schimbaBackground(raspunsCorect);
                    if(win==1){
                        document.getElementById("numarScorWin").innerHTML = "o"; 
                        document.getElementById("intrebariScor").innerHTML = "intrebare"; 
                    }else{
                        document.getElementById("numarScorWin").innerHTML = win;  
                        document.getElementById("intrebariScor").innerHTML = "intrebari";
                    }
                }else{
                    schimbaBackground(raspunsCorect);
                }
                raspunsCorect = 0;
            }
        }
    
    }else if(numarLitereAfisatePeEcran >= numarLitereCuvantDinArray){
        alert("Daca vreti sa mai adaugati o litera atunci apasati butonul Backspace pentru a sterge literele din cuvant");
    }
}

/*=== BackSpace ===*/
function backSpace(){
    if(numarBoxPentruLitere !=1){
        numarBoxPentruLitere --; numarLitereAfisatePeEcran --;
        literaDinBox = document.getElementById("box" + numarBoxPentruLitere);
        litera = literaDinBox.innerText;
        literaStearsa = litera.replace(litera, "");
        literaDinBox.innerHTML = literaStearsa;
        sir = sir.slice(0,-1);
        console.log(sir,numarBoxPentruLitere,numarLitereAfisatePeEcran);
    }
}

/*=== Inchidere Modal Win ===*/
/*function inchideModalWin(){
    document.getElementById("modalWiner").style.display="none";
    intrebareaUrmatoare(2);
}*/

/*=== Schimba Background ===*/
function schimbaBackground(adevarat){
    let backgroundScor = document.getElementById("score");
    if(adevarat == 1){
        setTimeout(function() {
            backgroundScor.style.background = "#228B22";
        }, 100);
        setTimeout(function() {
            backgroundScor.style.background = "transparent";
          }, 2000);
        setTimeout(function() {
            intrebareaUrmatoare(2);
        }, 250);
    }else{
        setTimeout(function() {
            backgroundScor.style.background = "red";
        }, 50);
        setTimeout(function() {
            backgroundScor.style.background = "transparent";
          }, 1300);
    }
    
}