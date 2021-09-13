import DoctorImage from "../assets/pcpIcon.svg";
import classes from "./DisplayDoctor.module.css";

const DisplayDoctor = (props) => {
    const phone = `${props.phone} PHONE`;

  return (
    <div className={classes.outer}>
      <div className={classes.ProviderList}>
        <div className={classes.docDetails}>
          <div className={classes["doc-img"]}>
            <img src={DoctorImage} alt="Doctor" />
          </div>
          <div className={classes.details}>
            <h1>
              {props.name}
              <span>{props.type}</span>
            </h1>
            <div>{props.address1}</div>
            <div>{props.address2}</div>
            <div> {phone}</div>
            <div className={classes.location}>
              <div>{props.distance}</div>
              <div>{props.other}</div>
              <div>{props.enroll}</div>
            </div>
          </div>
        </div>
        <div className={classes.patientType}>
          <h6>{props.premium}</h6>
          <h6>{props.patient}</h6>
        </div>
      </div>
      <div className={classes.floater}>
        <span className={classes.botDetails}>{props.detail}</span>
      </div>
    </div>
  );
};

export default DisplayDoctor;
