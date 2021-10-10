import {bahtText} from './';
// const { bahtText } = require('./bahtText')
const defaultResult = 'ศูนย์บาทถ้วน'
jest.autoMockOff()

describe('digit', () => {
  test('1, zero', () => {
    expect(bahtText(0)).toBe('ศูนย์บาทถ้วน')
  })

  test('1 digit', () => {
    expect(bahtText(1)).toBe('หนึ่งบาทถ้วน')
    expect(bahtText(2)).toBe('สองบาทถ้วน')
    expect(bahtText(3)).toBe('สามบาทถ้วน')
    expect(bahtText(4)).toBe('สี่บาทถ้วน')
    expect(bahtText(5)).toBe('ห้าบาทถ้วน')
    expect(bahtText(6)).toBe('หกบาทถ้วน')
    expect(bahtText(7)).toBe('เจ็ดบาทถ้วน')
    expect(bahtText(8)).toBe('แปดบาทถ้วน')
    expect(bahtText(9)).toBe('เก้าบาทถ้วน')
  })

  test('2', () => {
    expect(bahtText(37)).toBe('สามสิบเจ็ดบาทถ้วน')
    expect(bahtText(48)).toBe('สี่สิบแปดบาทถ้วน')
  })

  test('3', () => {
    expect(bahtText(232)).toBe('สองร้อยสามสิบสองบาทถ้วน')
  })

  test('4', () => {
    expect(bahtText(3333)).toBe('สามพันสามร้อยสามสิบสามบาทถ้วน')
  })

  test('5', () => {
    expect(bahtText(44444)).toBe('สี่หมื่นสี่พันสี่ร้อยสี่สิบสี่บาทถ้วน')
  })

  test('6', () => {
    expect(bahtText(555555)).toBe('ห้าแสนห้าหมื่นห้าพันห้าร้อยห้าสิบห้าบาทถ้วน')
  })

  test('7', () => {
    expect(bahtText(6666666)).toBe('หกล้านหกแสนหกหมื่นหกพันหกร้อยหกสิบหกบาทถ้วน')
  })

  test('8', () => {
    expect(bahtText(77777777)).toBe('เจ็ดสิบเจ็ดล้านเจ็ดแสนเจ็ดหมื่นเจ็ดพันเจ็ดร้อยเจ็ดสิบเจ็ดบาทถ้วน')
  })

  test('9', () => {
    expect(bahtText(888888888)).toBe('แปดร้อยแปดสิบแปดล้านแปดแสนแปดหมื่นแปดพันแปดร้อยแปดสิบแปดบาทถ้วน')
  })

  test('10', () => {
    expect(bahtText(9999999999)).toBe('เก้าพันเก้าร้อยเก้าสิบเก้าล้านเก้าแสนเก้าหมื่นเก้าพันเก้าร้อยเก้าสิบเก้าบาทถ้วน')
  })

  test('11', () => {
    expect(bahtText(12345678901)).toBe('หนึ่งหมื่นสองพันสามร้อยสี่สิบห้าล้านหกแสนเจ็ดหมื่นแปดพันเก้าร้อยเอ็ดบาทถ้วน')
  })

  test('12', () => {
    expect(bahtText(123456789012)).toBe('หนึ่งแสนสองหมื่นสามพันสี่ร้อยห้าสิบหกล้านเจ็ดแสนแปดหมื่นเก้าพันสิบสองบาทถ้วน')
  })

  test('13', () => {
    expect(bahtText(1234567890133)).toBe('หนึ่งล้านสองแสนสามหมื่นสี่พันห้าร้อยหกสิบเจ็ดล้านแปดแสนเก้าหมื่นหนึ่งร้อยสามสิบสามบาทถ้วน')
  })

  test('14', () => {
    expect(bahtText(12345678901234)).toBe('สิบสองล้านสามแสนสี่หมื่นห้าพันหกร้อยเจ็ดสิบแปดล้านเก้าแสนหนึ่งพันสองร้อยสามสิบสี่บาทถ้วน')
  })

  test('15', () => {
    expect(bahtText(123456789012345)).toBe('หนึ่งร้อยยี่สิบสามล้านสี่แสนห้าหมื่นหกพันเจ็ดร้อยแปดสิบเก้าล้านหนึ่งหมื่นสองพันสามร้อยสี่สิบห้าบาทถ้วน')
  })

  test('16 digits, not more than Number.MAX_SAFE_INTEGER', () => {
    // Number.MAX_SAFE_INTEGER
    // 9007199254740991
    expect(bahtText(1234567890123450)).toBe('หนึ่งพันสองร้อยสามสิบสี่ล้านห้าแสนหกหมื่นเจ็ดพันแปดร้อยเก้าสิบล้านหนึ่งแสนสองหมื่นสามพันสี่ร้อยห้าสิบบาทถ้วน')
  })

  test('16 digits, more than Number.MAX_SAFE_INTEGER', () => {
    // eslint-disable-next-line
    expect(bahtText(9007199254750991)).toBe(defaultResult)
  })

  test('more than 16', () => {
    expect(bahtText(12345678901234500)).toBe(defaultResult)
    expect(bahtText(123456789012345000)).toBe(defaultResult)
    expect(bahtText(1234567890123450000)).toBe(defaultResult)
    expect(bahtText(123456789012345000000)).toBe(defaultResult)
  })
})

describe('grammar', () => {
  test('end with 1 (more than 10)', () => {
    expect(bahtText(11)).toBe('สิบเอ็ดบาทถ้วน')
    expect(bahtText(201)).toBe('สองร้อยเอ็ดบาทถ้วน')

    expect(bahtText(3061.21)).toBe('สามพันหกสิบเอ็ดบาทยี่สิบเอ็ดสตางค์')
    expect(bahtText(456011.71)).toBe('สี่แสนห้าหมื่นหกพันสิบเอ็ดบาทเจ็ดสิบเอ็ดสตางค์')
  })

  test('end with 1x', () => {
    expect(bahtText(14)).toBe('สิบสี่บาทถ้วน')
    expect(bahtText(40019)).toBe('สี่หมื่นสิบเก้าบาทถ้วน')

    expect(bahtText(317.10)).toBe('สามร้อยสิบเจ็ดบาทสิบสตางค์')
    expect(bahtText(40019.17)).toBe('สี่หมื่นสิบเก้าบาทสิบเจ็ดสตางค์')
  })

  test('end with 2x', () => {
    expect(bahtText(22)).toBe('ยี่สิบสองบาทถ้วน')
    expect(bahtText(5723)).toBe('ห้าพันเจ็ดร้อยยี่สิบสามบาทถ้วน')

    expect(bahtText(57.23)).toBe('ห้าสิบเจ็ดบาทยี่สิบสามสตางค์')
    expect(bahtText(422.26)).toBe('สี่ร้อยยี่สิบสองบาทยี่สิบหกสตางค์')
  })
})

describe('decimals', () => {
  test('general', () => {
    expect(bahtText(1.01)).toBe('หนึ่งบาทหนึ่งสตางค์')
    expect(bahtText(1.02)).toBe('หนึ่งบาทสองสตางค์')
    expect(bahtText(1.03)).toBe('หนึ่งบาทสามสตางค์')
    expect(bahtText(1.04)).toBe('หนึ่งบาทสี่สตางค์')
    expect(bahtText(1.05)).toBe('หนึ่งบาทห้าสตางค์')
    expect(bahtText(1.06)).toBe('หนึ่งบาทหกสตางค์')
    expect(bahtText(1.07)).toBe('หนึ่งบาทเจ็ดสตางค์')
    expect(bahtText(1.08)).toBe('หนึ่งบาทแปดสตางค์')
    expect(bahtText(1.09)).toBe('หนึ่งบาทเก้าสตางค์')

    expect(bahtText(32.23)).toBe('สามสิบสองบาทยี่สิบสามสตางค์')
    expect(bahtText(474.45)).toBe('สี่ร้อยเจ็ดสิบสี่บาทสี่สิบห้าสตางค์')
    expect(bahtText(5789.67)).toBe('ห้าพันเจ็ดร้อยแปดสิบเก้าบาทหกสิบเจ็ดสตางค์')
    expect(bahtText(63147.89)).toBe('หกหมื่นสามพันหนึ่งร้อยสี่สิบเจ็ดบาทแปดสิบเก้าสตางค์')
  })

  test('more than 2 decimals, using 2 decimals', () => {
    expect(bahtText(25.1230)).toBe('ยี่สิบห้าบาทสิบสองสตางค์')
    expect(bahtText(345.2345)).toBe('สามร้อยสี่สิบห้าบาทยี่สิบสามสตางค์')
    expect(bahtText(5678.4567)).toBe('ห้าพันหกร้อยเจ็ดสิบแปดบาทสี่สิบหกสตางค์')
  })

  test('not more than 1', () => {
    expect(bahtText(0.25)).toBe('ยี่สิบห้าสตางค์')
    expect(bahtText(0.36)).toBe('สามสิบหกสตางค์')
    expect(bahtText(0.69)).toBe('หกสิบเก้าสตางค์')
  })
})
//
// describe('misc', () => {
//   test('invalid number', () => {
//     expect(bahtText('invalid number' )).toBe('ศูนย์บาทถ้วน')
//   })
// })
