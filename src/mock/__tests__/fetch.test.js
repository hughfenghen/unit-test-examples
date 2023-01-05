/**
 * @jest-environment jsdom
 */

function fetchData () {
  return fetch('http://example.com', {
    method: 'POST'
  })
}

// 覆盖 fetch
global.window.fetch = jest.fn()
// mock fetch 的返回值
fetch.mockReturnValue(Promise.resolve({ status: 500 }))

test('mock location', async () => {
  const resp = await fetchData()
  // fetch 是 jest.fn，可以检测其调用参数是否符合期望
  expect(fetch).toBeCalledWith('http://example.com', {
    method: 'POST'
  })
  expect(resp).toEqual({ status: 500 })
})