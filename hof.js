function Creategreetings(greeting){
    function greet(name){
        console.log(greeting,name())
    }
    return greet;
}
let g1=Creategreetings("Good Morning")
let g2=Creategreetings("Good evening")

function getname(){
    return document.getElementById('namebox').value
}