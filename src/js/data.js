const data = [
    {
        "anime": "Guerreiro",
        "name": ['Cavaleiro', 'Gladiador'],
        "desc": [
            '->Habilidade unica: Capacidade de parry elevada, ao usar escudos leves a capacidade de atodoar o inimigo num parry certeiro é instântanea. \n ->Proeficiência: Uso de espadas curtas e escudos pequenos. \n ->Status fixos: Força: 10, Agilidade: 5, Resistência: 5. \n ->karma: Legal -> karmaPercent: 70',
            '->Habilidade unica: A capacidade de desviar de golpes pode ser algo essêncial em uma luta ate a morte. Sua chance é de 20% em golpes decisivos. \n ->Proeficiência: Extremamente versatil em lutas de espada de uma mão ou duas. \n ->Status fixos: Força: 5, Resistência: 15  \n ->karma: Neutro -> karmaPercent: 50'
        ],
        "tokens": ['1t.png', '2t.png'],
        "wpp": ['1w.png', '2w.png'],
        "video": "1w.mp4"
    },
    {
        "anime": "Atirador",
        "name": ['Sniper', 'Arqueiro'],
        "desc": [
            '->Habilidade unica: Quanto maior for a dificuldade de manusear a arma e a distância o poder de ataque sera maior. \n ->Proeficiência: Armas de fogo são seu diferencial. \n ->Status fixos: Destreza: 12, Agilidade: 8. \n ->karma: Neutro -> karmaPercent: 50',
            '->Habilidade unica: Armas de tiro unico e de dificuldade elevada, podem conter um debuff aleatorio a cada sequência de tiro. \n ->Proeficiência: Armas de tiro unico podem ser unicas. \n ->Status fixos: Destreza: 10, Agilidade: 8, percepção: 2.  \n ->karma: Perdido -> karmaPercent: 40'
        ],
        "tokens": ['1t.png', '2t.png'],
        "wpp": ['1w.png', '2w.png'],
        "video": "1w.mp4"
    },
    {
        "anime": "Assasin",
        "name": ['Ninja', 'Sicário'],
        "desc": [
            '->Habilidade unica: Habilidade de furtividade aprimorada no qual tem maiores chances do inimigo lhe perder de vista e o ataque ser critico se ele não ver. \n ->Proeficiência: Uso de venenos, adagas , facas e dual blades. . \n vStatus fixos: Destreza: 10, Percepção: 5, Força: 5. \n ->karma: Mal-Encaminhado -> karmaPercent: 30',
            '->Habilidade unica: A maestria em combate faz com que qualquer arma de cunho perfurante tenham chances de critico maiores ou causar feridas de sangramento. \n ->Proeficiência: Armas perfurantes de cunho leve tem seu charme entre sua laia. . \n ->Status fixos: Destreza: 15, Agilidade: 10. \n ->karma: Maligno -> karmaPercent: 10'
        ],
        "tokens": ['1t.png', '2t.png'],
        "wpp": ['1w.png', '2w.png'],
        "video": "1w.mp4"
    },
    {
        "anime": "Berserker",
        "name": ['Ensandecido', 'Destruidor'],
        "desc": [
            '->Habilidade unica: Capacidade de suportar um golpe mortal e se manter de pé, dependendo do contra ataque a vida pode ser restaurada 10%. \n ->Proeficiência: Armas com alto poder de ataque e pesadas. \n ->Status fixos: Força: 13, Resistência: 6, Agilidade: 6. \n ->karma: Mal amado -> karmaPercent: 20',
            'Habilidade unica: Se torna imune a qualquer ataque ou habilidade de debuff na area, enquanto estiver atacando. . \n ->Proeficiência: Carregando ate duas armas ele não ira para de forma alguma. \n ->Status fixos: Força: 15, Resistência: 5, agilidade: 5. \n ->karma: Desonesto -> karmaPercent: 30'
        ],
        "tokens": ['1t.png', '2t.png'],
        "wpp": ['1w.png', '2w.png'],
        "video": '1w.mp4'
    },
    {
        "anime": "Mago",
        "name": ['Feiticeiro', 'Necromante'],
        "desc": [
            '->Habilidade unica: Invocações de feitiços tem maiores chances de funcionarem de maneira perfeita sem uso de artefatos. \n ->Proeficiência: Livros, cajados, varinhas e runas podem se torna uteis. \n ->Status fixos: Vitalidade: 4, Agilidade: 4, Inteligência: 12  \n ->karma: Neutro -> karmaPercent: 50',
            '->Habilidade unica: Dependendo da criatura que você tiver proeficiência maior, tem chance dela usar uma das habilidades antes de ser morta. \n ->Proeficiência: Orbe, pactos de sangue e caveiras podem ser seu diferencial. . \n ->Status fixos:  \n ->karma: Mal em si -> karmaPercent: 0'
        ],
        "tokens": ['1t.png', '2t.png'],
        "wpp": ['1w.png', '2w.png'],
        "video": "1w.mp4"
    },
    {
        "anime": "Paladino",
        "name": ['Guardião', 'Justiceiro'],
        "desc": [
            '->Habilidade unica: O uso de escudos ao inves de arma o torna capaz de sofrer metade do dano de qualquer arma, mas o dano ocasionado por si é 25% inferior. \n ->Proeficiência: Escudos pesados ou sagrados. \n ->Status fixos: Resistência: 12, Vida: 8.  \n ->karma: Justo -> karmaPercent: 90',
            '->Habilidade unica: Tem uma capacidade maior de persuasão, mas seres maleficos ficam mais agressivos ao seu redor. \n ->Proeficiência: Dizem que seu corpo é sua propria arma, sem limites? \n ->Status fixos: Força: 8, Defesa: 9, Agilidade: 8. \n ->karma: Perdido -> karmaPercent: 40'
        ],
        "tokens": ['1t.png', '2t.png'],
        "wpp": ['1w.png', '2w.png'],
        "video": "1w.mp4"
    },
    {
        "anime": "Espiritualista",
        "name": ['Pactualista', 'Xamã'],
        "desc": [
            '->Habilidade unica: Sua vida e mana se tornam um só com o ser que fez contratos. \n ->Proeficiência: Os demonios ou qual criatura se filiar lhe fornecerar poder. \n ->Status fixos: Inteligência: 11, Vida Espiritual: 14. \n ->karma: mal encaminhado -> karmaPercent: 20',
            '->Habilidade unica: Ataques mentais ou de cunho espiritual tem seus efeitos reduzidos ou cessados baseados na própria resistência do mesmo. \n ->Proeficiência: Os espiritos do qual se concilia favorecem seus poderes. \n Status fixos: Inteligência: 9, Resistência: 11.  \n ->karma: Neutro -> karmaPercent: 50'
        ],
        "tokens": ['1t.png', '2t.png'],
        "wpp": ['1w.png', '2w.png'],
        "video": "1w.mp4"
    },
    {
        "anime": "Desbravador",
        "name": ['Explorador', 'Caçador'],
        "desc": [
            '->Habilidade unica: Capacidade de identificar pistas e interliga-las. \n ->Proeficiência: Criar poções e itens de assistência podem ser mais uteis do que comprando. \n ->Status fixos: Percepção: 15, Resistência: 5. \n ->karma: Neutro -> karmaPercent: 50',
            '->Habilidade unica: Capacidade de rastrear ou mapear a região de monstros. \n ->Proeficiência: As armas desenvolvidas por si de uso quantitativo podem ser essênciais contra certos monstros. . \n ->Status fixos: Percepção: 15, Agilidade: 5.  \n ->karma: Neutro -> karmaPercent: 50'
        ],
        "tokens": ['1t.png', '2t.png'],
        "wpp": ['1w.png', '2w.png'],
        "video": "1w.mp4"
    }
]
