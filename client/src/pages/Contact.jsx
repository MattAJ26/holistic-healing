import '../style/Contact.css';

export default function Contact() {
    return (
      // <div className="card bg-white card-rounded w-75 view">
      <div className="card mainContainer card-rounded w-75 view">
        <div>

        <div className="card-header bg-dark text-center">
        <h1>Contact Page</h1>
      </div>
      <div className="card-body m-5">
        <div className="infoContact">

              <div className="phoneContact">

                <div  className="titleContact" >
                    <p className="center"><h4>Call Us:</h4></p>
                </div>

                  <p className="left">Monday - Fraiday</p>
                  <p className="left">8:00am - 5:00pm</p>
                  <p className="left">801-669-2282</p>
                  
              </div>
              <div className="emailContact">
                  <div  className="titleContact" >
                        <p className="center">Mail Us:</p>
                  </div>
                  <div>
                    <p className="left">sjenergydoula@gmail.com</p>
                  </div>
                  
              </div>
        </div>
        <div className="appointmentContact">
            <p className="left">Book an appointment with us:</p>
            
        </div>
      </div>


        </div>


        
      </div>
    );
  }