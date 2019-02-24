const database = {
  categories: [
    {
      category: 'Pizza',
      foods: [
        {
          name: 'Hawaiian',
          price: 10.45,
          rating: 4.2,
          img: 'https://31p86334w2bvkz0249eyr0cr-wpengine.netdna-ssl.com/wp-content/uploads/2014/08/It-doesnt-get-much-better-than-Homemade-Hawaiian-Pizza.-Tropical-paradise-for-dinner-2.jpg'
        },
        {
          name: 'Cheese',
          price: 9.20,
          rating: 4.1,
          img: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'
        },
        {
          name: 'Pepperoni',
          price: 10.25,
          rating: 4.9,
          img: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2Fgluten-free-cookbook%2Fpepperoni-pizza-ck-x.jpg%3Fitok%3DNWreajsZ&w=450&c=sc&poi=face&q=85'
        },
        {
          name: 'Overpriced Pizza',
          price: 1923.9,
          rating: 3.5,
          img: 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/dairyreporter.com/news/markets/pizza-hut-adds-25-more-cheese-to-pan-pizzas-as-part-of-dairy-checkoff-program/7919577-1-eng-GB/Pizza-Hut-adds-25-more-cheese-to-pan-pizzas-as-part-of-dairy-checkoff-program_wrbm_large.jpg'
        }
      ]
    },
    {
      category: 'Burgers',
      foods: [
        {
          name: 'Big Mac',
          price: 1.2,
          rating: .1,
          img: 'https://d12ph5aixxtnio.cloudfront.net/uploads/images/recipes/_full/veganbigmacstill.jpg'
        }
      ]
    },
    {
      category: 'Burritos',
      foods: [
        {
          name: 'Chipotle',
          price: 4.8,
          rating: 4.1,
          img: 'https://dorastable.com/wp-content/uploads/2018/01/vegan-chipotle-lime-burrito.jpg'
        },
        {
          name: 'Taco Bell',
          price: 3.6,
          rating: 3.5,
          img: 'https://www.tacobell.com/images/22201_burrito_supreme_269x269.jpg'
        }
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
