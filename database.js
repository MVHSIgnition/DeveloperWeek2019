const database = {
  categories: [
    {
      category: 'Burritos',
      foods: [
        {
          name: 'Chipotle',
          price: 4.8,
          yelpRating: 4.0,
          postmatesLink: 'https://postmates.com/merchant/chipotle-mexican-grill-san-jose-2?p=529a227c-3f4d-53ff-b0cb-584b7939460a',
          reviews: [
            {
              name: 'Carol J',
              text: 'The burrito was actually suprisingly good; better than my Chipotle at home!',
              calcRating: 5.0
            },
            {
              name: 'Greg J',
              text: 'Entirety of Chipotle was pretty bad... including the burrito for some reason... tragic',
              calcRating: 2.3
            },
            {
              name: 'J K',
              text: 'Love this Chipotle - my go to order, btw, is the burritoooooos.',
              calcRating: 4.1
            },
            {
              name: 'Rose C',
              text: 'Always loving the burritos.',
              calcRating: 4.3
            },
            {
              name: 'Anne H',
              text: 'Burritos were meh, love the tacos and always the CHIPS',
              calcRating: 3.9
            }
          ],
          img: 'https://dorastable.com/wp-content/uploads/2018/01/vegan-chipotle-lime-burrito.jpg'
        },
        {
          name: 'Taco Bell',
          price: 3.6,
          yelpRating: 3.5,
          reviews: [
            {
              name: 'David Bell',
              text: 'I LOVE my Taco Bell burritos.',
              calcRating: 5
            },
            {
              name: 'John Shah',
              text: 'Burrito at Taco Bell made me sick, no suprise I suppose',
              calcRating: 1
            }
          ],
          img: 'https://www.tacobell.com/images/22201_burrito_supreme_269x269.jpg'
        }
      ]
    },
    {
      category: 'Curry',
      foods: [
        {
          restaurant: "Kabab & Curry's",
          name: 'Lamb Korma',
          price: 8.5,
          rating: 3.7,
          img: 'https://dinnerthendessert.com/wp-content/uploads/2018/03/Tandoori-Chicken-4.jpg'
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Lamb Kadahi',
          price: 9.25,
          rating: 3.7,
          img: 'https://i0.wp.com/www.relishthebite.com/wp-content/uploads/2015/01/KadaiGhost-4.jpg'
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Saag Lamb',
          price: 9.75,
          rating: 3.7,
          img: 'https://s3-media2.fl.yelpcdn.com/bphoto/tS0zHJ3f96fmK3t4le9wXQ/o.jpg'
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Bhuna Ghost',
          price: 9.25,
          rating: 3.7,
          img: 'https://s3-media4.fl.yelpcdn.com/bphoto/D65JVuH3qh7IyAn8dBPeRw/ls.jpg'
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Lamb stew',
          price: 9.25,
          rating: 3.7,
          img: 'https://s3-media3.fl.yelpcdn.com/bphoto/p0T6q_-g-bod_uwcAKAVsg/o.jpg'
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Keema Aaloo',
          price: 9.95,
          rating: 3.7,
          img: 'https://www.yummytummyaarthi.com/wp-content/uploads/2018/02/1.-2.jpg'
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Chicken Tikka Masala',
          price: 9.25,
          rating: 3.7,
          img: 'https://www.recipetineats.com/wp-content/uploads/2018/04/Chicken-Tikka-Masala_0.jpg'
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Butter Chicken',
          price: 9.25,
          rating: 3.7,
          img: 'https://www.recipetineats.com/wp-content/uploads/2015/07/Butter-Chicken_5.jpg'
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Chicken Korma',
          price: 8.5,
          rating: 3.7,
          img: 'https://dinnerthendessert.com/wp-content/uploads/2018/03/Chicken-Korma.jpg'
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Chicken Kadahi',
          price: 9.25,
          rating: 3.7,
          img: 'https://cdn.shopify.com/s/files/1/1250/7105/products/Chicken_Karahi_5_1024x1024.JPG?v=1470195138'
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Saag Chicken',
          price: 9.25,
          rating: 3.7,
          img: 'https://www.cookincanuck.com/wp-content/uploads/2017/09/Spinach-Chicken-Curry-Recipe-Chicken-Saag-Cookin-Canuck-3.jpg'
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Murgh Choley',
          price: 9.25,
          rating: 3.7,
          img: 'https://www.cheflingkitchen.com/wp-content/uploads/2018/02/murgh-cholay.jpg'
        },
      ]
    },
    {
      category: 'T-Shirts',
      foods: [
        {
          name: 'Supreme Tee',
          color: 'white',
          material: 'cotton',
          price: '500',
          img: 'https://cdn.shopify.com/s/files/1/0866/4890/products/t_large.jpg?v=1539923636'
        },
        {
          name: 'Adidas Tee',
          color: 'black',
          material: 'polyester',
          price: '40',
          img: 'https://images-na.ssl-images-amazon.com/images/I/81YINXHe6WL._UX342_.jpg'
        },
      ]
    },
    {
      category: 'Chicken Dishes',
      foods: [
        {
          name: 'Tandoori Chicken Leg Quarter',
          restaurant: 'Kebab and Curry',
          price: 4.5,
          yelpRating: 4.3,
          reviews: [
            {
              name: 'John Abraham',
              text: 'The Tandoori Chicken brought me back to India it was sooooo good.',
              calcRating: 5
            },
            {
              name: 'Matthew McKown',
              text: 'The Tandoori Chicken was ok, but the price made me fear what was really in it.',
              calcRating: 1
            }
          ],

          description: 'Leg quarter marinated in our homemade spices and baked over grill.',
          img: 'https://dinnerthendessert.com/wp-content/uploads/2018/03/Tandoori-Chicken-4.jpg'
        },
        {
          name: 'Chicken Wow Grilled Chicken',
          restaurant: 'Chicken Wow',
          price: 6.5,
          yelpRating: 4.1,
          reviews: [
            {
              name: 'John Abraham',
              text: 'Grilled Chicken was way too small and not worth the price. Not to mention soggy...dreadful',
              calcRating: 5
            },
            {
              name: 'Allen Heath',
              text: 'Grilled Chicken was actually pretty good and felt kinda healthy.',
              calcRating: 1
            }
          ],
          img: 'https://s3-media4.fl.yelpcdn.com/bphoto/jJD46dPoiuaR8xJFSIc89w/348s.jpg'
        }
      ]
    },
  ],
  formatter: {
    price: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format
  }
}

export default database;
