//loader
window.onload = () =>{
    document: .getelementbyl
    d("loader").style.display = "none";

};

//typing effect
const text = "python full stack developer|dashboard developer";
let index = 0;
function typingeffect(){
    if(index <text.length){
        document: .queyselecto
        r("typing").innerhtml +=
        text.charat(index);
        index++;
        settimeout(typingeffect,100);
    }
}
typingeffect();