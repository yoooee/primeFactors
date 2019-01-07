describe('Prime Factors', () => {

  it('can factor into primes', () => {
    expect(list()).toEqual(of(1));
  });

  const of = (n: number): Array<number> => new Array<number>();

  const list = () => [];
});
