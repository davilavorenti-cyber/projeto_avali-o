# projeto_avali-o
https://www.figma.com/make/gc2kOECGrjxyL78TMpdEFr/Tabela-Copa-do-Mundo-2026?t=kRKnzJTLSWFjcRPB-1

Estrutura Geral e Funcionamento
O sistema funciona como uma engrenagem dividida em três partes independentes, onde cada uma tem um papel muito claro:

A Base Visual (HTML): Cria o "esqueleto" e o espaço vazio onde as tabelas vão morar.

O Visual e Estilo (CSS): Define o design, as cores inspiradas no torneio (verde escuro, branco e cinza) e o comportamento responsivo para que tudo caiba na tela do celular ou do computador.

O Cérebro da Página (JavaScript): Guarda os dados reais das seleções, calcula automaticamente quem está na frente e desenha as tabelas atualizadas dentro do HTML.

🧭 O que cada componente faz na tela
1. Cabeçalho Principal (Topo da Página)
Identificação do Torneio: Exibe o nome da competição, o ano (2026), os países sedes e a quantidade de seleções para que o usuário saiba exatamente onde está.

Painel de Legendas: Funciona como um guia visual fixo. Ele explica o significado das cores das "bolinhas" de classificação (Verde para o líder, Azul para o vice-líder e Laranja para os melhores terceiros colocados que ainda têm chance).

2. Os Cartões de Grupos (Cards)
A tela é dividida em blocos independentes (do Grupo A ao Grupo L). Cada bloco tem:

Identificador do Grupo: Uma aba destacada no topo com a letra do grupo correspondente.

Tabela de Classificação: Uma grade organizada em linhas e colunas para listar os quatro países daquela chave.

3. As Colunas de Dados (Dentro de cada tabela)
Cada coluna tem uma função específica para ajudar a entender o desempenho dos times:

Posição (1º a 4º): Mostra a colocação atual do time no grupo, acompanhada da cor correspondente ao seu destino no campeonato.

Seleção: O nome do país.

J (Jogos): Mostra quantas partidas aquela seleção já disputou até o momento.

V / E / D (Vitórias, Empates, Derrotas): O histórico detalhado dos resultados do time em campo.

GP / GC (Gols Pró, Gols Contra): Mostram a eficiência do ataque (gols feitos) e da defesa (gols sofridos).

SG (Saldo de Gols): É o resultado da subtração dos gols feitos pelos sofridos. Ele serve como o principal critério de desempate e muda de cor automaticamente (fica verde se o time fez mais gols do que levou, ou vermelho se levou mais gols do que fez).

PTS (Pontos): É o valor mais importante da tabela. Ele junta as vitórias e empates para dar a pontuação final da seleção e ditar quem fica no topo.

🔄 O Fluxo Automático de Atualização
Quando a página é aberta, o seguinte fluxo acontece nos bastidores:

Os dados brutos de jogos e gols são lidos pelo sistema.

O sistema calcula sozinho os pontos finais e o saldo de gols de cada país.

As seleções de cada grupo são comparadas e reordenadas de cima para baixo, seguindo as regras oficiais de desempate (quem tem mais pontos fica em cima; se empatar, quem tem melhor saldo fica em cima, e assim por diante).

A tela é montada instantaneamente com todos os times já nas suas posições corretas e com as cores de classificação atualizadas.
