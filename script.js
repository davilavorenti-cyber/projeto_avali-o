// Dados reais e atualizados da Fase de Grupos da Copa do Mundo 2026
const dadosCopas = [
    {
        grupo: "A",
        selecoes: [
            { nome: "México", j: 1, v: 1, e: 0, d: 0, gp: 2, gc: 0 },
            { nome: "Coreia do Sul", j: 1, v: 1, e: 0, d: 0, gp: 2, gc: 1 },
            { nome: "República Tcheca", j: 1, v: 0, e: 0, d: 1, gp: 1, gc: 2 },
            { nome: "África do Sul", j: 1, v: 0, e: 0, d: 1, gp: 0, gc: 2 }
        ]
    },
    {
        grupo: "B",
        selecoes: [
            { nome: "Suíça", j: 1, v: 0, e: 1, d: 0, gp: 1, gc: 1 },
            { nome: "Canadá", j: 1, v: 0, e: 1, d: 0, gp: 1, gc: 1 },
            { nome: "Catar", j: 1, v: 0, e: 1, d: 0, gp: 1, gc: 1 },
            { nome: "Bósnia e Herzegovina", j: 1, v: 0, e: 1, d: 0, gp: 1, gc: 1 }
        ]
    },
    {
        grupo: "C",
        selecoes: [
            { nome: "Escócia", j: 1, v: 1, e: 0, d: 0, gp: 1, gc: 0 },
            { nome: "Marrocos", j: 1, v: 0, e: 1, d: 0, gp: 1, gc: 1 },
            { nome: "Brasil", j: 1, v: 0, e: 1, d: 0, gp: 1, gc: 1 },
            { nome: "Haiti", j: 1, v: 0, e: 0, d: 1, gp: 0, gc: 1 }
        ]
    },
    {
        grupo: "D",
        selecoes: [
            { nome: "Estados Unidos", j: 1, v: 1, e: 0, d: 0, gp: 4, gc: 1 },
            { nome: "Austrália", j: 1, v: 1, e: 0, d: 0, gp: 2, gc: 0 },
            { nome: "Turquia", j: 1, v: 0, e: 0, d: 1, gp: 0, gc: 2 },
            { nome: "Paraguai", j: 1, v: 0, e: 0, d: 1, gp: 1, gc: 4 }
        ]
    },
    {
        grupo: "E",
        selecoes: [
            { nome: "Alemanha", j: 1, v: 1, e: 0, d: 0, gp: 7, gc: 1 },
            { nome: "Costa do Marfim", j: 1, v: 1, e: 0, d: 0, gp: 1, gc: 0 },
            { nome: "Equador", j: 1, v: 0, e: 0, d: 1, gp: 0, gc: 1 },
            { nome: "Curaçao", j: 1, v: 0, e: 0, d: 1, gp: 1, gc: 7 }
        ]
    },
    {
        grupo: "F",
        selecoes: [
            { nome: "Suécia", j: 1, v: 1, e: 0, d: 0, gp: 5, gc: 1 },
            { nome: "Japão", j: 1, v: 0, e: 1, d: 0, gp: 2, gc: 2 },
            { nome: "Países Baixos", j: 1, v: 0, e: 1, d: 0, gp: 2, gc: 2 },
            { nome: "Tunísia", j: 1, v: 0, e: 0, d: 1, gp: 1, gc: 5 }
        ]
    },
    {
        grupo: "G",
        selecoes: [
            { nome: "Bélgica", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "Egito", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "Irã", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "Nova Zelândia", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 }
        ]
    },
    {
        grupo: "H",
        selecoes: [
            { nome: "Espanha", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "Cabo Verde", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "Arábia Saudita", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "Uruguai", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 }
        ]
    },
    {
        grupo: "I",
        selecoes: [
            { nome: "França", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "Senegal", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "Iraque", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "Noruega", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 }
        ]
    },
    {
        grupo: "J",
        selecoes: [
            { nome: "Argentina", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "Argélia", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "Áustria", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "Jordânia", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 }
        ]
    },
    {
        grupo: "K",
        selecoes: [
            { nome: "Portugal", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "Colômbia", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "Uzbequistão", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "RD Congo", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 }
        ]
    },
    {
        grupo: "L",
        selecoes: [
            { nome: "Inglaterra", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "Croácia", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "Panamá", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 },
            { nome: "Gana", j: 0, v: 0, e: 0, d: 0, gp: 0, gc: 0 }
        ]
    }
];

function processarEOrdenarGrupos(dados) {
    dados.forEach(grupo => {
        grupo.selecoes.forEach(sel => {
            sel.pts = (sel.v * 3) + sel.e;
            sel.sg = sel.gp - sel.gc;
        });

        // Critérios Oficiais da FIFA: Pontos -> Saldo de Gols -> Gols Pró -> Ordem Alfabética
        grupo.selecoes.sort((a, b) => {
            if (b.pts !== a.pts) return b.pts - a.pts;
            if (b.sg !== a.sg) return b.sg - a.sg;
            if (b.gp !== a.gp) return b.gp - a.gp;
            return a.nome.localeCompare(b.nome);
        });
    });
}

function renderizarTabelas() {
    const container = document.getElementById("grupos-container");
    container.innerHTML = "";

    processarEOrdenarGrupos(dadosCopas);

    dadosCopas.forEach(grupo => {
        let cardHTML = `
            <div class="grupo-card">
                <h3 class="grupo-title"><span class="grupo-badge">${grupo.grupo}</span> Grupo ${grupo.grupo}</h3>
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th style="text-align: left; padding-left: 15px;">SELEÇÃO</th>
                                <th>J</th>
                                <th>V</th>
                                <th>E</th>
                                <th>D</th>
                                <th>GP</th>
                                <th>GC</th>
                                <th>SG</th>
                                <th>PTS</th>
                            </tr>
                        </thead>
                        <tbody>
        `;

        grupo.selecoes.forEach((sel, index) => {
            const numPos = index + 1;
            
            // Define o estilo dos círculos de qualificação: 1º Verde, 2º Azul, 3º Laranja, 4º sem fundo
            let classePos = `bg-pos-${numPos}`;
            if (numPos > 4) classePos = 'bg-pos-4';

            let sgFormatado = sel.sg;
            let classeSg = "";
            if (sel.sg > 0) { sgFormatado = `+${sel.sg}`; classeSg = "sg-positivo"; }
            else if (sel.sg < 0) { classeSg = "sg-negativo"; }

            cardHTML += `
                <tr>
                    <td class="col-selecao">
                        <span class="pos-badge ${classePos}">${numPos}º</span>
                        ${sel.nome}
                    </td>
                    <td>${sel.j}</td>
                    <td>${sel.v}</td>
                    <td>${sel.e}</td>
                    <td>${sel.d}</td>
                    <td>${sel.gp}</td>
                    <td>${sel.gc}</td>
                    <td class="${classeSg}">${sgFormatado}</td>
                    <td class="col-pts">${sel.pts}</td>
                </tr>
            `;
        });

        cardHTML += `
                        </tbody>
                    </table>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

document.addEventListener("DOMContentLoaded", renderizarTabelas);