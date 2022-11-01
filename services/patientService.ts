/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const patients = require("../data/patients.json") as Array<Patient>;

const { v1 } = require('uuid');

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Entry {
}

enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

interface Patient {
  id: string;
  name: string;
  ssn: string;
  occupation: string;
  gender: Gender;
  dateOfBirth: string;
  entries: Entry[]
}

export type PublicPatient = Omit<Patient, 'ssn' | 'entries'>;

const getPatients = (): Patient[] => patients;
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