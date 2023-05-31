import Footer from "./components/Footer"
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css'
export const metadata = {
  title: 'Traday',
  description: 'Built by Guney Yilmazer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
