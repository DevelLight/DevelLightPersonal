import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/works/web.jpg'
import thumbMyDeskSetup from '../public/images/works/DevelIt.png'
import thumb500PaidUsers from '../public/images/works/DevelIt.png'
import thumbFinancialGoal from '../public/images/works/DevelIt.png'
import thumbHowToPriceYourself from '../public/images/works/DevelIt.png'
import thumb50xFaster from '../public/images/works/DevelIt.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        New Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Welcome to my new Website!"
            thumbnail={thumbFishWorkflow}
            href='/'
          />
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Posts