/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const patients = require("../data/patients.json") as Array<Patient>;

const { v1 } = require('uuid');

type Patient = {
  id: string,
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: "male" | "female" | "other",
  occupation: string,
};

type PatientNonSensitive = Omit<Patient, "id" | "ssn">;

const getPatients = (): Patient[] => patients;
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const getPatientsNonSensitive = (): PatientNonSensitive[] => patients
  .map(({ id, name, dateOfBirth, gender, occupation }) => ({ id, name, dateOfBirth, gender, occupation }));

const addPatient = (data: Patient): Patient => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return { ...data, id: v1() };
};

module.exports = {
  getPatients,
  getPatientsNonSensitive,
  addPatient,
};