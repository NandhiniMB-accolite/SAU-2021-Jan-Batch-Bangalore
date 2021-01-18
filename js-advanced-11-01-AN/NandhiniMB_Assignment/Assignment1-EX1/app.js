
class input {
    constructor(param) {
        this.input = param;
    }
    calculateLength() {
        console.log(input.length)
        return this.input.length;
    };
    getUpperCase() {
        console.log(this.input.toUpperCase());
        return this.input.toUpperCase();
    };
    getLowerCase() {
        console.log(this.input.toLowerCase());
        return this.input.toLowerCase();
    };
    seperate(){
        var res1="";
        var res2="";
        for(let i=0;i<this.input.length;i++)
        {
            if(this.input[i]=='a' || this.input[i]=='e' || this.input[i]=='i' || this.input[i]=='o' || this.input[i]=='u' )
            {
               res1 = res1+this.input[i];
            }
            else
               res2 = res2+this.input[i];
        }
        console.log(res1+res2);
        return res1+res2;
    }
}


    
function callBack(){
    let inputObject = new input(inputValue);
    document.getElementById("lengthOp").innerHTML = inputObject.calculateLength();
    document.getElementById("ucOp").innerHTML = inputObject.getUpperCase();
    document.getElementById("lcOp").innerHTML = inputObject.getLowerCase();
    document.getElementById("sep").innerHTML = inputObject.seperate();
}


function callFunction(callBack) {
var inputValue = document.getElementById("inputTxt").value;

(function(){
    try {
        let regex = /^[A-Za-z]+$/;
        if(!regex.test(inputValue))
                throw new Error("Not a valid string");       
    }
    catch(err){
        document.getElementById("err").innerHTML = "Error has occured " + err.message;
        return false;
    }
    callBack(inputValue);
})();

}