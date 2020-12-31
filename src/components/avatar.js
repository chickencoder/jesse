import Image from 'next/image'

export default function Avatar({ variant = 'normal', className = '' }) {
  const variants = {
    small: { width: 38, height: 38 },
    normal: { width: 120, height: 120 },
  }
  const sizes = variants[variant]
  return (
    <div style={sizes} className={`${className} rounded-full shadow-lg`}>
      <Image
        src="/me.jpg"
        width={sizes.width}
        height={sizes.height}
        className="w-full h-full rounded-full"
      />
    </div>
  )
}
