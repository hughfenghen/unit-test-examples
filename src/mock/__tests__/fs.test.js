const fs = require('fs')

// 这一行是必须的，mock的实现在 __mocks__/fs.js 文件中
jest.mock('fs')

function readFile (fileStr) {
  return fs.readFileSync(fileStr)
}

test('mock fs', () => {
  fs.readFileSync.mockReturnValue(Buffer.from('111'))
  const file = readFile('abc.txt')
  expect(fs.readFileSync).toBeCalledWith('abc.txt')
  expect(file.toString()).toBe('111')
})