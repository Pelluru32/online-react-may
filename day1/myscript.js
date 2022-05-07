let hero = {
    title : "Spiderman",
    fname : "Peter",
    lname : "Parker",
    city : "New York"
};

/* let temphero = hero;

console.log(temphero.title);
console.log(hero.title);
temphero.city = "Metropolis";
console.log(temphero.city);
console.log(hero.city);//??? */

/*  
var herotitle = hero.title;
var herofname = hero.fname;
var herolname = hero.lname;
var herocity = hero.city; 
*/

/*  let {title : herotitle, fname : herofname, lname : herolname, city : herocity} = hero;

console.log(herotitle);
console.log(hero.title);
console.log(herocity);

herocity = "Metropolis";

console.log(herocity);
console.log(hero.city); */

// let {title : title, fname : fname, lname : lname, city : city} = hero;
let {title, fname, lname, city} = hero;

console.log(title);
console.log(hero.title);
console.log(city);

city = "Metropolis";

console.log(city);
console.log(hero.city);