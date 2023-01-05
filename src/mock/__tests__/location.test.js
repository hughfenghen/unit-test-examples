/**
 * @jest-environment jsdom
 */

function forward () {
  window.location.href = 'http://target'
}


function mockLocation () {
  delete global.window.location
  global.window.location = {}
}


test('mock location', () => {
  mockLocation()
  forward()
  expect(location.href).toBe('http://target')
})