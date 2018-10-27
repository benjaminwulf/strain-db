import axios from 'axios';

export function getStrainOfStrains(query) {
  //console.log('Query:', query);
  return axios.get(`http://strainapi.evanbusse.com/yh2fbKy/strains/search/name/${query}`)
  
};