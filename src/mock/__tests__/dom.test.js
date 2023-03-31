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

test('spy readonly property', () => {
  // offsetX 无法通过构造函数设置设置初始值
  const evt = new MouseEvent('mousedown')
  // 也不能手动赋值 evt.offsetX = 100
  // 但 spyOn getter 是可行的
  jest.spyOn(evt, 'offsetX', 'get').mockImplementation(() => 100)
  expect(evt.offsetX).toBe(100)
})
