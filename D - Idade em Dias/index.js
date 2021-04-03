var input = 400

function IdadeEmDias(data) {

    const dias = data;

    const ano = 365;//dias
    const mes = 30; //dias
    const meses = 12; //meses

    const anos = parseInt(dias / ano); //ano

    const totalMeses = parseInt(dias / mes) - (anos * meses);

    const diasRestantes = (dias - (anos * ano) - (totalMeses * mes));

    return console.log(
        anos + ' ano(s)\n' +
        totalMeses + ' mes(es)\n' +
        diasRestantes+' dia(s)'
    );
}

IdadeEmDias(input);
