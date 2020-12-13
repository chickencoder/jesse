import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en)
const time = new TimeAgo('en-US')

export function format(string) {
  return time.format(new Date(string))
}
