import headshot from '../assets/headshot.jpg';
import '../style/AboutUs.css';
import { Grid, GridItem } from '@chakra-ui/react'

export default function About() {

  return (
    <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1} bg='tomato' />
  <GridItem colSpan={4} bg='papayawhip' />
 
  <GridItem colSpan={4} bg='tomato' />
</Grid>


  );


    // return (
    //     <div className="card card-rounded w-75 mainContainer">
    //       <div className="card-header bg-dark text-center">
    //             <h1>About Us</h1>
    //       </div>

    //       <div className="contentAbout">
    //           <div className="leftAbout">

    //             <div className="photoAbout">
    //               <img className="photo imgAbout" src={headshot} alt="logo"></img>
    //               <p className="photoTextAbout">" ... Hi I’m Sabrina Johnson, the owner of Eir of Renewal! I’d like to introduce myself and talk a little bit about my business..."</p>
    //             </div>

    //             {/* <div className="certifAbout">
    //                 <h2 className="sectionTitle">Certifications</h2>
    //                 <p>
    //                   <ul>
    //                       <h5>1. Reiki Certification:</h5>
    //                         <p className="p-3">
    //                           ICRT certified Master of Usui & Tibetan Reiki. Completed May 2019.
    //                         </p>
    //                       <h5>2. Foot Zone Certification:</h5>
    //                         <p className="p-3">
    //                           Academy of Foot Zone Therapy certified Practitioner. Completed August 2014.
    //                         </p>
    //                   </ul>
    //                 </p>
    //             </div> */}

    //           </div>

    //           <div className="rightAbout">
    //             <div className="card-body m-5">

    //               <h2 className="text-center pgTitle">About Sabrina</h2>

    //               <p className="p-3 text">
    //                 I’m a born and raised Utahn, living from as far south as Payson up to Saratoga Springs. I’m the oldest out of three kids and have a daughter with my Husband. Some things that I enjoy are listening to audiobooks, going to places with my daughter, having late night philosophical discussions with my husband and playing fetch with my puppy in the evenings. 
    //               </p>

    //               <p className="p-3 text">
    //               In 2013 I studied under Julie Cheney at the Academy of Foot Zone Therapy, and spent the first year after graduating working on pregnant and postpartum clients for a midwife in Utah County.
    //               It wasn’t until 2020 that I decided to go into business officially. Since then I have met many wonderful individuals and have been furthering my education in the energy work sphere and in the foot zoning world. I still love to work on pregnant & postpartum clients, but also work on men.  
    //               </p>

    //             </div>
    //           </div>

              

    //       </div>

    //       <div className="card-body m-5">
    //             <div className="certifAbout">
    //                   <h2 className="sectionTitle centerAlignm">Certifications</h2>
    //                   <p>
    //                     <ul>
    //                         <h4>1. Reiki Certification:</h4>
    //                           <p className="p-3 text">
    //                             ICRT certified Master of Usui & Tibetan Reiki. Completed May 2019.
    //                           </p>
    //                         <h4>2. Foot Zone Certification:</h4>
    //                           <p className="p-3 text">
    //                             Academy of Foot Zone Therapy certified Practitioner. Completed August 2014.
    //                           </p>
    //                     </ul>
    //                   </p>
    //             </div>
    //       </div>

    //     </div>
    // );
};

  