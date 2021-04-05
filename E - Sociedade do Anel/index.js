var input = `9
Frodo X
Gandalf M
Pippin X
Sam X
Aragorn H
Legolas E
Gimli A
Boromir H
Merry X`;
var lines = input.split('\n');

var hobbits = 0;
var humans = 0;
var elfs = 0;
var dwarfs = 0;
var wizards = 0;

// lines.find(
//   (item) => {
//     if (item.endsWith("X")) hobbits++;
//     if (item.endsWith("H")) humans++;
//     if (item.endsWith("E")) elfs++;
//     if (item.endsWith("A")) dwarfs++;
//     if (item.endsWith("A")) wizards++;
//   })

// console.log(hobbits+' Hobbit(s)')
// console.log(humans+' Humano(s)')
// console.log(elfs+' Elfo(s)')
// console.log(dwarfs+' Anão(s)')
// console.log(wizards+' Mago(s)')

for (i = 0; i < lines.length ; i++) {
  if (lines[i].endsWith("X")) hobbits ++;
  if (lines[i].endsWith("H")) humans++;
  if (lines[i].endsWith("E")) elfs++;
  if (lines[i].endsWith("A")) dwarfs++;
  if (lines[i].endsWith("A")) wizards++;
}

console.log(hobbits+' Hobbit(s)')
console.log(humans+' Humano(s)')
console.log(elfs+' Elfo(s)')
console.log(dwarfs+' Anão(s)')
console.log(wizards+' Mago(s)')