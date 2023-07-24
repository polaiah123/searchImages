import axios from "axios"


const searchImages = async(term) => {
 const response = await  axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 3fIGArYZuVsgwTck6dQOM1AjlPW4RVoN5_vRAsF3vko',
        },
        params:{
            query: term,
        },

  });

   return response.data.results;

    };


export default searchImages;
  

