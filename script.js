document.addEventListener('DOMContentLoaded', () => {
    const placares = document.querySelectorAll('.placar');

    // Monitora as alterações nos campos de placar
    placares.forEach(input => {
        input.addEventListener('input', (e) => {
            const jogoId = e.target.getAttribute('data-jogo');
            const tipoTime = e.target.getAttribute('data-time');
            const gols = e.target.value;

            console.log(`Jogo ${jogoId} - ${tipoTime}: ${gols} gols`);
            
            // Aqui você pode rodar a lógica para recalcular 
            // as tabelas de classificação automaticamente.
            atualizarClassificacao(jogoId);
        });
    });
});

function atualizarClassificacao(jogoId) {
    // Seleciona os inputs do jogo modificado
    const mandanteInput = document.querySelector(`[data-jogo="${jogoId}"][data-time="mandante"]`);
    const visitanteInput = document.querySelector(`[data-jogo="${jogoId}"][data-time="visitante"]`);

    if (mandanteInput.value !== "" && visitanteInput.value !== "") {
        const golsMandante = parseInt(mandanteInput.value);
        const golsVisitante = parseInt(visitanteInput.value);

        if (golsMandante > golsVisitante) {
            console.log("Vitória do Mandante");
        } else if (golsVisitante > golsMandante) {
            console.log("Vitória do Visitante");
        } else {
            console.log("Empate");
        }
    }
}