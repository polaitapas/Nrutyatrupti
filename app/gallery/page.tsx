import { Metadata } from 'next'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos from the studio floor to national stages — Nrutyatrupti Odissi Dance Academy, Kalinganagar, Bhubaneswar.',
  alternates: { canonical: '/gallery' },
}

export default function GalleryPage() {
  return <GalleryClient />
}
