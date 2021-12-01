const ONE = 'หนึ่ง'
const TWO = 'สอง'
const THREE_TO_NINE = ['สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า']
const ED = 'เอ็ด'
const YEE = 'ยี่'
const LAN = 'ล้าน'
const EMPTY = ''
const DIGIT = [EMPTY, 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน']
const ONES = [EMPTY, ED, TWO, ...THREE_TO_NINE]
const TENS = [EMPTY, ...[EMPTY, YEE, ...THREE_TO_NINE].map(t => t + DIGIT[1])]
const SUB_HUNDRED = TENS.flatMap(t => ONES.map(o => t + o))
SUB_HUNDRED[1] = ONE
const SUB_TEN = [EMPTY, ONE, TWO, ...THREE_TO_NINE]

function numberToWords(num: string): string {
  let output = EMPTY
  const length = num.length

  for (let i = 0; i < length; i++) {
    const d = num[i]
    const di = length - i - 1
    const diMod = di % 6
    const isSib = diMod === 1
    switch (d){
      case '0':
        break;
      case '1':
        if(isSib){output += DIGIT[diMod]}
        else if(!diMod && i){output += ED}
        else{output += SUB_TEN[Number(d)] + DIGIT[diMod]}
        break;
      default:
        if(isSib && d === '2'){output += YEE + DIGIT[diMod]}
        else{
          output += SUB_TEN[Number(d)] + DIGIT[diMod]
        }
        break;
    }
    if (!diMod && di) {
      output += LAN
    }
  }
  return output
}
export default function bahtText(userInput: number | string): string | boolean {
  let baht: number
  let bahtStr: string
  let satang: number
  let isNegative = false
  let input: number
  if (typeof userInput === 'number') {
    if(userInput >Number.MAX_SAFE_INTEGER)
      return false
    input = userInput
  } else {
    input = Number(userInput)
    if (isNaN(input) || input >Number.MAX_SAFE_INTEGER){
      return false
    }
  }
  if (input < 0) {
    isNegative = true
    input = -input
  }
  satang = Number.isInteger(input) ? 0 : (Math.round(input%1 * 100))
  baht = Number.isInteger(input) ? input :Math.floor(input)
  if(satang>=100) {
    baht++
    satang%=100
  }
  bahtStr = '' + baht
  if (!baht && !satang) {
    return 'ศูนย์บาทถ้วน'
  }

  let output = isNegative ? 'ลบ' : EMPTY

  // Baht
  output += numberToWords(bahtStr)

  // Satang
  if (satang) {
    if (baht) output += 'บาท'
    // Faster!
    output += SUB_HUNDRED[satang] + 'สตางค์'
    // output += SUB_HUNDRED_FUNC(satang) + 'สตางค์'
    // output += numberToWords(satang.toString()) + 'สตางค์';
  } else {
    output += 'บาทถ้วน'
  }

  return output
}