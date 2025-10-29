const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
    // === Testes para o Bloco 1 (1-10) ===
    test('1. deve somar dois números positivos', () => {
        expect(soma(2, 3)).toBe(5);
    });
    test('2. deve subtrair dois números positivos', () => {
        expect(subtracao(5, 2)).toBe(3);
    });
    test('3. deve multiplicar dois números positivos', () => {
        expect(multiplicacao(3, 4)).toBe(12);
    });
    test('4. deve dividir e lançar erro para divisão por zero', () => {
        expect(divisao(10, 2)).toBe(5);
        expect(() => divisao(5, 0)).toThrow();
    });
    test('5. deve calcular a potência com expoente positivo', () => {
        expect(potencia(2, 3)).toBe(8);
    });
    test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => {
        expect(raizQuadrada(16)).toBe(4);
    });
    test('7. deve retornar o resto da divisão', () => {
        expect(restoDivisao(10, 3)).toBe(1);
    });
    test('8. deve calcular o fatorial de um número maior que 1', () => {
        expect(fatorial(4)).toBe(24);
    });
    test('9. deve calcular a média de um array com múltiplos elementos', () => {
        expect(mediaArray([10, 20, 30])).toBe(20);
    });
    test('10. deve somar um array com múltiplos elementos', () => {
        expect(somaArray([1, 2, 3])).toBe(6);
    });

    // === Testes para o Bloco 2 (11-20) ===
    test('11. deve encontrar o valor máximo em um array', () => {
        expect(maximoArray([1, 50, 10])).toBe(50);
    });
    test('12. deve encontrar o valor mínimo em um array', () => {
        expect(minimoArray([10, 2, 100])).toBe(2);
    });
    test('13. deve retornar o valor absoluto de um número negativo', () => {
        expect(valorAbsoluto(-5)).toBe(5);
    });
    test('14. deve arredondar um número para cima', () => {
        expect(arredondar(9.8)).toBe(10);
    });
    test('15. deve retornar true para um número par', () => {
        expect(isPar(100)).toBe(true);
    });
    test('16. deve retornar true para um número ímpar', () => {
        expect(isImpar(7)).toBe(true);
    });
    test('17. deve calcular uma porcentagem simples', () => {
        expect(calcularPorcentagem(50, 200)).toBe(100);
    });
    test('18. deve aumentar um valor em uma porcentagem', () => {
        expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110);
    });
    test('19. deve diminuir um valor em uma porcentagem', () => {
        expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90);
    });
    test('20. deve inverter o sinal de um número positivo', () => {
        expect(inverterSinal(42)).toBe(-42);
    });

    // === Testes para o Bloco 3 (21-30) ===
    test('21. deve calcular o seno de 0', () => {
        expect(seno(0)).toBe(0);
    });
    test('22. deve calcular o cosseno de 0', () => {
        expect(cosseno(0)).toBe(1);
    });
    test('23. deve calcular a tangente de 0', () => {
        expect(tangente(0)).toBe(0);
    });
    test('24. deve calcular o logaritmo natural de Euler', () => {
        expect(logaritmoNatural(Math.E)).toBe(1);
    });
    test('25. deve calcular o logaritmo na base 10', () => {
        expect(logaritmoBase10(100)).toBe(2);
    });
    test('26. deve arredondar para baixo', () => {
        expect(arredondarParaBaixo(5.9)).toBe(5);
    });
    test('27. deve arredondar para cima', () => {
        expect(arredondarParaCima(5.1)).toBe(6);
    });
    test('28. deve calcular a hipotenusa de um triângulo retângulo', () => {
        expect(hipotenusa(3, 4)).toBe(5);
    });
    test('29. deve converter graus para radianos', () => {
        expect(grausParaRadianos(180)).toBeCloseTo(Math.PI);
    });
    test('30. deve converter radianos para graus', () => {
        expect(radianosParaGraus(Math.PI)).toBeCloseTo(180);
    });

    // === Testes para o Bloco 4 (31-40) ===
    test('31. deve calcular o MDC de dois números', () => {
        expect(mdc(10, 5)).toBe(5);
    });
    test('32. deve calcular o MMC de dois números', () => {
        expect(mmc(10, 5)).toBe(10);
    });
    test('33. deve verificar que um número é primo', () => {
        expect(isPrimo(7)).toBe(true);
    });
    test('34. deve calcular o 10º termo de Fibonacci', () => {
        expect(fibonacci(10)).toBe(55);
    });
    test('35. deve calcular o produto de um array', () => {
        expect(produtoArray([2, 3, 4])).toBe(24);
    });
    test('36. deve manter um valor dentro de um intervalo (clamp)', () => {
        expect(clamp(5, 0, 10)).toBe(5);
    });
    test('37. deve verificar se um número é divisível por outro', () => {
        expect(isDivisivel(10, 2)).toBe(true);
    });
    test('38. deve converter Celsius para Fahrenheit', () => {
        expect(celsiusParaFahrenheit(0)).toBe(32);
    });
    test('39. deve converter Fahrenheit para Celsius', () => {
        expect(fahrenheitParaCelsius(32)).toBe(0);
    });
    test('40. deve calcular o inverso de um número', () => {
        expect(inverso(4)).toBe(0.25);
    });

    // === Testes para o Bloco 5 (41-50) ===
    test('41. deve calcular a área de um círculo', () => {
        expect(areaCirculo(10)).toBeCloseTo(314.159);
    });
    test('42. deve calcular a área de um retângulo', () => {
        expect(areaRetangulo(5, 4)).toBe(20);
    });
    test('43. deve calcular o perímetro de um retângulo', () => {
        expect(perimetroRetangulo(5, 4)).toBe(18);
    });
    test('44. deve verificar se um número é maior que outro', () => {
        expect(isMaiorQue(10, 5)).toBe(true);
    });
    test('45. deve verificar se um número é menor que outro', () => {
        expect(isMenorQue(5, 10)).toBe(true);
    });
    test('46. deve verificar se dois números são iguais', () => {
        expect(isEqual(7, 7)).toBe(true);
    });
    test('47. deve calcular a mediana de um array ímpar e ordenado', () => {
        expect(medianaArray([1, 2, 3, 4, 5])).toBe(3);
    });
    test('48. deve calcular o dobro de um número', () => {
        expect(dobro(10)).toBe(20);
    });
    test('49. deve calcular o triplo de um número', () => {
        expect(triplo(10)).toBe(30);
    });
    test('50. deve calcular a metade de um número', () => {
        expect(metade(20)).toBe(10);
    });
    test('51. isMaiorQue deve retornar false quando os números são iguais', () => {
        expect(isMaiorQue(5, 5)).toBe(false);
    });
    test('52. divisao deve lançar erro ao dividir por zero', () => {
        expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
    });
    test('53. raizQuadrada deve calcular corretamente a raiz de um número positivo', () => {
        expect(raizQuadrada(16)).toBe(4);
    });
    test('54. raizQuadrada deve lançar erro ao receber número negativo', () => {
        expect(() => raizQuadrada(-9)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
    });
    test('55.fatorial deve lançar erro para número negativo', () => {
        expect(() => fatorial(-5))
            .toThrow('Fatorial não é definido para números negativos.');
    });

    test('56.fatorial deve retornar 1 para 0', () => {
        expect(fatorial(0)).toBe(1);
    });

    test('57.fatorial deve retornar 1 para 1', () => {
        expect(fatorial(1)).toBe(1);
    });

    test('58.fatorial deve calcular corretamente para números positivos maiores que 1', () => {
        expect(fatorial(4)).toBe(24);
        expect(fatorial(5)).toBe(120);
    });
    test('deve retornar 0 para array vazio', () => {
        expect(mediaArray([])).toBe(0);
    });

    test('59.deve calcular corretamente a média de números positivos', () => {
        expect(mediaArray([2, 4, 6, 8])).toBe(5);
    });

    test('60.deve calcular corretamente a média de números negativos', () => {
        expect(mediaArray([-2, -4, -6, -8])).toBe(-5);
    });

    test('61.deve calcular corretamente a média de números mistos', () => {
        expect(mediaArray([-2, 2, 6])).toBeCloseTo(2);
    });
    test('62.deve lançar erro para array vazio', () => {
        expect(() => maximoArray([]))
            .toThrow('Array vazio не possui valor máximo.');
    });

    test('63.deve retornar o maior número do array', () => {
        expect(maximoArray([1, 50, 10])).toBe(50);
    });

    test('64.deve funcionar com números negativos', () => {
        expect(maximoArray([-5, -2, -10])).toBe(-2);
    });
    test('65.deve lançar erro para array vazio', () => {
        expect(() => minimoArray([]))
            .toThrow('Array vazio не possui valor mínimo.');
    });

    test('66.deve retornar o menor número do array', () => {
        expect(minimoArray([10, 5, 20])).toBe(5);
    });

    test('67.deve funcionar com números negativos', () => {
        expect(minimoArray([-10, -5, -20])).toBe(-20);
    });

    test('68.deve funcionar com números mistos (positivos e negativos)', () => {
        expect(minimoArray([-5, 0, 10])).toBe(-5);
    });
    // isPar
    test('69.isPar deve retornar true para número par positivo', () => {
        expect(isPar(4)).toBe(true);
    });

    test('70.isPar deve retornar false para número ímpar positivo', () => {
        expect(isPar(5)).toBe(false);
    });

    test('71.isPar deve retornar true para zero', () => {
        expect(isPar(0)).toBe(true);
    });

    test('72.isPar deve retornar true para número par negativo', () => {
        expect(isPar(-8)).toBe(true);
    });

    // isImpar
    test('73.isImpar deve retornar true para número ímpar positivo', () => {
        expect(isImpar(7)).toBe(true);
    });

    test('74.isImpar deve retornar false para número par positivo', () => {
        expect(isImpar(10)).toBe(false);
    });

    test('75.isImpar deve retornar false para zero', () => {
        expect(isImpar(0)).toBe(false);
    });

    test('76.isImpar deve retornar true para número ímpar negativo', () => {
        expect(isImpar(-3)).toBe(true);
    });
    //primo
    test('77.deve retornar false para 0 e 1', () => {
        expect(isPrimo(0)).toBe(false);
        expect(isPrimo(1)).toBe(false);
    });

    test('78.deve retornar true para números primos', () => {
        expect(isPrimo(2)).toBe(true);
        expect(isPrimo(3)).toBe(true);
        expect(isPrimo(7)).toBe(true);
        expect(isPrimo(13)).toBe(true);
    });

    test('79.deve retornar false para números compostos', () => {
        expect(isPrimo(4)).toBe(false);
        expect(isPrimo(9)).toBe(false);
        expect(isPrimo(15)).toBe(false);
    });

    test('80.deve retornar false para números negativos', () => {
        expect(isPrimo(-5)).toBe(false);
    });
    //mdc
    test('81.deve calcular corretamente para números positivos', () => {
        expect(mdc(10, 5)).toBe(5);
        expect(mdc(18, 12)).toBe(6);
        expect(mdc(27, 9)).toBe(9);
    });
    test('82.deve retornar o próprio número quando b é 0', () => {
        expect(mdc(10, 0)).toBe(10);
    });
    test('83.deve retornar o próprio número quando a é 0', () => {
        expect(mdc(0, 10)).toBe(10);
    });

    test('84.deve calcular corretamente quando os números são iguais', () => {
        expect(mdc(8, 8)).toBe(8);
    });

    test('85.deve retornar 1 quando os números são primos entre si', () => {
        expect(mdc(7, 3)).toBe(1);
    });
    // === Testes para o Bloco 4 (continuação: 86–92) ===

    test('86. produtoArray deve retornar 1 para array vazio', () => {
        expect(produtoArray([])).toBe(1);
    });

    test('87. produtoArray deve calcular corretamente o produto de múltiplos números', () => {
        expect(produtoArray([2, 3, 4])).toBe(24);
    });

    test('88. clamp deve retornar o valor mínimo quando o valor for menor que o limite inferior', () => {
        expect(clamp(-5, 0, 10)).toBe(0);
    });

    test('89. clamp deve retornar o valor máximo quando o valor for maior que o limite superior', () => {
        expect(clamp(15, 0, 10)).toBe(10);
    });

    test('90. clamp deve retornar o próprio valor quando estiver dentro do intervalo', () => {
        expect(clamp(5, 0, 10)).toBe(5);
    });

    test('91. isDivisivel deve retornar true quando o dividendo for divisível pelo divisor', () => {
        expect(isDivisivel(10, 2)).toBe(true);
    });

    test('92. isDivisivel deve retornar false quando o dividendo não for divisível pelo divisor', () => {
        expect(isDivisivel(10, 3)).toBe(false);
    });

    test('93. celsiusParaFahrenheit deve converter corretamente de Celsius para Fahrenheit', () => {
        expect(celsiusParaFahrenheit(0)).toBe(32);
        expect(celsiusParaFahrenheit(100)).toBe(212);
    });

    test('94. fahrenheitParaCelsius deve converter corretamente de Fahrenheit para Celsius', () => {
        expect(fahrenheitParaCelsius(32)).toBe(0);
        expect(fahrenheitParaCelsius(212)).toBe(100);
    });

    test('95. inverso deve calcular corretamente o inverso de um número positivo', () => {
        expect(inverso(4)).toBe(0.25);
    });

    test('96. inverso deve lançar erro ao tentar inverter o número zero', () => {
        expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
    });

});