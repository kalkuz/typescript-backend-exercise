/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Patient, PublicPatient } from "../data/patients";
import patients from "../data/patients";

// const patients = require("../data/patients.json") as Array<Patient>;

const { v1 } = require('uuid');

const getPatients = (): Patient[] => {
  console.log(patients);
  return patients;
};
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const getPatientsNonSensitive = (): PublicPatient[] => patients
  .map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({ id, name, dateOfBirth, gender, occupation, entries: entries || []}));

const addPatient = (data: Patient): Patient => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return { ...data, id: v1() };
};

module.exports = {
  getPatients,
  getPatientsNonSensitive,
  addPatient,
};