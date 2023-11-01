function urnaEletronica() {

    let voto;
    let votoscandidato1 = 0;
    let votoscandidato2 = 0;
    let votoscandidato3 = 0;
    let votosbrancos = 0;
    let totalVotos = 0;
    let nomeGanhador;
    let votosGanhador;
    let ganhador = true
    let nomeCandidato1;
    let nomeCandidato2;
    let nomeCandidato3;
    let encerrarVotacao = '';
    let senhaMesario;
    let votoinvalido;

    let confirmacao;
    let Correção;

    console.log('Inicio do Programa');
    console.log('** CONFIGURAÇÃO DA URNA **');
    senhaMesario = parseInt(prompt('Defina a senha do mesário:'));
   do{
    nomeCandidato1 = prompt('Digite o nome do candidato 1:');
    nomeCandidato2 = prompt('Digite o nome do candidato 2:');
    nomeCandidato3 = prompt('Digite o nome do candidato 3:');
    Correção = prompt('Deseja redefinir o nome do Candidato? Digite [S] para Sim ou [N] para Não').charAt(0).toUpperCase();
   }while(Correção === 'S');

    console.log('Encerramento')
    senhaMesario = parseInt(prompt('Defina a senha de encerramento do Mesario:'));

    do{

        console.clear();
        console.log('[1] Candidato 1: ' + nomeCandidato1);
        console.log('[2] Candidato 2: ' + nomeCandidato2);
        console.log('[3] Candidato 3: ' + nomeCandidato3);
        console.log('[5] Voto em branco');

        voto = parseInt(prompt('Digite sua opção de voto'));

        totalVotos++;

        switch (voto) {
        case 1:
                votoscandidato1++;
                console.log('O Candidato 1 recebeu um voto');
                //confirm
                confirmacao== prompt('Deseja realmente votar no candidato 1? Caso queira aletrar sua opção de voto digite [S] para alterar ou [N] para confirmar e prosseguir').charAt(0).toUpperCase();
                (confirmacao === 'S');
                break;

            case 2:
                votoscandidato2 ++;
                console.log('O Candidato 2 recebeu um voto');
                confirmacao== prompt('Deseja realmente votar no candidato 2? Caso queira aletrar sua opção de voto digite [S] para alterar ou [N] para confirmar e prosseguir').charAt(0).toUpperCase();
                break;

            case 3:
               votoscandidato3++;
                console.log('O Candidato 3 recebeu um voto');
                confirmacao== prompt('Deseja realmente votar no candidato 3? Caso queira aletrar sua opção de voto digite [S] para aletar ou [N] para confirmar e prosseguir').charAt(0).toUpperCase();
                break;

           case 5:
                votosbrancos++;
                console.log('Um voto Branco recebido');
                confirmacao== prompt('Deseja realmente votar em Branco? Caso queira aletrar sua opção de voto digite [S] para alterar ou [N] para confirmar e prosseguir').charAt(0).toUpperCase();
                break;
              case 6:
        prompt('Deseja REALMENTE encerrar a votação?');
        default:
        return;
        }
        } while (voto !== 0);

    console.clear();
    console.log('** BOLETIM DE URNA - RESULTADOS **');
    console.log('Total de votos: ' + totalVotos);
    console.log('Total de votos do(a) candidato(a) ' + nomeCandidato1 + ': ' + votosCandidato1 + ' voto(s) (' + (votosCandidato1 / totalVotos * 100) + '%)');
    console.log('Total de votos do(a) candidato(a) ' + nomeCandidato2 + ': ' + votosCandidato2 + ' voto(s) (' + (votosCandidato2 / totalVotos * 100) + '%)');
    console.log('Total de votos do(a) candidato(a) ' + nomeCandidato3 + ': ' + votosCandidato3 + ' voto(s) (' + (votosCandidato3 / totalVotos * 100) + '%)');
    console.log('Total de votos brancos: ' + votosBrancos+ ' voto(s) (' + (votosBrancos/ totalVotos * 100) + '%)');
    console.log('Total de votos nulos: ' + votosNulos + ' voto(s) (' + (votosNulos / totalVotos * 100) + '%)');
    console.log('Total de votos do(a) candidato(a) ' + nomeCandidato1 + ': ' + votosCandidato1 + ' voto(s) (' + (votosCandidato1 / totalVotos * 100).toFixed(2) + '%)');
    console.log('Total de votos do(a) candidato(a) ' + nomeCandidato2 + ': ' + votosCandidato2 + ' voto(s) (' + (votosCandidato2 / totalVotos * 100).toFixed(2) + '%)');
    console.log('Total de votos do(a) candidato(a) ' + nomeCandidato3 + ': ' + votosCandidato3 + ' voto(s) (' + (votosCandidato3 / totalVotos * 100).toFixed(2) + '%)');
    console.log('Total de votos brancos: ' + votosBrancos+ ' voto(s) (' + (votosBrancos/ totalVotos * 100).toFixed(2) + '%)');



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

//async function audioConfirmacao