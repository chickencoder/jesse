import { format } from '../lib/time'

export default function Time({ value, ...props }) {
  return (
    <time dateTime={value} {...props}>
      {value && format(value)}
    </time>
  )
}
