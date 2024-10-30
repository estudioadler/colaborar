'use client'

import { usePathname } from 'next/navigation'

export default function Help() {
  const pathname = usePathname()
  const folderName = pathname.split('/').pop()

  return (
    <div>
      <h1>{folderName}</h1>
    </div>
  )
}