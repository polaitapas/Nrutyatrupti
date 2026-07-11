import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import HomeStory from '@/components/home/HomeStory'

export const metadata: Metadata = {
  title: 'Nrutyatrupti Odissi Dance Academy | Where Tradition Meets Grace | Bhubaneswar',
  description:
    'Premier Odissi classical dance academy in Bhubaneswar, Odisha. Taught by B-Grade Doordarshan artist and CCRT Senior Scholar Smt. Truptismita Tarini in the Guru Deba Prasad Das lineage. Classes for all ages, online and in-studio.',
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
