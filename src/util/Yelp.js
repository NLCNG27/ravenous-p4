const apiKey = 'jbXIi8fp0MixEMXciqBQLmdITS2clxT_C9yEWDqlIDA4iesKZtyH_RQDnVDDAZIfC_qsRcO8vXQZYv2-6Rynyr9opGc8wW94DjulwO1Px9WatviRsp2gd8bUVrTdXnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                console.log(jsonResponse.businesses);
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.reviewCount,
                }));
            }
        });
    }
};

export default Yelp;


