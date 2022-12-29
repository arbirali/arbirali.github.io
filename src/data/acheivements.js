import { generateKey } from 'utils/helpers';

const createAcheivement = (title, certificate, imageUrl) => ({ id: generateKey('ache'), title, certificate, imageUrl })

const acheivements = [
  createAcheivement(
    'React Nano Degree (Udacity)',
    'https://graduation.udacity.com/nd019',
    '/images/ReactNanoDegree.svg'
  ),
  createAcheivement(
    'JavaScript : Understanding the Weird Parts (Udemy)',
    'https://www.udemy.com/certificate/UC-I5GD2A1V/',
    '/images/JavaScript.jpg'
  ),
];

export default acheivements;
