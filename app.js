1
/**
2
 * PulseCare India - Elite Emergency Medical Services & Ambulance Fleet
3
 * Core Application Engine with Multi-City Private Hospital Network
4
 */
5

6
// INDIAN METROPOLITAN REGIONS, PRIVATE HOSPITALS & LANDMARKS
7
const CITIES = {
8
  DELHI: {
9
    name: 'Delhi NCR',
10
    code: 'DELHI',
11
    center: [28.6139, 77.2090],
12
    zoom: 12,
13
    hospitals: [
14
      { id: 'HOSP-DEL-1', name: 'Max Super Specialty Hospital, Saket', type: 'Private Tertiary Quaternary', icuBeds: 14, ventBeds: 9, oxyStatus: 'Optimal', lat: 28.5284, lng: 77.2119 },
15
      { id: 'HOSP-DEL-2', name: 'Fortis Escorts Heart Institute, Okhla', type: 'Private Cardiac Apex', icuBeds: 18, ventBeds: 12, oxyStatus: 'Optimal', lat: 28.5604, lng: 77.2798 },
16
      { id: 'HOSP-DEL-3', name: 'Indraprastha Apollo Hospital, Sarita Vihar', type: 'Private Multi-Specialty', icuBeds: 16, ventBeds: 11, oxyStatus: 'Optimal', lat: 28.5414, lng: 77.2831 },
17
      { id: 'HOSP-DEL-4', name: 'Medanta - The Medicity, Gurugram', type: 'Private Quaternary Care', icuBeds: 22, ventBeds: 16, oxyStatus: 'Optimal', lat: 28.4398, lng: 77.0422 }
18
    ],
19
    landmarks: [
20
      'DLF Cyber Hub, Gurugram',
21
      'Connaught Place Inner Circle',
