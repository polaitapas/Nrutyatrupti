import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import HomeStory from '@/components/home/HomeStory'

export const metadata: Metadata = {
  title: 'Nrutyatrupti Odissi Dance Academy | Where Tradition Meets Grace | Bhubaneswar',
  description:
    'Odissi classical dance academy in Bhubaneswar, led by B-Grade Doordarshan artist & CCRT Senior Scholar Smt. Truptismita Tarini.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeStory />
    </>
  )
}
