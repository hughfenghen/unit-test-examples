/**
 * @jest-environment jsdom
 */

// 拦截所有 dom 节点的 appendChild 方法
const spy = jest.spyOn(HTMLElement.prototype, 'appendChild')

function appendChild (el) {
  document.body.appendChild(el)
}

test('spy dom', () => {
  const div = document.createElement('div')
  appendChild(div)
  expect(spy).toBeCalledWith(div)
  expect(document.body.firstChild).toBe(div)
})