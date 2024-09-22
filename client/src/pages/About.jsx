import headshot from '../assets/headshot.jpg';
import '../style/AboutUs.css';

export default function About() {
    return (
        <div className="card bg-white card-rounded w-75">
        <div className="card-header bg-dark text-center">
          <h1>About Us</h1>
        </div>
        <div className="card-body m-5">
          <h2>About Sabrina</h2>
          <img className="photo"src={headshot} width="33%" alt="logo"></img>
          <p className="p-3">
          Hi I’m Sabrina Johnson, the owner of Eir of Renewal! I’d like to introduce myself and talk a little bit about my business. I’m a born and raised Utahn, living from as far south as Payson up to Saratoga Springs. I’m the oldest out of three kids and have a daughter with my Husband. Some things that I enjoy are listening to audiobooks, going to places with my daughter, having late night philosophical discussions with my husband and playing fetch with my puppy in the evenings. 
          </p>
          <p className="p-3">
          In 2013 I studied under Julie Cheney at the Academy of Foot Zone Therapy, and spent the first year after graduating working on pregnant and postpartum clients for a midwife in Utah County.
          It wasn’t until 2020 that I decided to go into business officially. Since then I have met many wonderful individuals and have been furthering my education in the energy work sphere and in the foot zoning world. I still love to work on pregnant & postpartum clients, but also work on men.  
          </p>
          <p>
          </p>
        </div>
        <div className="card-body m-5">
          <h2>Certifications</h2>
          <p>
            <ul>
                <h5>Reiki Certification:</h5>
                  <p className="p-3">
                    ICRT certified Master of Usui & Tibetan Reiki. Completed May 2019.
                  </p>
                <h5>Foot Zone Certification:</h5>
                  <p className="p-3">
                    Academy of Foot Zone Therapy certified Practitioner. Completed August 2014.
                  </p>
            </ul>
          </p>
        </div>
        <div className="card-body m-5">
        </div>
      </div>
      );
      };

  