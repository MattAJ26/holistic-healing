import '../style/Contact.css';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
      // <div className="card bg-white card-rounded w-75 view">
      <div className="card mainContainer card-rounded w-75 view">
        <div>

        <div className="card-header bg-dark text-center">
        <h1>Contact Page</h1>
      </div>
      
      <div className="card-body m-5">
        <h2 className="text-center pgTitle">Contact information</h2>
        <div className="infoContact">

          <div className="phoneContact">

            <div  className="titleContact" >
                <p className="center"><h3>Call Us:</h3></p>
            </div>

            <div className="infoC">

                <div className="infoContact">
                  <div className="unicode-icon">&#10137;</div>
                  <p className="left">  Monday - Fraiday</p>
                </div>

                <div className="infoContact">
                  <div className="unicode-icon">&#10137;</div>
                  {/* <span style='font-size:100px;'>&#128197;</span> */}
                  <p className="left">8:00am - 5:00pm</p>
                </div>

                <div className="infoContact">
                  <div className="unicode-icon">&#x2706;</div>
                  <p className="left">+1 801-669-2282</p>
                </div>

            </div>
             
          </div>
              <div className="emailContact">
                  <div  className="titleContact" >
                        <p className="center"><h3>Mail Us:</h3></p>
                  </div>
                  <div className="infoC">
                    <div className="infoContact">
                      <div className="unicode-icon">&#128386;</div>
                      <p className="left email">sjenergydoula@gmail.com</p>
                    </div>

                  </div>
                  
              </div>
        </div>
        <div className="appointmentContact center">
            <p className="left textContact"><h4>We would be happy to see you with us soon:</h4></p>
            {/* <button className="btnContact">Book an appoinment</button> */}
            <Link className="titleLink btnContact" to="/login">Book an appoinment</Link>
        </div>
      </div>


        </div>


        
      </div>
    );
  }