'use client'

import type { ReactNode } from 'react'
import { useEnquiry } from '@/components/ui/EnquiryModal'

export default function EnquiryTrigger({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const { open } = useEnquiry()
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  )
}
