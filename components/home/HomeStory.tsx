'use client'
import dynamic from 'next/dynamic'
import StoryScroller, { StorySection } from '@/components/ui/StoryScroller'
import TempleBorder from '@/components/ui/TempleBorder'

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
        topBorder={<TempleBorder variant="ivory" position="top" />}
        bottomBorder={<TempleBorder variant="maroon" position="bottom" />}
      >
        <FounderHighlight />
      </StorySection>

      <StorySection
        effects={['fade', 'scale', 'blur']}
        bg="transparent"
        topBorder={<TempleBorder variant="teal" position="top" />}
      >
        <StudentTransformation />
      </StorySection>

      <StorySection
        effects={['fade']}
        bg="transparent"
        bottomBorder={<TempleBorder variant="teal" position="bottom" />}
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
        bottomBorder={<TempleBorder variant="ivory" position="bottom" />}
      >
        <InstagramReels />
      </StorySection>

      <StorySection
        effects={['fade', 'scale', 'imageReveal']}
        bg="transparent"
        topBorder={<TempleBorder variant="ivory" position="top" />}
        bottomBorder={<TempleBorder variant="ivory" position="bottom" />}
      >
        <ClassStyles />
      </StorySection>

      <StorySection
        effects={['fade', 'blur']}
        bg="transparent"
        topBorder={<TempleBorder variant="gold" position="top" />}
        bottomBorder={<TempleBorder variant="gold" position="bottom" />}
      >
        <FAQTeaser />
      </StorySection>

    </StoryScroller>
  )
}
