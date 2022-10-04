function myFunc1(x){
    x.style.color="blue";
    x.style.textDecoration="underline";
    x.style.fontSize="2em";
}
function myFunc2(y){
    y.style.color="black";
    y.style.textDecoration="none";
    y.style.fontSize="1.5em";
}
function showMessage(form){
    
   let fname=form["fname"].value;
   let lname=form["lname"].value;
   let fathername=form["fathername"].value;
   let address=form["address"].value;

   if((fname.length==0) && (lname.length==0) && (fathername.length==0) && (address.length==0)){
       alert("Sorry, \nFill your details");
   }
   else{

       alert("Hi"+",\n"+"Your application is submitted."+"\n"+" We will contact you within 2 business days");
   }
}
function validValue(form){

    let courses=form["noofcourses"].value;
    if(courses<3){
        
        document.getElementById("noofcourses").style.border= "2px solid red";
        alert("number of courses should be more than 3");
    }
    

}

function calculateFees(form){
    let fees = 0;
    let courses=form["noofcourses"].value;
    let result=document.getElementById("fees");

    if(document.getElementById("yes").checked==true)
           fees = 530;
    else
            fees = 400;

    if(document.getElementById("science").checked==true)
                fees= fees+100;
    else if(document.getElementById("arts").checked==true)
                fees=fees+50;
    else
                fees=fees+70;

  
    let totalfees = fees*courses;
    result.innerHTML= totalfees;

}
let image=[];
 let currentImg=0;

 image[0]= 'images/starcollegeView.png';
 image[1]= 'images/collegeimage4.jpg';
 image[2]= 'images/collegemain2.jpg';
 image[3]= 'images/collegemain4.jpg';

 image[4]= 'images/collegemain3.jpg';
 image[5]= 'images/collegemain5.jpg';

 function animateImage(){
     if(currentImg == 5)
         currentImg = 0;
     else
        currentImg++;
        document.querySelector('#change_img').src=image[currentImg];
 }

 let start = setInterval(animateImage,5000);


 function calculateScholarship(){
     let result=document.querySelector("#result_scholar");
     let amount=document.getElementsByName("gpa");

     let scholar=0;
     for(let input of amount){
         if(input.checked)
         scholar=input.value;
     }

     result.innerHTML="Your scolarship will be: $"+ scholar;

 }


let first=document.querySelector("#title");
first.addEventListener("mouseenter", function() {
    first.style.color="red";
    first.style.fontSize="250%"
})
first.addEventListener("mouseout", function(){
    first.style.color="blue";
    first.style.fontSize="200%";
})

let fieldSet1=document.querySelector("#fieldSet1");
fieldSet1.addEventListener("click", function(){
    fieldSet1.style.backgroundColor="lightblue";
})
fieldSet1.addEventListener("mouseout", function(){
    fieldSet1.style.backgroundColor="lightgreen";
})

let fieldSet2=document.querySelector("#fieldSet2");
fieldSet2.addEventListener("click", function(){
    fieldSet2.style.backgroundColor="lightgreen";
})
fieldSet2.addEventListener("mouseout", function(){
    fieldSet2.style.backgroundColor="lightblue";
})