//_______WEEK 03________//
const parsingJsonObj = [
    {
      "tags": [
        "Trees"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/1.jpg",
      "price": 10.99,
      "name": "Handcrafted Trees Tech",
      "description": "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur"
    },
    {
      "tags": [
        "Beach",
        "Ocean",
        "Water"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/2.jpg",
      "price": 19.99,
      "name": "Rustic Beach Tech",
      "description": "totam at veritatis eligendi assumenda ex quia praesentium quibusdam ducimus"
    },
    {
      "tags": [
        "Animal",
        "Bear"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/3.jpg",
      "price": 17.99,
      "name": "Handcrafted Bear Tech",
      "description": "vitae mollitia et in accusantium est voluptas officiis est non"
    },
    {
      "tags": [
        "Road"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/4.jpg",
      "price": 15.99,
      "name": "Refined Road Tech",
      "description": "explicabo fugit magnam fugit dolorem itaque unde quidem est quia ut a veritatis sit facere possimus fugit ipsam"
    },
    {
      "tags": [
        "Ocean",
        "Rocks"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/5.jpg",
      "price": 10.99,
      "name": "Unbranded Ocean Tech",
      "description": "facilis aut velit vitae sit dolorum illum nostrum pariatur dolorem vel atque quasi placeat qui"
    },
    {
      "tags": [
        "Sunset",
        "Beach",
        "Ocean"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/6.jpg",
      "price": 9.99,
      "name": "Rustic Ocean Tech",
      "description": "libero reprehenderit blanditiis quidem laborum ullam quae fuga consequuntur minima praesentium consequatur qui excepturi nostrum tempora sunt deleniti"
    },
    {
      "tags": [
        "Rust",
        "Old",
        "Car"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/7.jpg",
      "price": 19.99,
      "name": "Sleek Old Tech",
      "description": "necessitatibus suscipit iure quia voluptates voluptas quidem ipsum laboriosam adipisci"
    },
    {
      "tags": [
        "Fog",
        "Lake",
        "Water"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/12.jpg",
      "price": 9.99,
      "name": "Gorgeous Water Tech",
      "description": "perspiciatis in qui et nemo nisi ad quam consequatur et dignissimos"
    },
    {
      "tags": [
        "Person",
        "Fog"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/13.jpg",
      "price": 14.99,
      "name": "Generic Fog Tech",
      "description": "consectetur voluptas sint excepturi voluptas aut culpa qui excepturi dicta ut voluptas"
    },
    {
      "tags": [
        "Building",
        "Metal"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/14.jpg",
      "price": 11.99,
      "name": "Gorgeous Building Tech",
      "description": "quisquam maxime laudantium error totam unde commodi ullam qui quo sed aperiam"
    },
    {
      "tags": [
        "Sunset",
        "Person",
        "Woman",
        "Meadow"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/15.jpg",
      "price": 10.99,
      "name": "Intelligent Sunset Tech",
      "description": "qui ipsa hic voluptas et rem sed architecto reiciendis labore saepe fugit ab sed sed quos ut adipisci accusantium molestias"
    },
    {
      "tags": [
        "Person",
        "Coffee"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/16.jpg",
      "price": 11.99,
      "name": "Unbranded Coffee Tech",
      "description": "soluta eligendi harum quis molestiae omnis excepturi deserunt sed dolorum dolorum ea non dolor"
    },
    {
      "tags": [
        "Trees",
        "Road"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/17.jpg",
      "price": 9.99,
      "name": "Rustic Road Tech",
      "description": "est ad ipsa et ipsum amet nemo cupiditate placeat praesentium qui illum harum"
    },
    {
      "tags": [
        "Windows",
        "Architecture",
        "Building"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/18.jpg",
      "price": 17.99,
      "name": "Sleek Building Tech",
      "description": "in cumque suscipit et perspiciatis minima ut et consequatur ab neque rerum hic dolore a aut dignissimos"
    },
    {
      "tags": [
        "House",
        "Trees",
        "Fog",
        "Secluded"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/19.jpg",
      "price": 20.99,
      "name": "Tasty Secluded Tech",
      "description": "non et omnis accusantium ut non voluptatem sunt iusto cumque laudantium sunt laboriosam et sequi et totam voluptatem aut vero occaecati quia laudantium"
    },
    {
      "tags": [
        "Architecture",
        "Wall"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/20.jpg",
      "price": 14.99,
      "name": "Ergonomic Architecture Tech",
      "description": "rerum sit voluptatibus sint voluptatem saepe delectus et quasi perferendis laborum et enim dolores quaerat iusto eos odio nisi"
    },
    {
      "tags": [
        "Surf",
        "Ocean",
        "Waves"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/21.jpg",
      "price": 12.99,
      "name": "Intelligent Waves Tech",
      "description": "architecto amet doloremque sit ut repudiandae ducimus rerum enim aut veniam autem aut ut ea consectetur est excepturi explicabo aliquid"
    },
    {
      "tags": [
        "Bike",
        "City",
        "People"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/22.jpg",
      "price": 17.99,
      "name": "Intelligent City Tech",
      "description": "sit animi repellendus voluptas vitae consequatur accusantium optio cupiditate et"
    },
    {
      "tags": [
        "Sky",
        "Fog"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/23.jpg",
      "price": 18.99,
      "name": "Refined Sky Tech",
      "description": "non est voluptatem sint nulla dicta iste natus consequatur accusantium dolores dolore in et distinctio dolore similique"
    },
    {
      "tags": [
        "Rust",
        "Machine",
        "Car"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/24.jpg",
      "price": 12.99,
      "name": "Incredible Car Tech",
      "description": "rerum vero cupiditate et est similique soluta ex sit ex esse repellat necessitatibus voluptatum corrupti et nihil quod"
    },
    {
      "tags": [
        "Animal",
        "Fur",
        "Monkey"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/25.jpg",
      "price": 15.99,
      "name": "Gorgeous Animal Tech",
      "description": "rerum consectetur magni sed enim eveniet et dolorem laudantium ut aut qui voluptatem praesentium soluta iste aliquid dolorem quibusdam veniam voluptas quaerat excepturi"
    },
    {
      "tags": [
        "Machine",
        "Ocean"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/26.jpg",
      "price": 13.99,
      "name": "Ergonomic Machine Tech",
      "description": "minus nihil ipsum explicabo pariatur adipisci harum quia ab et voluptate odio"
    },
    {
      "tags": [
        "Person",
        "Guitar"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/199.jpg",
      "price": 19.99,
      "name": "Small Person Tech",
      "description": "nostrum error quod libero pariatur minus enim suscipit molestiae aliquid praesentium repudiandae repellendus voluptatum illum qui et sapiente voluptas"
    },
    {
      "tags": [
        "City",
        "Buildings",
        "Architecture"
      ],
      "imageUrl": "https://byui-cse.github.io/cse341-course/lesson03/images/200.jpg",
      "price": 17.99,
      "name": "Rustic City Tech",
      "description": "odit eaque aut possimus corrupti nobis voluptatibus veritatis reprehenderit natus debitis"
    }
  ]

  exports.postTeam03 = (req, res, next) => {
    res.redirect('/ta03');
}; 

exports.getTeam03 = (req, res, next) => {
    res.render('pages/ta03', { 
        title: 'Team Activity 03', 
        path: '/ta03', // For pug, EJS 
        parsingJsonObj: parsingJsonObj,
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
};


