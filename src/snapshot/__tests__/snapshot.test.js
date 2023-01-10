
function createDefaultData() {
  return {
    a: {
      aa1: 1,
      aa2: {
        aaa1: true,
        aaa2: [],
      }
    },
    b: [{
      bb1: 'bbb',
    }]
  }
}

test('snapshot', () => {
  const data = createDefaultData()
  expect(data).toMatchSnapshot()
})
