import './styles/globals.css'

export const metadata = {
  title: 'Image Dashboard',
  description: 'A dashboard with image categories',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
