import department1 from "../../../../assets/images/department1.png";
import department3 from "../../../../assets/images/department3.png";
import department4 from "../../../../assets/images/department4.png";
import department5 from "../../../../assets/images/department5.png";
import department6 from "../../../../assets/images/department6.png";
import department7 from "../../../../assets/images/department7.png";
import department8 from "../../../../assets/images/department8.png";
import department9 from "../../../../assets/images/department9.png";

const DepartmentsSection = () => {
  return (
    <section className="departments container my-5">
      <div className="row text-center">
        <div className="col-md-3">
          <div className="department-box">
            <img
              src={department1}
              alt="Plastic Surgery"
              className="img-fluid"
            />
            <h5>Plastic Surgery</h5>
            <a href="#">Read More &raquo;</a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="department-box">
            <img
              src={department3}
              alt="Plastic Surgery"
              className="img-fluid"
            />
            <h5>Plastic Surgery</h5>
            <a href="#">Read More &raquo;</a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="department-box">
            <img
              src={department4}
              alt="Plastic Surgery"
              className="img-fluid"
            />
            <h5>Plastic Surgery</h5>
            <a href="#">Read More &raquo;</a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="department-box">
            <img
              src={department5}
              alt="Plastic Surgery"
              className="img-fluid"
            />
            <h5>Plastic Surgery</h5>
            <a href="#">Read More &raquo;</a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="department-box">
            <img
              src={department6}
              alt="Plastic Surgery"
              className="img-fluid"
            />
            <h5>Plastic Surgery</h5>
            <a href="#">Read More &raquo;</a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="department-box">
            <img
              src={department7}
              alt="Plastic Surgery"
              className="img-fluid"
            />
            <h5>Plastic Surgery</h5>
            <a href="#">Read More &raquo;</a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="department-box">
            <img
              src={department8}
              alt="Plastic Surgery"
              className="img-fluid"
            />
            <h5>Plastic Surgery</h5>
            <a href="#">Read More &raquo;</a>
          </div>
        </div>
        <div className="col-md-3">
          <div className="department-box">
            <img
              src={department9}
              alt="Plastic Surgery"
              className="img-fluid"
            />
            <h5>Plastic Surgery</h5>
            <a href="#">Read More &raquo;</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
