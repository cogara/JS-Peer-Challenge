var provided = 'Hello World!';

//1
console.log(provided.substring(0, 1).length);

//NaN
console.log(Number(provided));

//['H', 'e', 'l', 'l', 'o']
console.log(provided.substring(0, 5).split(''));

//'string'
console.log(typeof provided);

//9
console.log(provided.substring(0, 9).length);

//'e'
console.log(provided.charAt(1));

//"HELLO WORLD!"
console.log(provided.toUpperCase());

//"Hello World?"
console.log(provided.replace('!', '?'));

console.log('');
console.log("##Hard Mode!");
//"'ello"
console.log(provided.replace('H', '\'').substring(0,5));

//"!dlroW olleH"
console.log(provided.split('').reverse().join(''));

//"1111"
console.log(provided.substring(0, 1).length.toString().repeat(4));

//["Hello","World!"]
console.log(provided.split(' '));
