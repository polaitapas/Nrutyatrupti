'use client'
import dynamic from 'next/dynamic'
import StoryScroller, { StorySection } from '@/components/ui/StoryScroller'

const FounderHighlight = dynamic(() => import('./FounderHighlight'))
const StudentTransformation = dynamic(() => import('./StudentTransformation'))
const StatsSection = dynamic(() => import('./StatsSection'))
const Testimonials = dynamic(() => import('./Testimonials'))
const InstagramReels = dynamic(() => import('./InstagramReels'))
const ClassStyles = dynamic(() => import('./ClassStyles'))
const FAQTeaser = dynamic(() => import('./FAQTeaser'))

export default function HomeStory() {
  return (
    <StoryScroller>
      <StorySection
        effects={['fade', 'scale', 'imageReveal']}
        bg="transparent"
      >
        <FounderHighlight />
      </StorySection>

      <StorySection
        effects={['fade', 'scale', 'blur']}
        bg="transparent"
      >
        <StudentTransformation />
      </StorySection>

      <StorySection
        effects={['fade']}
        bg="transparent"
      >
        <StatsSection />
      </StorySection>

      <StorySection
        effects={['fade', 'blur', 'textReveal']}
        bg="transparent"
      >
        <Testimonials />
      </StorySection>

      <StorySection
        effects={['fade', 'parallax']}
        bg="transparent"
      >
        <InstagramReels />
      </StorySection>

      <StorySection
        effects={['fade', 'scale', 'imageReveal']}
        bg="transparent"
      >
        <ClassStyles />
      </StorySection>

      <StorySection
        effects={['fade', 'blur']}
        bg="transparent"
      >
        <FAQTeaser />
      </StorySection>

    </StoryScroller>
  )
}
