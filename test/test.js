var expect = require('chai').expect

describe('morse', function () {
  var morse = require('./lib/morse')

  describe('字母轉摩斯電碼測試', function () {
    it('morse.convert(寫一個函數將該字串轉為摩斯電碼)', function () {
      expect(morse.convert('寫一個函數將該摩斯電碼轉為字串')).to.equal('')
    })
  })
  describe('摩斯電碼轉字母測試', function () {
    it('morse.iconvert()', function () {
      expect(morse.iconvert('')).to.equal('寫一個函數將該摩斯電碼轉為字串')
    })
  })

})