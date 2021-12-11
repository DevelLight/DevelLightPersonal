
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/McBabel.jpg'
import thumbWalknote from '../public/images/works/LogoKreis.png'
import thumbPichu2 from '../public/images/works/LogoKreis.png'
import thumbFreeDBTagger from '../public/images/works/LogoKreis.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
           id="inkdrop"
           title="McBabel.de" 
           thumbnail={thumbInkdrop}
             >
            Im developer by McBabel (Webdesigner)!
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="ChatIT"
            thumbnail={thumbWalknote}
            >
            More Infos coming soon!
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Coming Soon">
            
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="Coming Soon"
          >
        
          </WorkGridItem>
        </Section>
     
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
