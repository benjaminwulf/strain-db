import axios from 'axios';

export function getStrainOfStrains(query) {
  return axios.get(`http://strainapi.evanbusse.com/yh2fbKy/strains/search/name/${query}`)
  
};

export function getEffects(id) {
  return axios.get(`https://strainapi.evanbusse.com/yh2fbKy/strains/data/effects/${id}`)

};

export function getFlavors(id) {
  return axios.get(`https://strainapi.evanbusse.com/yh2fbKy/strains/data/flavors/${id}`)
  
};