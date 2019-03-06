/**
 * 还款方式
 * @param value 代码
 * @returns {string} 还款方式
 */
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

/**
 * 追加“%”号
 * @param value 值
 * @returns {string} 百分比
 */
export const suffix_percent = (value) => {
  return value + '%'
}
