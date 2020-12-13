import { format } from '../lib/time'

export default function ({ value, ...props }) {
  return (
    <time datetime={value} {...props}>
      {format(value)}
    </time>
  )
}
