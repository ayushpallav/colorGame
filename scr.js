function genRand(){
  return Math.floor(Math.random() * (256-0) + 0);
}
var opts = ["rgb("+genRand()+","+genRand()+","+genRand()+")",
            "rgb("+genRand()+","+genRand()+","+genRand()+")",
            "rgb("+genRand()+","+genRand()+","+genRand()+")",
          "rgb("+genRand()+","+genRand()+","+genRand()+")",
        "rgb("+genRand()+","+genRand()+","+genRand()+")",
      "rgb("+genRand()+","+genRand()+","+genRand()+")"];
//alert(genRand());
var ref = "10";
var tar = "10";
window.onload=setup();
function setup(){
  //console.log(genRand());
    document.getElementById("message").innerHTML = "";
    document.getElementById("restart").innerHTML = "Change colors"
  opts = ["rgb("+genRand()+","+genRand()+","+genRand()+")",
              "rgb("+genRand()+","+genRand()+","+genRand()+")",
              "rgb("+genRand()+","+genRand()+","+genRand()+")",
            "rgb("+genRand()+","+genRand()+","+genRand()+")",
          "rgb("+genRand()+","+genRand()+","+genRand()+")",
        "rgb("+genRand()+","+genRand()+","+genRand()+")"];
  for(var i=1;i<=6;i++)
  {
    ref = "op" + i;
    //console.log(ref);
    document.getElementById(ref).style.backgroundColor = opts[i-1];
  }
  var sel = Math.floor(Math.random()*(7-1)+1);
  tar = "op"+sel;
  //console.log(sel);
  //console.log(opts[sel-1]);
  document.getElementById('ques').innerHTML = opts[sel-1];

};
console.log(tar);
function trigger(e){
  console.log(e.id);
  if(e.id==tar){
    document.getElementById("message").innerHTML = "Congratulations!";
    document.getElementById("message").style.color = "green";
    document.getElementById("restart").innerHTML = "New Game!"
    for(var i=1;i<=6;i++)
    {
      ref = "op" + i;
      //console.log(ref);
      document.getElementById(ref).style.backgroundColor = "lightgray";
    }
  }
  else {
    document.getElementById("message").innerHTML = "Try Again!";
    document.getElementById("message").style.color = "red";
    document.getElementById(e.id).style.backgroundColor = "lightgray";
  }
};
document.getElementById("restart").addEventListener("click",function(){
  setup();
});
