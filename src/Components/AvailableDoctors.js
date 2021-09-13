import DisplayDoctor from "./DisplayDoctor";
import classes from './AvailableDoctors.module.css'

const DOC_DETAILS = [
  {
    id: "d1",
    name: "Bailey, Tanya J, MD",
    type: "Pediatrics",
  },
  {
    id: "d2",
    name: "Meier, Diane M, MD",
    type: "Pediatrics",
  },
  {
    id: "d3",
    name: "Pflaster, Gregory J, Jr, MD",
    type: "Urgent Care Medicine, Family Practice",
  },
  {
    id: "d4",
    name: "Phillips, Daniela M, MD",
    type: "Pediatrics",
  },
  {
    id: "d5",
    name: "Swan, Thomas T, MD",
    type: "Family Practice",
  },
];

const OTHER_DETAILS = {
  address1: "12720 Bass Lake Rd",
  address2:"Maple Grove, MN 55369",
  phone: "(763) 559-2861",
  distance: "0.7 Miles Away",
  other: "View Additional Locations (6)",
  enroll: "View Additional Locations (6)",
  premium: "Not Evaluated For Premium Care",
  patient: "Accepting All Patients",
  detail:
    "Office Visit - Primary Doctor - Established Patient - Moderate Complexity",
};

const AvailableDoctors = () => {
  const displayDoc = DOC_DETAILS.map((doc) => {
    return (
      <li key={doc.id}>
      <DisplayDoctor
        name={doc.name}
        type={doc.type}
        address1={OTHER_DETAILS.address1}
        address2={OTHER_DETAILS.address2}
        phone={OTHER_DETAILS.phone}
        distance={OTHER_DETAILS.distance}
        other={OTHER_DETAILS.other}
        enroll={OTHER_DETAILS.enroll}
        premium={OTHER_DETAILS.premium}
        patient={OTHER_DETAILS.patient}
        detail={OTHER_DETAILS.detail}
      />
      </li>
    );
  });

  return (
    <div className={classes.doc}>
      <ul>{displayDoc}</ul>
    </div>
  );
};

export default AvailableDoctors;
