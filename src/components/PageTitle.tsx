// app/components/PageTitle.tsx
'use client'

import { usePathname } from 'next/navigation'

export default function PageTitle() {
  const pathname = usePathname()
  const title = pathname.split('/').pop()

  return <h1 className="text-2xl font-bold mb-4">{title}</h1>
}