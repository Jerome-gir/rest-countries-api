import "./globals.css"
import { Nunito_Sans } from "next/font/google"
// import { ThemeProvider } from "./components/theme-provider"
// import { ThemeToggle } from "./components/theme-toggle"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
})

export const metadata = {
  title: "Countries of the World",
  description: "Explore countries around the world",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunitoSans.className} bg-very-light-gray dark:bg-very-dark-blue text-very-dark-blue-text dark:text-white`}
      >
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        <header className="bg-white dark:bg-dark-blue shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-extrabold">Where in the world?</h1>
            {/* <ThemeToggle /> */}
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
