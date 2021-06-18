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
    const cats = ["Milo", "Otis", "Garfield"];
    const copyOfCats = ['Broom', ...cats];
}
console.log(copyOfCats);


function prependCat(name){
    const cats = ["Milo", "Otis", "Garfield"];
    const copyOfCats = [...cats, 'Arnold'];
}


function removeLastCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    const copyOfCats = cats.slice(2);
}
console.log(copyOfCats);


function removeFirstCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    const copyOfCats = cats.slice(0);

}
console.log(copyOfCats);
