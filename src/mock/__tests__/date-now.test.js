/**
 * @jest-environment jsdom
 */

// mock Date.now，默认不改变行为
jest.spyOn(Date, 'now')

test('mock Date.now', () => {
  // 默认返回一个有效时间戳
  expect(Date.now().toString().length).toBe(13)
  // mock实现，返回 1
  Date.now.mockReturnValue(1)
  expect(Date.now()).toBe(1)
  // 重置为默认实现，（取消强制 return 1）
  Date.now.mockRestore()
  expect(Date.now().toString().length).toBe(13)
})