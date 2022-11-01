/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */

import { PublicPatient } from "./services/patientService";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const express = require('express');
const cors = require('cors');

const patientService = require('./services/patientService');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/ping', (_: any, res: { send: (arg0: string) => void; }) => {
  res.send('pong');
});

app.get('/api/patients', (_: any, res: { send: (arg0: string) => void; }) => {
  res.send(patientService.getPatientsNonSensitive());
});

app.get('/api/patients/:id', (req: any, res: { send: (arg0: string) => void; }) => {
  res.send(patientService.getPatients().find((p: PublicPatient) => p.id === req.params.id));
});

app.post('/api/patients', (req: any, res: { send: (arg0: string) => void; }) => {
  const { name, dateOfBirth, gender, occupation } = req.body;
  const newDiaryEntry = patientService.addPatient({
    name, dateOfBirth, gender, occupation,
  });
  res.send(newDiaryEntry);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
