import { Metadata } from 'next'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos from the studio floor to national stages — Odissi performances, students, gurus, and cultural events at Nrutyatrupti Odissi Dance Academy, Bhubaneswar.',
}

export default function GalleryPage() {
  return <GalleryClient />
}
