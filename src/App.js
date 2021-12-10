import React from "react";
import "./style.css";
import MedicalTreatment from "./MedicalTreatment.js";





export default function Apps() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <MedicalTreatment treatId = "100" treatCourseId = "67675" type = "Breast Cancer" category = "Cancer Treatment" name = "Simone Dod" startDate = '12/12/2021'/>
      </div>
  );
}
