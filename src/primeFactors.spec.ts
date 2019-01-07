describe('Prime Factors', () => {

  it('can factor into primes', () => {
    expect(list()).toEqual(of(1));
    expect(list(2)).toEqual(of(2));
  });

  const of = (n: number): Array<number> => {
    const factors: Array<number> = new Array<number>();
    if (n === 2)
      factors.push(2);
    return factors;
  }

  const list = (...ints: Array<number>): Array<number> => ints;
});
