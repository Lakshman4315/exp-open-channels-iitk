var t1=document.getElementById("t1");
var t2=document.getElementById("t2");
var t3=document.getElementById("t3");
var t4=document.getElementById("t4");
var t5=document.getElementById("t5");
var t6=document.getElementById("t6");
var t7=document.getElementById("t7");
var t8=document.getElementById("t8");
var t9=document.getElementById("t9");
var t10=document.getElementById("t10");
var t11=document.getElementById("t11");
var t12=document.getElementById("t12");


function calculate(){

    if(t1.querySelector("input").value=="" || t2.querySelector("input").value=="" || t3.querySelector("input").value=="" || t4.querySelector("input").value=="" || t5.querySelector("input").value=="" || t6.querySelector("input").value=="" || t7.querySelector("input").value=="" || t8.querySelector("input").value=="" || t9.querySelector("input").value=="" || t10.querySelector("input").value=="" || t11.querySelector("input").value=="" || t12.querySelector("input").value=="" ){
        alert("Please Fill all input fields or Enter valid values in all input fields.");
    }else{
        
        document.querySelector("#check-button").disabled = false
    }}

    function checkYourResult(){
        let flag=true
        if(t1.querySelector("input").value!=17.72){
            t1.querySelector("input").style.color="red"
            flag=false
        }
        
        // if(t2.querySelector("input").value!=laminar || Laminar){
        //     t2.querySelector("input").style.color="red"
        //     flag=false
        // }
        
        if(t3.querySelector("input").value!=3.54){
            t3.querySelector("input").style.color="red"
            flag=false
        }
        
        // if(t4.querySelector("input").value!=turbulent || Turbulent){
        //     t4.querySelector("input").style.color="red"
        //     flag=false
        // }
        
        if(t5.querySelector("input").value!=1.69){
            t5.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t6.querySelector("input").value!=8.42){
            t6.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t7.querySelector("input").value!=1.34){
            t7.querySelector("input").style.color="red"
            flag=false
        }
        
        // if(t8.querySelector("input").value!=laminar || Laminar){
        //     t8.querySelector("input").style.color="red"
        //     flag=false
        // }
        
        if(t9.querySelector("input").value!=8.47){
            t9.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t10.querySelector("input").value!=4.21){
            t10.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t11.querySelector("input").value!=6.70){
            t11.querySelector("input").style.color="red"
            flag=false
        }

        // if(t12.querySelector("input").value!=turbulent || Turbulent){
        //     t11.querySelector("input").style.color="red"
        //     flag=false
        // }
    }


        if(flag){
        
            for (let i = 0; i < 5; i++) {
                // document.querySelector(".result-table").style.display = "none"
                confetti();
              }
            
            alert("Congratulations! You have successfully completed the experiment.");
        }else{
            document.querySelector(".result-table").style.display = "flex"
        }     