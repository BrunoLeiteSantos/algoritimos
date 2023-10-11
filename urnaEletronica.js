function urnaEletronica() {

    console.log('n\n Opções de votação');
    console.log('|1| Candidato 1');
    console.log('|2| Candidato 2');
    console.log('|3| Candidato 3');
    console.log('|5| Branco');
    console.log('|8| Nulo');
    console.log('|0| Encerrar a votação');

    voto = parseInt(prompt('Digite sua opção de voto'));

        switch (voto) {
            case 1:
                TotaldeVotosCandidato1++;
                console.log('O Candidato 1 recebeu um voto');
                break;
            case 2:
                TotaldeVotosCandidato2++;
                console.log('O Candidato 2 recebeu um voto');
                break;
            case 3:
               TotaldeVotosCandidato3++;
                console.log('O Candidato 3 recebeu um voto');
                break;
           case 5:
                TotaldeVotosBrancos++;
                console.log('Um voto Branco recebido');
                break;
            case 8:
                TotaldeVotosNulos++;
                console.log('Um voto Nulo recebido');
                break;
        default:
        return;

        let
}
}