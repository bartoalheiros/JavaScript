const texto = `
PAGAMENTO DO MÊS DE FEVEREIRO 

DATA DE PAGAMENTOS DOS ALUNOS .

01: Matheus: 80 (04/02) ✅

02: Davi: 80 (. 04/02)✅

03: MIGUEL NOBRE: 135 (05/02) ✅

04: Anthony Raphael Almeida: 130 (05/02)✅

05: Helô: 135 (07/02)✅

06: Daniel: 90  ( 07/02)✅

07: Wallyson: 135 (08/02)✅

08: Gabriel Fonseca: 135 (08/02)✅

09: Maria Eduarda: 135 (10/02)✅

10:  Antônio: 125 (10/02)✅

11: Heitor: 125 ( 10/02)✅

12: Paloma: 80 ( 10/02)✅

13: Davi Peixoto: 90 (10/02)✅

14: Alexandre: 135 ( 10/02)✅

15: Theo: 135 ( 11/02) ✅

16: João: 90 (16/02)✅

17: Thalles: 135 ( 18/02)✅

18: Samuel dias: 80 (19/02)✅

19: Gabriel dias: 80 (19/02)✅

20: Heitor Mattos: 90 (19/02)✅

21: Juan 135 ( 20/02)

22: Berg: 135 ( 20/02)✅

23: Ana: 135 ( 20/02)✅

24: Cecília: 135 ( 20/02) ✅

25: Junior: 135 ( 25/02)

26: Alan: 90 (27/02)

27: Bartô: 100 ( 27/02) 

28: Ágata sofia: 80 ( 28/02)

29: Monique: 135 ( 28/02)

30: Sara: 135 ( 28/02)

31: Eduardo: 135 (28/02)

32: Heitor arieta: 90 ( 28/02)

33: Joaquim Braz: 135 ( 28/02)

34: Jullia: 80 ( 28/02)

35: Helô 80 ( 28/02)

36: Anthony: 135 (21/02)
`;

const texto_test = `

01: Matheus: 80 (04/02) ✅

02: Davi: 80 (. 04/02)✅

03: MIGUEL NOBRE: 135 (05/02) ✅

04: Anthony Raphael Almeida: 130 (05/02)✅
`;

// Função para extrair e somar os valores
function processarTexto(texto) {
  // Regex para capturar o valor antes do parêntese
  const regex = /(\d+):\s*([^:]+):\s*(\d+)\s*\(/g;
  let match;
  let somaTotal = 0;

  while ((match = regex.exec(texto)) !== null) {
      const nome = match[2].trim();
      const valor = parseInt(match[3], 10);
      somaTotal += valor;

      console.log(`Nome: ${nome}, Valor: ${valor}`);
  }

  console.log(`Soma total dos valores: ${somaTotal}`);
}

// Executar a função
processarTexto(texto_test);