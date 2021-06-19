const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push('Ralph');
}



function destructivelyPrependCat(name) {
    cats.unshift("Bob");

}


function destructivelyRemoveLastCat() {
    cats.pop();

}


function destructivelyRemoveFirstCat() {
    cats.shift();

}



function appendCat(name) {
    return [...cats, name];
}
console.log(appendCat(Broom));


function prependCat(name){
  return [name, ...cats];
}
console.log(prependCat(Arnold));





function removeLastCat() {
    return cats.slice(0, -1);
}



function removeFirstCat() {
    return cats.slice(1);
}
