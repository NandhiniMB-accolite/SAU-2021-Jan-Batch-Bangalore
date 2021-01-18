function getname(){
    return this.firstname + this.lastname;
    }

function getbasic_det(){
    return "DOB "+this.dob + " Age "+this.age;
}
    
var user={
        firstname : "Nandhini",
        lastname  : "MB",
        roll_num : "1631032",
        dob : "28-04-1989",
        age : "31"
    }


function addOccup(){

    var form_elements = document.getElementById('form'); 
    user['occupation'] =  document.getElementById('ocu').value;
    alert("Occupation added successfuly");
    console.log(JSON.stringify(user));
}

function getEmp(){

   var func = getname.bind(user);
   alert(func());
   alert(getbasic_det.call(user));




}