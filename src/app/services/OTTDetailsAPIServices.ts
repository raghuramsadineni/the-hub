import axios, { AxiosRequestConfig } from 'axios';

class OTTDetailsAPIService {
    static getOTTProviders = () => {
        var options: AxiosRequestConfig<any> = {
            method: 'GET',
            url: 'https://ott-details.p.rapidapi.com/getPlatforms',
            params: { region: 'US' },
            headers: {
                'x-rapidapi-host': 'ott-details.p.rapidapi.com',
                'x-rapidapi-key': 'a8133470f0mshb5be87c8df08c6cp11ad79jsn5512ffa3f60d'
            }
        };

        axios.request(options).then((response) => {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    static getNewMovies=()=>{
        var options: AxiosRequestConfig<any> = {
            method: 'GET',
            url: 'https://ott-details.p.rapidapi.com/getnew',
            params: {region: 'US', page: '4'},
            headers: {
              'x-rapidapi-host': 'ott-details.p.rapidapi.com',
              'x-rapidapi-key': 'a8133470f0mshb5be87c8df08c6cp11ad79jsn5512ffa3f60d'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    }
}

export default OTTDetailsAPIService;