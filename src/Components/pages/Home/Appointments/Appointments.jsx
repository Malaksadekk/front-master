import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import appointmentLeft from "../../../../assets/images/appointment-left.jpg";
import appointmentright from "../../../../assets/images/appointment-right.jpg";
import styles from "../Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Appointments() {
  const [workingHours, setWorkingHours] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    department: "",
    phoneNumber: "",
    datePicker: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); //

    try {
      const response = await axios.post(
        "http://localhost:5000/api/appointments",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Appointment booked successfully!");
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        console.log(error);
        toast.error(error.response.data[0] || "Error booking appointment.");
      } else {
        toast.error("Error booking appointment. Please try again.");
      }
      console.error("There was an error!", error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/workingHours"
        );
        console.log(response.data[0]);
        setWorkingHours(response.data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <section id="appointment" className={styles.appointment}>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-6 col-12 p-0">
            <div className={styles["appointment-left"]}>
              <img
                src={appointmentLeft}
                alt="Background Image"
                className={styles["background-img"]}
              />
              <div className={styles["time-info"]}>
                <div className={`${styles["al-title"]} mb-4`}>
                  <h2 className="">
                    <span>24 Hours </span>
                  </h2>
                  <h2>Opening Our Services</h2>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Saturday</div>
                  <div className={styles["day-time"]}>
                    {workingHours.days.saturday}
                  </div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Sunday</div>
                  <div className={styles["day-time"]}>
                    {workingHours.days.sunday}
                  </div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Monday</div>
                  <div className={styles["day-time"]}>
                    {workingHours.days.monday}
                  </div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Tuesday</div>
                  <div className={styles["day-time"]}>
                    {workingHours.days.tuesday}
                  </div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Wednesday</div>
                  <div className={styles["day-time"]}>
                    {workingHours.days.wednesday}
                  </div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Thursday</div>
                  <div className={styles["day-time"]}>
                    {workingHours.days.thursday}
                  </div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Friday</div>
                  <div className={styles["day-time"]}>
                    {workingHours.days.friday}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 p-0">
            <div className={styles["appointment-right"]}>
              <img
                src={appointmentright}
                alt="Background Image"
                className={styles["background-img"]}
              />
              <div className={`${styles["ar-title"]} mb-4`}>
                <h2>
                  <span>Make An</span>
                </h2>
                <h2>Appointment Now</h2>
              </div>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <select
                  id="department"
                  name="department"
                  className="w-100"
                  title="department"
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option value="">Select Departments</option>
                  <option value="Dental">Dental</option>
                  <option value="U.C">U.C</option>
                </select>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <input
                  type="date"
                  id="datePicker"
                  name="datePicker"
                  value={formData.datePicker}
                  onChange={handleChange}
                />
                <button
                  className={`${styles["lab-btn"]} bg-white`}
                  type="submit"
                >
                  <span>
                    Book Appointment{" "}
                    <FontAwesomeIcon icon={faAnglesRight} size="xs" />
                  </span>
                </button>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointments;
