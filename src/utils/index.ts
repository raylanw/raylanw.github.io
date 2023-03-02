import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

export const isExternal = (path: string) => {
  const outboundRE = /^(https?:|mailto:|tel:)/
  return outboundRE.test(path)
}

export const getYear = (a: Date | string | number) => new Date(a).getFullYear()
// export const isSameYear = (a: Date | string | number, b: Date | string | number) => a && b && getYear(a) === getYear(b)
export function formatDate(d?: string | Date | null) {
  if (!d)
    return
  // return isSameYear(d, new Date())
  //   // ? dayjs(d).locale('zh-CN').format('MM 月 DD 日')
  //   // : dayjs(d).locale('zh-CN').format('YYYY 年 MM 月 DD 日')
  //   ? dayjs(d).format('MMMM D')
  //   : dayjs(d).format('MMMM D, YYYY')
  return dayjs(d).format('MMMM D')
}

export const isClient = typeof window !== 'undefined'
