var audio = document.querySelector("audio")
var lista = ["audio1.mp3","audio2.mp3"]

var i = 0
function next(){
    i++

    if(i==lista.length){
        i=0
    }
    audio.src=lista[i]
    audio.play()

    return i ;
}

function back() {
    i--

    if(i<lista.length){
        i=0
    }
    audio.src=lista[i]

    return i ;
}
 function pause(){
     audio.pause()
} 
function play(){
    audio.play()
}





