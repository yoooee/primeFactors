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
  });

  const of = (n: number): Array<number> => {
    const factors: Array<number> = new Array<number>();
    if (n > 1)
      factors.push(n);
    return factors;
  }

});
