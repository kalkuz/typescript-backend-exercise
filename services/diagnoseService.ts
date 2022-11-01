// eslint-disable-next-line @typescript-eslint/no-var-requires
const diagnoses = require('../data/diagnoses.json') as Array<Diagnose>;

export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

const getDiagnoses = (): Diagnose[] => {
  console.log(diagnoses);
  return diagnoses;
};

module.exports = {
  getDiagnoses,
};
