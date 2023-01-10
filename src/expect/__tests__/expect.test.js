
test('expect', () => {
  const spy = jest.fn()
  spy({
    a: 1,
    b: 'xyz',
    c: [1, 2, 3]
  })

  expect(Math.random()).toEqual(expect.any(Number))

  expect(spy).toHaveBeenCalledWith(expect.objectContaining({
    a: expect.any(Number),
    b: expect.stringContaining('y'),
    c: expect.arrayContaining([1])
  }))
})
