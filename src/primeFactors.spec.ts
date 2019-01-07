describe('Prime Factors', () => {

  const list = (...ints: Array<number>): Array<number> => ints;

  const assertPrimeFactors = (n: number, primeFactors: Array<number>) => {
    expect(primeFactors).toEqual(of(n));
  }

  it('can factor into primes', () => {

    let n: number = 1;
    let primeFactors: Array<number> = list();

    assertPrimeFactors(1, list());
    assertPrimeFactors(2, list(2));
    assertPrimeFactors(3, list(3));
    assertPrimeFactors(4, list(2,2));
    assertPrimeFactors(5, list(5));
    assertPrimeFactors(6, list(2,3));
    assertPrimeFactors(7, list(7));
    assertPrimeFactors(8, list(2,2,2));
    assertPrimeFactors(9, list(3,3));
  });

  const of = (n: number): Array<number> => {
    const factors: Array<number> = new Array<number>();
    let divisor = 2;

    for (let divisor = 2; n > 1; divisor++)
      for (; n % divisor === 0; n /= divisor)
        factors.push(divisor);

    return factors;
  }

});
