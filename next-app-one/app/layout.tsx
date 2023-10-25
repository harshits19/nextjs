import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Next App",
  description: "testing nextjs features",
}
//define a custom font style
const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* to use font <element className={fontName.className} /> */}
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
