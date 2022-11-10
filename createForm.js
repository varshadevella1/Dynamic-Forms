const data=JSON.parse(localStorage.getItem("UserInputList"));
console.log(data);
// console.log(data[0].radioOptions)
// console.log(data[0].radioOptions[0].length)
// for(i=0;i<data.length;i++){
//     for(k=0;k<radioOptions.length;k++){
// console.log(data[i].radioOptions[i][k].radio_label)
// }
// }
var container = document.getElementById("container")
var linebreak = document.createElement("br");
var title = document.getElementById("title");

function addFields(label,type,width,placeholder){
var div = document.createElement('div');
var span1 =document.createElement('span');
var span2 =document.createElement('span');
    span1.id = label;
    span1.innerText = label;
    var Field=document.createElement("INPUT");
    Field.setAttribute('placeholder',placeholder)
    Field.setAttribute('size',width)
    span1.style.fontFamily="Arial, Helvetica, sans-serif";
    div.style.padding="20px";
    span1.style.margin="5px";
    span2.style.margin="5px";
    span1.display="inline-block";
    Field.style.borderRadius="3px";
    Field.style.border="none";
    span1.style.color="white";
    Field.type = type
    span2.appendChild(Field);
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(linebreak);
    container.appendChild(div);
}
// function outputUpdate(num) {
//     document.querySelector('#output').value = num;
//     }
function addNumberSlider(label){
    var div=document.createElement("div");
    var span1 =document.createElement('span');
    var span2 =document.createElement('span');
    span1.id = label;
    span1.innerText = label;
    span1.style.fontFamily="Arial, Helvetica, sans-serif";
    span1.style.padding="50px";
    span1.style.color="white";
    var numberSliderField=document.createElement("SELECT");
    numberSliderField.setAttribute('id','range');
    var sliderField=document.getElementById('range').step="25";
    span2.appendChild(numberSliderField);
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(linebreak);
    container.appendChild(div);
}
// for(var j=0;j<data.length;j++){
//     for(var i=0;i<data[0].radioOptions[0].length;i++){
//        var radioButtonField=document.createElement("radio");
//     }
//     console.log(radioButtonField)
//    }

for(i=0;i<data.length;i++){
    console.log(data[i].label)
    if(data[i].type=="text"){
        addFields(data[i].label,data[i].type,data[i].width,data[i].placeholder)
        // span2.appendChild(linebreak);
    }
    else if(data[i].type=="numbers"){
        addFields(data[i].label,data[i].type,data[i].width,data[i].placeholder)
        // span2.appendChild(linebreak);
    }
    else if(data[i].type=="email"){
        addFields(data[i].label,data[i].type,data[i].width,data[i].placeholder)
        // span2.appendChild(linebreak);
    }
    else if(data[i].type=="checkbox"){
        addFields(data[i].label,data[i].type,data[i].width,data[i].placeholder)  
        // span2.appendChild(linebreak);
    }
    else if(data[i].type=="range"){
        addFields(data[i].label,data[i].type)
    }

}
for(i=0;i<data.length;i++){
    if(data[i].type=="radio"){
 var heading = document.createElement("h3");
 var div = document.createElement("div");
 heading.id=data[i].label;
 heading.innerText = data[i].label;
 heading.style.fontFamily="Arial, Helvetica, sans-serif";
 heading.style.padding="5px";
 heading.style.color="white";
 div.appendChild(heading)
 for(var j=0;j<data[i].radioOptions.length;j++)
 {
 var span1=document.createElement("span");
 var span2=document.createElement("span");
 div.style.padding="20px";
 span2.style.margin="5px";
 span1.style.margin="5px";
 span2.id=data[i].radioOptions[j].radio_label;
 span2.innerText=data[i].radioOptions[j].radio_label;
 var radioButtonField = document.createElement("INPUT");
  radioButtonField.setAttribute("type", "radio");
 console.log(radioButtonField)
 radioButtonField.setAttribute("value",data[i].radioOptions[j].radio_label);
 radioButtonField.style.border="none";
 span1.appendChild(radioButtonField);
 div.appendChild(span1);
 div.appendChild(span2);
 div.appendChild(linebreak)
 container.appendChild(div);
}
    }
}
for(i=0;i<data.length;i++){
    if(data[i].type=="select"){
        // console.log(data[i].options.length)
    var div = document.createElement('div');
    var span1 =document.createElement('span');
    var span2 =document.createElement('span');
    span1.id = data[i].label;
    span1.innerText = data[i].label;
    span1.style.fontFamily="Arial, Helvetica, sans-serif";
    div.style.padding="20px";
    span2.style.margin="5px";
    span1.style.margin="5px";
    span1.style.color="white";
    div.appendChild(span1);
    var dropDownField=document.createElement("SELECT");
    dropDownField.style.borderRadius="3px";
    dropDownField.style.border="none";
    for(j=0;j<data[i].options.length;j++)
    {
    OptionField=document.createElement("option");
    OptionField.setAttribute("value",data[i].options[j].option_label);
    var node=document.createTextNode(data[i].options[j].option_label);
    console.log(node);
    OptionField.appendChild(node);
    dropDownField.appendChild(OptionField);
    span2.appendChild(dropDownField);
    div.appendChild(span2);
    container.append(div)
    }
}
}

const btn=document.createElement("button");
btn.innerHTML="Submit Form";
btn.style.borderRadius="3px";
btn.style.border="none";
container.appendChild(btn)


