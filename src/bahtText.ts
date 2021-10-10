const defaultResult = 'ศูนย์บาทถ้วน'
const singleUnitStringArr = [
  '',
  'หนึ่ง',
  'สอง',
  'สาม',
  'สี่',
  'ห้า',
  'หก',
  'เจ็ด',
  'แปด',
  'เก้า'
]
const placeNameStringArr = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน']

const num2Word = (nums: number[]): string => {
  let result = ''
  const len = nums.length
  const maxLen = 7

  if (len > maxLen) {
    // more than million
    const overflowIndex = len - maxLen + 1
    const overflowNums = nums.slice(0, overflowIndex)
    const remainingNumbs = nums.slice(overflowIndex)
    return num2Word(overflowNums) + 'ล้าน' + num2Word(remainingNumbs)
  } else {
    for (let i = 0; i < len; i++) {
      const digit = nums[i]
      if (digit > 0) {
        result += singleUnitStringArr[digit] + placeNameStringArr[len - i - 1]
      }
    }
  }

  return result
}

const grammarFix = (str: string) => {
  let result = str

  // "สิบ"
  result = result.replace('หนึ่งสิบ', 'สิบ')
  // "ยี่สิบ"
  result = result.replace('สองสิบ', 'ยี่สิบ')
  // "เอ็ด"
  const neungLen = 5
  if (
    result.length > neungLen &&
    result.length - result.lastIndexOf('หนึ่ง') === neungLen
  ) {
    result = result.substr(0, result.length - neungLen) + 'เอ็ด'
  }

  return result
}

const combine = (baht: string, satang: string) => {
  let result = ''

  if (baht === '' && satang === '') {
    result = defaultResult
  } else if (baht !== '' && satang === '') {
    result = baht + 'บาท' + 'ถ้วน'
  } else if (baht === '' && satang !== '') {
    result = satang + 'สตางค์'
  } else {
    result = baht + 'บาท' + satang + 'สตางค์'
  }

  return result
}

const bahtText = (num: number) => {
  let result = defaultResult

  if (isNaN(num)) return result
  if (num >= Number.MAX_SAFE_INTEGER) return result

  /** @type {string} */
  const bahtStr = Math.floor(num).toString()
  /** @type {string} */
  const satangStr = Math.round((num % 1) * 100).toString()

  /** @type {number[]} */
  const bahtArr = Array.from(bahtStr).map(Number)
  /** @type {number[]} */
  const satangArr = Array.from(satangStr).map(Number)

  let baht = num2Word(bahtArr)
  let satang = num2Word(satangArr)

  baht = grammarFix(baht)
  satang = grammarFix(satang)

  result = combine(baht, satang)

  return result
}

export default bahtText
