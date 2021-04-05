var input = "7 10 8 9"
var lines = input.split(" ")

var horaInicial = parseInt(lines[0])
var minutoInicial = parseInt(lines[1])
var horaFinal = parseInt(lines[2])
var minutoFinal = parseInt(lines[3])

if (isNaN(minutoFinal+horaFinal+minutoInicial+horaInicial)) throw Error( console.error("Identação incorreta"))

var hora = 60 // minutos

var razaoHora = parseInt(horaFinal - horaInicial) // 2 horas
var razaoMinuto = parseInt(minutoFinal - minutoInicial) // 2 minutos

var duracaoHoraParsed = razaoHora * hora // 120 minutos

var duracaoEmMin = duracaoHoraParsed + razaoMinuto //122 minutos

var duracaoHoras = parseInt(duracaoEmMin/hora) // 2 horas

var duracaoMinutos = ((duracaoHoras*hora)-(duracaoEmMin))*-1

var duracaoHorasException = (horaInicial===horaFinal) ? 24: duracaoHoras ;

if ((duracaoMinutos < 0) || (duracaoHorasException < 0) ) console.error("Tempo inválido!");
else console.log("O JOGO DUROU "+ duracaoHorasException+" HORA(S) E "+duracaoMinutos+" MINUTO(S)");
