import './globals.css'

export const metadata = {
  title: 'Next App Home',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='min-h-screen'>
          {children}
        </div>
      </body>
    </html>
  )
}
