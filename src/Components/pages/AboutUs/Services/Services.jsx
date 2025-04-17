import featureImg1 from "../../../../assets/images/feature-item1.png";
import featureImg2 from "../../../../assets/images/feature-item2.png";
import featureImg3 from "../../../../assets/images/feature-item3.png";
import featureImg4 from "../../../../assets/images/feature-item4.png";
import sponImg1 from "../../../../assets/images/spon1.png";
import sponImg2 from "../../../../assets/images/spon2.png";
import sponImg3 from "../../../../assets/images/spon3.png";
import sponImg4 from "../../../../assets/images/spon4.png";
import sponImg5 from "../../../../assets/images/spon5.png";
import sponImg6 from "../../../../assets/images/spon6.png";

const Services = () => {
  return (
    <div>
      <section className="services container my-5">
        <div className="row text-center">
          <div className="col-md-3">
            <div className="service-box">
              <img
                src={featureImg1}
                alt="Medical Treatment"
                className="img-fluid"
              />
              <h5>Medical Treatment</h5>
              <p>
                We provide top-notch medical treatments to help you recover and
                thrive. Our specialists are here to support your health journey
                with care and expertise.
              </p>
              <a href="#">Read More &raquo;</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service-box">
              <img
                src={featureImg2}
                alt="Emergency Help"
                className="img-fluid"
              />
              <h5>Emergency Help</h5>
              <p>
                Our emergency team is always on standby to offer immediate
                assistance during critical times. Your health and safety are our
                top priorities.
              </p>
              <a href="#">Read More &raquo;</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service-box">
              <img
                src={featureImg3}
                alt="Medical Professionals"
                className="img-fluid"
              />
              <h5>Medical Professionals</h5>
              <p>
                Our team of certified medical professionals provides expert care
                and consultations for all your healthcare needs.
              </p>
              <a href="#">Read More &raquo;</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service-box">
              <img
                src={featureImg4}
                alt="Qualified Doctors"
                className="img-fluid"
              />
              <h5>Qualified Doctors</h5>
              <p>
                Our doctors are highly qualified and experienced, providing
                personalized care and treatment plans for each patient.
              </p>
              <a href="#">Read More &raquo;</a>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-5 spon-bg">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <img src={sponImg1} alt="Logo 1" className="img-fluid" />
            </div>
            <div className="col-2">
              <img src={sponImg2} alt="Logo 2" className="img-fluid" />
            </div>
            <div className="col-2">
              <img src={sponImg3} alt="Logo 3" className="img-fluid" />
            </div>
            <div className="col-2">
              <img src={sponImg4} alt="Logo 4" className="img-fluid" />
            </div>
            <div className="col-2">
              <img src={sponImg5} alt="Logo 5" className="img-fluid" />
            </div>
            <div className="col-2">
              <img src={sponImg6} alt="Logo 6" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
