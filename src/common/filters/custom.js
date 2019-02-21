export const repayment = (value) => {
  if (value != undefined) {
    if (value == 1) {
      return '先息后本1'
    } else {
      return '等额本息2'
    }
  } else {
    return ''
  }
}
