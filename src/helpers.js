import axios from 'axios';

export function getStrainOfStrains(query) {
  console.log('Query:', query);
   axios.get(`http://strainapi.evanbusse.com/yh2fbKy/strains/search/name/${query}`)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
};