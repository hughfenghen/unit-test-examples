/**
 * @jest-environment jsdom
 */

function fetchData () {
  return fetch('http://example.com', {
    method: 'POST'
  })
}

// 覆盖 fetch (jest 执行环境 fetch 值是 undefined，所以不能使用 jest.spyOn)
// 固定返回一个 status: 500 的 Prmiose
// 因为不希望运行单测时发送http请求
global.window.fetch = jest.fn().mockReturnValue(Promise.resolve({ status: 500 }))

test('mock fetch', async () => {
  const resp = await fetchData()
  // fetch 是 jest.fn，可以检测其调用参数是否符合期望
  expect(fetch).toBeCalledWith('http://example.com', {
    method: 'POST'
  })
  expect(resp).toEqual({ status: 500 })
})