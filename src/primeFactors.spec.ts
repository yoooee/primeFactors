describe('Prime Factors', () => {

  const list = (...ints: Array<number>): Array<number> => ints;

  it('can factor into primes', () => {
    expect(list()).toEqual(of(1));
    expect(list(2)).toEqual(of(2));
    expect(list(3)).toEqual(of(3));
  });

  const of = (n: number): Array<number> => {
    const factors: Array<number> = new Array<number>();
    if (n > 1)
      factors.push(n);
    return factors;
  }

});
