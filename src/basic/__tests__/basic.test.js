/**
 * @jest-environment jsdom
 */

function createList(arr) {
  const ulEl = document.createElement('ul')
  arr.forEach((it) => {
    const li = document.createElement('li')
    li.textContent = it
    ulEl.appendChild(li)
  })
  // 其他逻辑。。。
  return ulEl
}

test('创建列表', () => {
  const arr = [1, 2]
  const ulEl = createList(arr)
  expect(ulEl.childNodes.length).toBe(arr.length)
  expect(ulEl).toBeInstanceOf(HTMLUListElement)
  expect(
    [...ulEl.childNodes].every(it => it instanceof HTMLLIElement)
  ).toBe(true)
})