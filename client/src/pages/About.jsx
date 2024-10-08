import headshot from '../assets/headshot.jpg';
import '../style/AboutUs.css';
import { Grid, GridItem, Text } from '@chakra-ui/react'

export default function About() {

  return (
    <Grid
      h='auto'
      w='80%'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
      m={20}
    >

        <GridItem 
          rowSpan={2} 
          colSpan={1}  
        >

          <img className="photo imgAbout" src={headshot} alt="logo"></img>
          <p className="photoTextAbout">" ... Hi I’m Sabrina Johnson, the owner of Eir of Renewal! I’d like to introduce myself and talk a little bit about my business..."</p>

        </GridItem>
        <GridItem 
          colSpan={4} 
          bg='#d6d5c9'
          p={5}
          borderRadius="10px"
        >

        <div className="rightAbout">
                <div className="card-body m-5">

                  <h2 className="text-center pgTitle">About Sabrina</h2>

                  <Text textAlign="justify">
                    I’m a born and raised Utahn, living from as far south as Payson up to Saratoga Springs. I’m the oldest out of three kids and have a daughter with my Husband. Some things that I enjoy are listening to audiobooks, going to places with my daughter, having late night philosophical discussions with my husband and playing fetch with my puppy in the evenings. 
                  </Text>

                  <Text textAlign="justify">
                  In 2013 I studied under Julie Cheney at the Academy of Foot Zone Therapy, and spent the first year after graduating working on pregnant and postpartum clients for a midwife in Utah County.
                  It wasn’t until 2020 that I decided to go into business officially. Since then I have met many wonderful individuals and have been furthering my education in the energy work sphere and in the foot zoning world. I still love to work on pregnant & postpartum clients, but also work on men.  
                  </Text>

                </div>
          </div>
        </GridItem>
        <GridItem 
          colSpan={4} 
          bg='#d6d5c9' 
          p={5}
          borderRadius="10px"
        >

          <h2 className="sectionTitle">Certifications</h2>

          <h4>1. Reiki Certification:</h4>
          <p className="p-3" fontSize="15px">
            ICRT certified Master of Usui & Tibetan Reiki. Completed May 2019.
          </p>
          <h4>2. Foot Zone Certification:</h4>
          <p className="p-3" fontSize="15px">
            Academy of Foot Zone Therapy certified Practitioner. Completed August 2014.
          </p>
        </GridItem>

    </Grid>
  );
};

  