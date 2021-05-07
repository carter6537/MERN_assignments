
// 1
var hello;
console.log(hello);                                   
hello = 'world';                                 
// expect: undefined

// 2
var needle;
function test(){
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();
// expect: magnet

// 3
var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);
// expect: super cool

// 4
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food);
eat();
// expect: chicken /n half-chicken

// 5
var mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
mean();
console.log(food);
console.log(food);
// expect: error, food isn't defined globaly

// 6
var genre;
console.log(genre);
genre = "disco";
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre);
// expect: undefined /n rock /n r&b /n disco

// 7
var dojo;
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
// expect: san jose /n seattle /n burbank /n san jose




