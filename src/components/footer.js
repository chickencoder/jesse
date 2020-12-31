const links = [
  {
    label: () => <span>RSS</span>,
    href: '/feed.xml',
  },
  {
    label: () => <span>View Source</span>,
    href: 'https://github.com/chickencoder/jesse',
  },
]

export default function Footer() {
  return (
    <footer className="text-center text-xs py-16 space-y-2">
      <div>
        <a
          href="https://app.mailbrew.com/chickencoder/jessethesibleys-blog-3vGU4dBVQF6f"
          className="transition duration-100 ease-in-out underline text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
        >
          Subscribe via Mailbrew
        </a>
      </div>
      <div className="space-x-2">
        {links.map(({ label: Label, href }, index) => {
          return (
            <a
              key={index}
              href={href}
              className="transition duration-100 ease-in-out text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
            >
              <Label />
            </a>
          )
        })}
      </div>
    </footer>
  )
}
