export const generateKey = (type) => `${type}_${Math.round(Math.random()*10000)}`;

export default generateKey;
