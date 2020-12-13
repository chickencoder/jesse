import Image from 'next/image'

export default function Avatar() {
  return (
    <div
      style={{ width: 96, height: 96 }}
      className="mx-auto rounded-full shadow-lg"
    >
      <Image
        src="/me.jpg"
        width={96}
        height={96}
        className="w-full h-full rounded-full"
      />
    </div>
  )
}
