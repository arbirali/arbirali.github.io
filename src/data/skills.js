import { generateKey } from 'utils/helpers';

const createSkill = (title) => ({ id: generateKey('skill'), title })

const skills = [
  createSkill('JavaScript'),
  createSkill('React.js'),
  createSkill('ES8+'),
  createSkill('Material UI'),
  createSkill('REST APIs'),
  createSkill('HTML'),
  createSkill('CSS'),
  createSkill('SCSS/SASS'),
  createSkill('Frontend'),
  createSkill('Babel'),
  createSkill('Docker'),
  createSkill('Laravel'),
  createSkill('Django'),
  createSkill('Gulp'),
];

export default skills
