var placeholder=document.getElementById("placeholder");
var dropDown = document.getElementById("drop-down");
var optionValue=document.getElementById("option1");
var optionLabel=document.getElementById("option2");
var minWidth = document.getElementById("minWidth");
var maxWidth = document.getElementById("maxWidth");
var slider=document.getElementById("slider");
var label = document.getElementById("label");
var modal=document.getElementById("myModal");
var radio=document.getElementById("radio");
var btn1=document.getElementById("singleline-text");
var btn2 = document.getElementById("paragraph-text");
var btn3 = document.getElementById("name");
var btn4 = document.getElementById("numbers");
var btn5 = document.getElementById("checkbox");
var btn6 = document.getElementById("email");
var btn7 = document.getElementById("dropdown");
var btn8 = document.getElementById("number-slider");
var btn9= document.getElementById("multiple-choice");
var span = document.getElementById("close");
var form = document.getElementById("form");
var required=document.getElementById("required");
var addBtn = document.getElementById("add-button");
btn1.onclick = function(){
    modal.style.display="block";
}
btn2.onclick = function(){
    modal.style.display ="block";
}
btn3.onclick = function (){
    modal.style.display="block";
}
btn4.onclick = function(){
    modal.style.display ="block";
}
btn5.onclick = function(){
    modal.style.display ="block";
}
btn6.onclick = function(){
    modal.style.display ="block";
}
btn7.onclick = function(){
    modal.style.display ="block";
}
btn8.onclick = function(){
    modal.style.display ="block";
}
btn9.onclick = function(){
    modal.style.display="block";
}
span.onclick = function(){
    modal.style.display="none";
}
window.onclick=function(event){
    if(event.target == modal){
        modal.style.display="none";
    }
}
let userInputs=[];
var options=[];
var radioOptions=[];
const addUserInput = (e)=>{
    e.preventDefault();0
       var  userInput ={
        type:document.getElementById("type").value,
        label:document.getElementsByClassName("input-label")[0].value,
        placeholder:document.getElementsByClassName("input-placeholder")[0].value,
        minLength:document.getElementsByClassName("min-width")[0].value,
        maxLength:document.getElementsByClassName("max-width")[0].value, 
        width: document.getElementById("myRange").value,
        required:document.getElementById("required-checkbox").checked,
        // options:[],
        // radioOptions:[],
       }
       if(userInput.type=="select")
       {
       const optionElements=document.getElementsByClassName('options');
       console.log(optionElements)
       for(i=0;i<optionElements.length;i++){
       var option={
       option_label:document.querySelectorAll('.options')[i].value,
       }
       options.push(option)
       option=options.map((item,index)=>({...item,optionId:index+1}))
       console.log(option)
       userInput.options=option;
    }
    }
    if(userInput.type=="radio"){
      const radioElements=document.getElementsByClassName('radios');
      console.log(radioElements)
      for(i=0;i<radioElements.length;i++){
        var radio={
            radio_label:document.querySelectorAll(".radios")[i].value,
        }
        console.log(radio)
        radioOptions.push(radio)
        radio=radioOptions.map((item,index)=>({...item,radioOptionId:index+1}))
        console.log(radio)
      }
      userInput.radioOptions=radio;
    }
    // userInput.options.push(option);
    // userInput.radioOptions.push(radio);
    // userInput.options.append(option);
    userInputs.push(userInput);
    document.forms[0].reset();
    userInput=userInputs.map((item,index)=>({...item,id:index+1}))
    console.log(userInput)
    localStorage.setItem("UserInputList",JSON.stringify(userInput));
}

const addButton = document.getElementsByClassName("add-button");
for(i=0;i<addButton.length;i++){
    addButton[i].addEventListener("click",addUserInput);
}
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click",submitForm);
function selectType(){
    var type=document.getElementById("type");
    console.log(type)
    console.log(type.value)
    if(type.value=="checkbox"){
    placeholder.style.display="none";
    minWidth.style.display ="none";
    maxWidth.style.display="none";
    dropDown.style.display="none";
    addBtn.style.display="none";
    slider.style.display="none";
    radio.style.display="none";
    }
    else if(type.value=="tel")
    {
    label.style.display="block";
    placeholder.style.display="block";
    minWidth.style.display ="block";
    maxWidth.style.display="block";
    dropDown.style.display="none";
    addBtn.style.display="none";
    radio.style.display="none";
    }
    else if(type.value=="text"){
        label.style.display="block";
        placeholder.style.display="block";
        minWidth.style.display ="block";
        maxWidth.style.display="block";
        dropDown.style.display="none";
        addBtn.style.display="none";
        slider.style.display='block';
        radio.style.display="none";
    }
    else if(type.value=="email")
   {
    label.style.display="block";
    placeholder.style.display="block";
    minWidth.style.display ="block";
    maxWidth.style.display="block";
    dropDown.style.display="none";
    addBtn.style.display="none";
    slider.style.display="block";
    radio.style.display="none";
   }
   else if(type.value=="select")
   {
    label.style.display="block";
    placeholder.style.display="none";
    minWidth.style.display ="block";
    maxWidth.style.display="block";
    dropDown.style.display="block";
    addBtn.style.display="block";
    required.style.display="none";
    radio.style.display="none";
   }
   else if(type.value=="range"){
    label.style.display="block";
    placeholder.style.display="none";
    minWidth.style.display ="none";
    maxWidth.style.display="none";
    dropDown.style.display="none";
    addBtn.style.display="none";
    required.style.display="none";
    slider.style.display="none";
    radio.style.display="none";
   }
   else if(type.value=="radio"){
    label.style.display="block";
    placeholder.style.display="none";
    minWidth.style.display ="block";
    maxWidth.style.display="block";
    addBtn.style.display="block";
    required.style.display="none";
    dropDown.style.display="none";
    radio.style.display="block";
   }
}
var i =1;
var newField1=document.createElement('input');
newField1.setAttribute('id',i);
newField1.setAttribute('class','options')
i++;
function addOptionValues(){
    var breakField1 =document.createElement('br');
    var spanField1 =document.createElement('span');
    var newField1=document.createElement('input');
    newField1.setAttribute('id',i);
    console.log(newField1)
    newField1.setAttribute('type','text');
    newField1.setAttribute('placeholder','enter dropdown Values');
    newField1.setAttribute('id',i);
    newField1.setAttribute('class','options')
    i++;
    spanField1.appendChild(breakField1);
    spanField1.appendChild(newField1);
    var s1 = document.createElement('span');
    var btn = document.createElement('input');
    btn.setAttribute('type','button');
    btn.setAttribute('value','-');
   btn.setAttribute('onclick','removeField(this)');
    s1.appendChild(btn);
    spanField1.appendChild(s1);
    dropDown.appendChild(spanField1);
}
function addRadioValues(){
    var breakField1 =document.createElement('br');
    var spanField1 =document.createElement('span');
    var newField1=document.createElement('input');
    newField1.setAttribute('id',i);
    console.log(newField1)
    newField1.setAttribute('type','text');
    newField1.setAttribute('placeholder','enter Radio Values');
    newField1.setAttribute('id',i);
    newField1.setAttribute('class','radios')
    i++;
    spanField1.appendChild(breakField1);
    spanField1.appendChild(newField1);
    var s1 = document.createElement('span');
    var btn = document.createElement('input');
    btn.setAttribute('type','button');
    btn.setAttribute('value','-');
   btn.setAttribute('onclick','removeField(this)');
    s1.appendChild(btn);
    spanField1.appendChild(s1);
    radio.appendChild(spanField1);
}

function removeField(element){
    element.parentElement.parentElement.remove();
}

