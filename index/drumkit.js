(function readyJS(win,doc){
    'use strict'
let A = doc.querySelector("#A")

function playSong(event){
    const A = doc.querySelector("#A")
    const S = doc.querySelector("#S")
    const D = doc.querySelector("#D")
    const F = doc.querySelector("#F")
    const G = doc.querySelector("#G")
    const H = doc.querySelector("#H")
    const J = doc.querySelector("#J")
    const K = doc.querySelector("#K")
    const L = doc.querySelector("#L")     
    const boxA = doc.querySelector("#boxA")
    const boxS = doc.querySelector("#boxS")
    const boxD = doc.querySelector("#boxD")
    const boxF = doc.querySelector("#boxF")
    const boxG = doc.querySelector("#boxG")
    const boxH = doc.querySelector("#boxH")
    const boxJ = doc.querySelector("#boxJ")
    const boxK = doc.querySelector("#boxK")
    const boxL = doc.querySelector("#boxL")
    if (event.key =="A"){
        A.play()
        boxA.setAttribute('class','newContent')
        setTimeout(function changeclass (){
            boxA.setAttribute("class","content")
        },250)
    }
    else if (event.key == "S"){
        S.play()
        boxS.setAttribute('class','newContent')
        setTimeout(function changeclass (){
            boxS.setAttribute("class","content")
        },250)
    }
    else if (event.key == "D"){
        D.play()
        boxD.setAttribute('class','newContent')
        setTimeout(function changeclass (){
            boxD.setAttribute("class","content")
        },250)
    }
    else if (event.key == "F"){
        F.play()
        boxF.setAttribute('class','newContent')   
        setTimeout(function changeclass (){
            boxF.setAttribute("class","content")
        },250)
    }
    else if (event.key == "G"){
        G.play() 
        boxG.setAttribute('class','newContent')
        setTimeout(function changeclass(){
            boxG.setAttribute("class","content")
        },250)
    }
    else if (event.key == "H"){
        H.play()
        boxH.setAttribute('class','newContent')
        setTimeout(function changeclass (){
            boxH.setAttribute("class","content")
        },250)
    }else if (event.key == "J"){
        J.play()
        boxJ.setAttribute('class','newContent')
        setTimeout(function changeclass (){
            boxJ.setAttribute("class","content")
        },250)
    }
    else if (event.key == "K"){
        K.play()
        boxK.setAttribute('class','newContent')
        setTimeout(function changeclass (){
            boxK.setAttribute("class","content")
        },250)
    }
    else if (event.key == "L"){
        L.play()
        boxL.setAttribute('class','newContent')
        setTimeout(function changeclass (){
            boxL.setAttribute("class","content")
        },250)
    }  
}

document.addEventListener('keyup',playSong,false);
document.addEventListener('keyup',changeClass,false);
})(window,document)