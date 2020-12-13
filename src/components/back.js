import Link from 'next/link'

export default function Back() {
  return (
    <nav className="py-8">
      <Link href="/">
        <a
          className="transition duration-100 ease-in-out text-gray-500 dark:text-gray-300 text-sm rounded-full px-3 py-1 bg-gray-100 hover:bg-gray-50
          dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          &larr; Back Home
        </a>
      </Link>
    </nav>
  )
}
