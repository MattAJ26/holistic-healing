// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';
import logo from '../assets/business-logo.jpeg';
import fzPhoto from '../assets/fz-photo.jpg';
import Reviews from '../components/Reviews';
import '../style/Home.css';

const Home = () => {
  return (
    <div className="card mainContainer card-rounded w-75">

      <div className="card-header bg-dark text-center">
        <h1>Eir of Renewal</h1>
      </div>

      <div className="card-body m-5">
        <div className="about">

           <div className="oneThird">
            <img className="photo"src={logo} width="90%" alt="logo"></img>
          </div>

          <div className="twoThirds">
            <h2>About the Company</h2>
            
            <p className="textSize">
              Inspired by the Norse goddess Eir, the healer and protector, Eir of Renewal embodies the spirit of restoration, balance, and rejuvenation. In Norse mythology, Eir was revered as the goddess of healing, known for her wisdom in medicine and her gentle yet powerful touch that could revive both the body and the spirit. She symbolizes hope and renewal, guiding those seeking transformation and recovery.
            </p>
            <p className="textSize">
              At Eir of Renewal, we channel Eir’s legacy, offering a space for growth, healing, and personal evolution. Whether you are looking to restore balance in your life, explore new avenues of self-care, or simply find inspiration, our platform serves as your sanctuary of renewal.
            </p>
            <p className="textSize">
              Let the wisdom of Eir guide you as you embark on your own journey of restoration and rejuvenation.
            </p>
          </div>

        </div>
      </div>


      <Reviews />


      <div className="card-body m-5">
        <div className="about">

          <div className="twoThirds">

            <h2>Services We Offer</h2>

            <p className="textSize">
              The services we currently offer are Reiki and Foot Zone Therapy.
            </p>
            <ul>
                <li>
                  Reiki is a Japanese energy healing technique that involves the transfer of energy through the hands of the practitioner to promote relaxation, reduce stress, and support the body's natural healing processes. During a Reiki session, the practitioner gently places their hands just above the body to channel healing energy, helping to restore physical, emotional, and spiritual balance.
                </li>
                <li>
                  Foot Zone Therapy is a holistic healing method that focuses on applying pressure to specific points on the feet, which correspond to different organs and systems within the body. By stimulating these points, practitioners aim to promote balance, improve circulation, and enhance the body's natural healing capabilities.
                </li>
            </ul>



          </div>

          <div className="oneThird">
            <img className="photo"src={fzPhoto} width="90%" alt="foot zone Photo"></img>
          </div>

          
        </div>
      </div>

      <div className="card-body m-5">
        <div >

          <h2>About the Owner</h2>
          {/* <img class="photo"src={logo} width="50%" alt="logo"></img> */}
          <p className="textSize">
            Hi I’m Sabrina Johnson, the owner of Eir of Renewal! I’d like to introduce myself and talk a little bit about my business.
          </p>
          <p className="textSize">
            I’m a born and raised Utahn, living from as far south as Payson up to Saratoga Springs. I’m the oldest out of three kids and have a daughter with my Husband.
          </p>
          <p className="textSize">
            In 2013 I studied under Julie Cheney at the Academy of Foot Zone Therapy, and spent the first year after graduating working on pregnant and postpartum clients for a midwife in Utah County.
            It wasn’t until 2020 that I decided to go into business officially. Since then I have met many wonderful individuals and have been furthering my education in the energy work sphere and in the foot zoning world.
          </p>

        </div>
      </div>

    </div>
  );
};

export default Home;
