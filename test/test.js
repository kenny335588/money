var expect = require('chai').expect

describe('jon', function () {
  var jon = require('../lib/jon')

  describe('字元與ASCII碼轉換', function () {
    it('twcn.convert(寫一個函數將該字串轉為簡體)', function () {
      expect(twcn.convert('寫一個函數將該字串轉為簡體')).to.equal('写一个函数将该字串转为简体')
    })
  })
  describe('簡體轉繁體測試', function () {
    it('twcn.iconvert(写一个函数将该字串转为简体)', function () {
      expect(twcn.iconvert('写一个函数将该字串转为简体')).to.equal('寫一個函數將該字串轉為簡體')
    })
  })

})