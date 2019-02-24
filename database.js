const database = {
  categories: [
    {
      category: 'Burritos',
      foods: [
        {
          name: 'Chipotle',
          price: 4.8,
          yelpRating: 4.0,
          review: [
            {
              name: 'Carol Janson',
              text: 'The burrito was actually suprisingly good; better than my Chipotle at home!',
              calcRating: 4.3
            },
            {
              name: 'Greg J',
              text: 'Entirety of Chipotle was pretty bad... including the burrito for some reason... tragic',
              calcRating: 2.3
            },
            {
              name: 'J K',
              text: 'Entirety of Chipotle was pretty bad... including the burrito for some reason... tragic',
              calcRating: 2.3
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
      category: 'Chicken Dishes',
      foods: [
        {
          name: 'Tandoori Chicken Leg Quarter',
          restaurant: 'Kebab and Curry',
          price: 4.5,
          yelpRating: 4.3,
          posYelpReview: 'The Tandoori Chicken brought me back to India it was sooooo good.',
          negYelpReview: 'The Tandoori Chicken was ok, but the price made me fear what was really in it.',
          
          img: 'https://dinnerthendessert.com/wp-content/uploads/2018/03/Tandoori-Chicken-4.jpg'
        },
        {
          name: 'Chicken Wow Grilled Chicken',
          restaurant: 'Chicken Wow',
          price: 6.5,
          yelpRating: 4.1,
          posYelpReview: 'Grilled Chicken was actually pretty good and felt kinda healthy.',
          negYelpReview: 'Grilled Chicken was way too small and not worth the price.',
          img: 'https://s3-media4.fl.yelpcdn.com/bphoto/jJD46dPoiuaR8xJFSIc89w/348s.jpg'
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
          img: ''
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Saag Lamb',
          price: 9.75,
          rating: 3.7,
          img: ''
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Bhuna Ghost',
          price: 9.25,
          rating: 3.7,
          img: ''
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Lamb stew',
          price: 9.25,
          rating: 3.7,
          img: ''
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Keema Aaloo',
          price: 9.95,
          rating: 3.7,
          img: ''
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Chicken Tikka Masala',
          price: 9.25,
          rating: 3.7,
          img: ''
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Butter Chicken',
          price: 9.25,
          rating: 3.7,
          img: ''
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Chicken Korma',
          price: 8.5,
          rating: 3.7,
          img: ''
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Chicken Kadahi',
          price: 9.25,
          rating: 3.7,
          img: ''
        },
        {
          restaurant: "Kabab & Curry's",
          name: 'Saag Chicken',
          price: 4.2,
          rating: 3.7,
          img: ''
        },
      ]
    }
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
