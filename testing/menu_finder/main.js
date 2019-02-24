const request = require('request')
const latitude = 37.3257436
const longitude = -121.9461324
const key = '96de559fd881a9e4ba0f30f67bd3439c'

const menu_finder = (latitude, longitude, key) => {
    return new Promise((resolve, reject) => {
        request(`https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}&apikey=${key}`, { json: true }, (err, res, body) => {
            const nearby_restaurants = body.nearby_restaurants
            const urls = []
            nearby_restaurants.forEach(element => {
                const url = element.restaurant.menu_url
                urls.push(url)
            });
            resolve(urls);
        });
    });
}

menu_finder(latitude, longitude, key).then(data => {
    console.log(data);
});