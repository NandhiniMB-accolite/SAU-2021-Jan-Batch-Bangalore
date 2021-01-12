function checkPrimeFactors(){
var inp = document.getElementById("num").value;
// alert(inp);
var prime_arr=[];
for(let i=0;i<=(inp/2)+1;i++)
{
    prime_arr.push(true);
}
for(let i=2;i<=(inp/2);i++)
{
        if(prime_arr[i] == true)
        {
            for(let j=2;j<(inp/2);j++){
                    prime_arr[i*j]=false;
              }

        }
}
// for(let i=2;i<=(inp/2)+1;i++)
// {
//     if(prime_arr[i]==true)
//      alert(i);
// }
var res=[];
for(let i=2;i<(inp/2);i++){
if(inp%i==0 && prime_arr[i]==true){
    res.push(i);
}
}
alert(res);
}

function toggleCase(){
    var inp = document.getElementById("string").value;
    var res="";
    for(let i=0;i<inp.length;i++)
    {
       
        if(inp[i].toLowerCase()  === inp[i])
        {
            res=res+inp[i].toUpperCase();
        }
        else{
            res=res+inp[i].toLowerCase();
        }
    }
    alert(res);
}

function testDigit() {
    var inp = document.getElementById("same_digit").value;
    var first = inp % 10;
    var res=true;
    while (inp) {
            if (inp % 10 !== first){
                res=false;
            }
          inp = Math.floor(inp / 10);
    }
   alert(res);
  }

  function sumDigit() {
    var inp = document.getElementById("sum_digit").value;
    var sum=0;
    while (inp) {
          let mod = inp % 10;
          sum=sum+mod;
          inp = Math.floor(inp / 10);
    }
   alert(sum);
  }

  function validate()
  {
      
      var form_elements = document.getElementById('form').elements;

      var person={
          firstname : document.getElementById("fname").value,
          lastname  : document.getElementById("lname").value,
          email    : document.getElementById("email").value,
          gender    : form_elements['gender'].value,
          type    : form_elements['type'].value,
          

      };


    console.log(JSON.stringify(person));
    alert(JSON.stringify(person));




  }