/**
 * @jest-environment jsdom
 */

function forward () {
  window.location.href = 'http://target'
}


// location 只读属性，须先 delete 再 mock
delete global.window.location
global.window.location = {}


test('mock location', () => {
  forward()
  expect(location.href).toBe('http://target')
})