import utc from 'dayjs/plugin/utc'
import dayjs from 'dayjs'
dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

// 转化为东八区时间
export function formatUtcTime(
  utcTimeStr: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcTimeStr).utcOffset(8).format(format)
}
