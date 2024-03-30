import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID zpLfc-RBoU2mrLbKxM4kUXh5pl4MUr0FqTRfFBJ234g'
        },
        params: {
            query: term,
        }
    });
    return response.data.results;
};
export default searchImages;