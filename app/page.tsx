import { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import AcademyIntro from '@/components/home/AcademyIntro'
import FounderHighlight from '@/components/home/FounderHighlight'
import StatsSection from '@/components/home/StatsSection'
import OdissiJourney from '@/components/home/OdissiJourney'
import ClassStyles from '@/components/home/ClassStyles'
import Testimonials from '@/components/home/Testimonials'
import GalleryPreview from '@/components/home/GalleryPreview'
import InstagramReels from '@/components/home/InstagramReels'
import ContactCTA from '@/components/home/ContactCTA'

export const metadata: Metadata = {
  title: 'Nrutyatrupti Odissi Dance Academy | Where Tradition Meets Grace | Bhubaneswar',
  description:
    'Premier Odissi classical dance academy in Bhubaneswar, Odisha. Taught by B-Grade Doordarshan artist and CCRT Senior Scholar Smt. Truptismita Tarini in the Guru Deba Prasad Das lineage. Classes for all ages, online and in-studio.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <AcademyIntro />
      <StatsSection />
      <FounderHighlight />
      <OdissiJourney />
      <ClassStyles />
      <Testimonials />
      <GalleryPreview />
      <InstagramReels />
      <ContactCTA />
    </>
  )
}
