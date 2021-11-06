import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'

const Page = () => {
  return  (
    <Layout>
  <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
         Hello, I&apos;m a website-developer based in Austria!
      </Box>
   
      <Box display={{md:'flex'}}>
          <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                  DevelLight
              </Heading>
            <p>(Developer / Designer)</p>
          </Box>
          <Box 
               flexShrink={0}
               mt={{ base: 4, md: 0 }}
               ml={{ md: 6 }}
               textAlign="center"
          >
            <Image 
            borderColor="whiteAlpha.800" 
            borderWidth={2} 
            borderStyle="solid" 
            maxWidth="100px" 
            display="inline-block" 
            borderRadius="full" 
            src="/images/devellight.jpg" 
            alt="Profile Image" />
          </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as='h3' variant="section-title">
         Work
       </Heading>
     <Paragraph>DevelLight is a Website-designer and he programs a website called {' '}
     <NextLink href="/works/develit"><Link>DevelIt</Link></NextLink>.And tries to teach programming to others!</Paragraph>
     <Box align="center" my={4}>
     <NextLink href="/works">
         <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
           My portfolio
       </Button>
     </NextLink>
     </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
           <BioYear>2007</BioYear>
           Born in Vienna, Austria.
        </BioSection>
      <BioSection>
       <BioYear> 2018 </BioYear>
        I begin to learn Programming
      </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/imello07" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @imello07
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @coming soon
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/diese.melone" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @diese.melone
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
  )
}

export default Page