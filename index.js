// Write your solution here!
const cats = ["Milo", "Otis","Garfield"];


function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}

//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged

function appendCat(name){ 
    const copyOfCats = [...cats,name];
    return copyOfCats;
}

function prependCat(name){
    const copyOfCats = [...cats];
    copyOfCats.unshift(name);
    return copyOfCats;
}

function removeLastCat(){
    const copyOfCats = [...cats];
    copyOfCats.pop();
    return copyOfCats;
}

function removeFirstCat(){
    const copyOfCats = [...cats];
    copyOfCats.shift();
    return copyOfCats;
}

