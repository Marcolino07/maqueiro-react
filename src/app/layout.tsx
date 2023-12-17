import type { Metadata } from 'next'
// Se estiver usando TypeScript (TSX)
import './globals.css'

export const metadata: Metadata = {
  title: 'Maqueiro',
  description: 'Anotações de fluxo de transportes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
