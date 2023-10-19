function urnaEletronica() {

    let Voto;
    let VotosCandidato1 = 0;
    let VotosCandidato2 = 0;
    let VotosCandidato3 = 0;
    let VotosBrancos = 0;
    let VotosNulos = 0;
    let TotalVotos = 0;
    let NomeGanhador;
    let VotosGanhador;
    let ganhador = true
    let nomeCandidato1;
    let nomeCandidato2;
    let nomeCandidato3;
    let encerrarVotacao = '';
    let senhaMesario;

    console.log('Inicio do Programa');

    console.log('** CONFIGURAÇÃO DA URNA **');
    senhaMesario = parseInt(prompt('Defina a senha do mesário:'));
    nomeCandidato1 = prompt('Digite o nome do candidato 1:');
    nomeCandidato2 = prompt('Digite o nome do candidato 2:');
    nomeCandidato3 = prompt('Digite o nome do candidato 3:');

    do{

        console.clear();
        console.log('[1] Candidato 1: ' + nomeCandidato1);
        console.log('[2] Candidato 2: ' + nomeCandidato2);
        console.log('[3] Candidato 3: ' + nomeCandidato3);
        console.log('[5] Voto em branco');
        console.log('[8] Voto nulo');

        voto = parseInt(prompt('Digite sua opção de voto'));

        switch (voto) {
        case 1:
                VotosCandidato1++;
                console.log('O Candidato 1 recebeu um voto');
                break;
            case 2:
                VotosCandidato2 ++;
                console.log('O Candidato 2 recebeu um voto');
                break;
            case 3:
               VotosCandidato3++;
                console.log('O Candidato 3 recebeu um voto');
                break;
           case 5:
                VotosBrancos++;
                console.log('Um voto Branco recebido');
                break;
            case 8:
                VotosNulos++;
                console.log('Um voto Nulo recebido');
                break;
              prompt('Deseja REALMENTE encerrar a votação?');
        default:
        return;

        } while (voto !== 0);
    

        console.clear()
        console.log('** BOLETIM DE URNA - RESULTADOS **');
        console.log('Total de votos: ' + totalVotos);
        console.log('Total de votos do candidato 1: ' + votosCandidato1 + ' voto(s) (' + (votosCandidato1 / totalVotos * 100) + '%)');
        console.log('Total de votos do candidato 2: ' + votosCandidato2 + ' voto(s) (' + (votosCandidato2 / totalVotos * 100) + '%)');
        console.log('Total de votos do candidato 3: ' + votosCandidato3 + ' voto(s) (' + (votosCandidato3 / totalVotos * 100) + '%)');
        console.log('Total de votos brancos: ' + votosBrancos+ ' voto(s) (' + (votosBrancos/ totalVotos * 100) + '%)');
        console.log('Total de votos nulos: ' + votosNulos + ' voto(s) (' + (votosNulos / totalVotos * 100) + '%)');


    //Determine Ganhador
    if (votosCandidato1 > votosCandidato2 && votosCandidato1 > votosCandidato3) {
        nomeGanhador = 'Candidato 1';
        votosGanhador = votosCandidato1 + votosBrancos;
    } else if (votosCandidato2 > votosCandidato1 && votosCandidato2 > votosCandidato3) {
        nomeGanhador = 'Candidato 2';
        votosGanhador = votosCandidato2 + votosBrancos;
    } else if (votosCandidato3 > votosCandidato1 && votosCandidato3 > votosCandidato2) {
        nomeGanhador = 'Candidato 3';
        votosGanhador = votosCandidato3 + votosBrancos;
    } else {
        ganhador = false;
    }

    // apresenta o ganhador
    console.log('------');

    if (ganhador) {
        console.log('O ganhador nesta urna foi o candidato ' + nomeGanhador + ' com ' + votosGanhador + ' voto(s) absoluto(s) (' + (votosGanhador / totalVotos * 100) + '%)');
    } else {
        console.log('Não houve ganhador nesta urna (empate entre dois ou mais candidatos).');
    }

    }

}