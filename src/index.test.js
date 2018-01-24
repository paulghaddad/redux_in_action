it('should check for equal values', () => {
  expect(5).toEqual(5);
});

it('should check for equal values using deep equality', () => {
  expect({ foo: 5 }).toEqual({ foo: 5 });
  expect([1,2,3]).toEqual([1,2,3]);
});

it('should check that an array contains a specific object/array value', () => {
  expect([1,2,3]).toContain(2);
  expect([{foo: 5}, {foo: 6}]).toContainEqual({foo: 6});
});

it('should support spies', () => {
  const spy = jest.fn();
  spy('foo');
  expect(spy).toHaveBeenCalled();
  expect(spy).toHaveBeenCalledWith('foo');
});
