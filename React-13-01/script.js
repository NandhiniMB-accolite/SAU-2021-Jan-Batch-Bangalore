class abc{
    name="Nandini";
    #age = "25";
    static company="Accolite";
    ageCalc(){
        console.log(this.#age);

    }
}

const a = new abc();
console.log(a.name);
a.ageCalc();

class def extends abc{

}

const b= new def();
console.log(b.name);

console.log(abc.company);
console.log(def.company);
console.log(typeof(a)); //object
console.log(a instanceof abc);
const d = new Date();
if(typeof a == "object"){console.log(JSON.stringify(a));}
if(typeof d == "object" && d instanceof Date ){console.log(d.toISOString());}

// console.log(b.#age); //cannot access private member
//only can acess static func inside other static func