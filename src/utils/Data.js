//Users
let users = {
  user1: {
    id: "user1",
    name: "User 1",
    avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
    likes: ["1", "2"],
    cart: ["1", "2"]
  }
};

//Popular Products
let popularProducts = [
  {
    id: 1,
    name: "Life is good logo Tshirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "20",
    colors: ["beige", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    likes: ["user1"]
  },
  {
    id: 2,
    name: "Nike sport sneakers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "50",
    colors: ["black", "blue", "gray"],
    sizes: ["36", "37", "38", "39", "40"],
    img:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A",
    likes: ["user1", "user1", "user1"]
  },
  {
    id: 3,
    name: "Sea Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "36",
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    likes: ["user1"]
  },
  {
    id: 4,
    name: "Palm Trees Dress",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "35",
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    likes: ["user1", "user1", "user1"]
  },
  {
    id: 5,
    name: "Hawaii bag",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "15",
    colors: ["black", "blue", "gray"],
    sizes: ["60x60", "90x90"],
    img:
      "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    likes: ["user1"]
  },
  {
    id: 6,
    name: "Dog Hat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "10",
    colors: ["black", "blue", "gray"],
    sizes: ["S", "M", "L"],
    img:
      "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    likes: ["user1"]
  },
  {
    id: 7,
    name: "BlueWhite Squares",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "45",
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://static.vecteezy.com/system/resources/previews/002/106/452/large_2x/fashion-shirt-on-white-background-free-photo.jpg",
    likes: ["user1", "user1", "user1", "user1"]
  },
  {
    id: 8,
    name: "Long Jacket",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "75",
    colors: ["brown", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    likes: ["user1"]
  }
];

//Shirts Category Products
let shirtsProducts = [
  {
    id: 1,
    name: "Life is good logo Tshirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "20",
    colors: ["beige", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    likes: ["user1"]
  },
  {
    id: 2,
    name: "Green Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "50",
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://image.shutterstock.com/image-photo/green-blue-checkered-shirt-isolate-260nw-684069727.jpg",
    likes: ["user1", "user1", "user1"]
  },
  {
    id: 3,
    name: "Sea Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "36",
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    likes: ["user1"]
  },
  {
    id: 4,
    name: "Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "35",
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://pngset.com/images/green-and-vintage-image-long-sleeve-shirt-aesthetic-clothing-apparel-sweatshirt-sweater-transparent-png-304064.png",
    likes: ["user1", "user1", "user1"]
  },
  {
    id: 5,
    name: "Green Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "15",
    colors: ["black", "blue", "gray"],
    sizes: ["60x60", "90x90"],
    img:
      "https://t3.ftcdn.net/jpg/00/88/23/38/360_F_88233815_z9d75wq4FgEJ97ViZDEVTCPqrx1NKfA9.jpg",
    likes: ["user1"]
  },
  {
    id: 6,
    name: "BlueWhite Squares",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "45",
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://static.vecteezy.com/system/resources/previews/002/106/452/large_2x/fashion-shirt-on-white-background-free-photo.jpg",
    likes: ["user1", "user1", "user1", "user1"]
  }
];

////Loungwear Category Products
let loungwearProducts = {
  "1": {
    id: 1,
    name: "Life is good logo Tshirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "20",
    colors: ["beige", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    likes: ["user1"]
  },
  "2": {
    id: 2,
    name: "Nike sport sneakers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "50",
    colors: ["black", "blue", "gray"],
    sizes: ["36", "37", "38", "39", "40"],
    img:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A",
    likes: ["user1", "user1", "user1"]
  },
  "3": {
    id: 3,
    name: "Sea Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "36",
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    likes: ["user1"]
  },
  "4": {
    id: 4,
    name: "Palm Trees Dress",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "35",
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    likes: ["user1", "user1", "user1"]
  },
  "5": {
    id: 5,
    name: "Hawaii bag",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "15",
    colors: ["black", "blue", "gray"],
    sizes: ["60x60", "90x90"],
    img:
      "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    likes: ["user1"]
  },
  "6": {
    id: 6,
    name: "Dog Hat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "10",
    colors: ["black", "blue", "gray"],
    sizes: ["S", "M", "L"],
    img:
      "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    likes: ["user1"]
  },
  "7": {
    id: 7,
    name: "Adidas Sneakers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "45",
    colors: ["black", "blue", "gray"],
    sizes: ["36", "37", "38", "39", "40"],
    img: "/assets/images/5.jpg",
    likes: ["user1", "user1", "user1", "user1"]
  },
  "8": {
    id: 8,
    name: "Long Jacket",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "75",
    colors: ["brown", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    likes: ["user1"]
  }
};

////Jackets Category Products
let jacketsProducts = {
  "1": {
    id: 1,
    name: "Life is good logo Tshirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "20",
    colors: ["beige", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    likes: ["user1"]
  },
  "2": {
    id: 2,
    name: "Nike sport sneakers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "50",
    colors: ["black", "blue", "gray"],
    sizes: ["36", "37", "38", "39", "40"],
    img:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A",
    likes: ["user1", "user1", "user1"]
  },
  "3": {
    id: 3,
    name: "Sea Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "36",
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    likes: ["user1"]
  },
  "4": {
    id: 4,
    name: "Palm Trees Dress",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "35",
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
    likes: ["user1", "user1", "user1"]
  },
  "5": {
    id: 5,
    name: "Hawaii bag",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "15",
    colors: ["black", "blue", "gray"],
    sizes: ["60x60", "90x90"],
    img:
      "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    likes: ["user1"]
  },
  "6": {
    id: 6,
    name: "Dog Hat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "10",
    colors: ["black", "blue", "gray"],
    sizes: ["S", "M", "L"],
    img:
      "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    likes: ["user1"]
  },
  "7": {
    id: 7,
    name: "Adidas Sneakers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "45",
    colors: ["black", "blue", "gray"],
    sizes: ["36", "37", "38", "39", "40"],
    img: "/assets/images/5.jpg",
    likes: ["user1", "user1", "user1", "user1"]
  },
  "8": {
    id: 8,
    name: "Long Jacket",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: "75",
    colors: ["brown", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    likes: ["user1"]
  }
};
export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getPopularProducts(productsType) {
  return new Promise((res, rej) => {
    switch (productsType) {
      case "":
        console.log("popular");
        setTimeout(() => res([...popularProducts]), 1000);
        break;
      case "shirts":
        console.log("shirts");
        setTimeout(() => res([...shirtsProducts]), 1000);
        break;
      case "loungwear":
        console.log("loungwear");
        break;
      default:
        break;
    }
    // console.log(result);
  });
}

// export function _saveLikeToggle({ id, hasLiked, authedUser }) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       products = {
//         ...products,
//         [id]: {
//           ...products[id],
//           likes:
//             hasLiked === true
//               ? products[id].likes.filter(uid => uid !== authedUser)
//               : products[id].likes.concat([authedUser])
//         }
//       };

//       res();
//     }, 500);
//   });
// }

// function generateUID() {
//   return (
//     Math.random().toString(36).substring(2, 15) +
//     Math.random().toString(36).substring(2, 15)
//   );
// }

// function formatTweet({ author, text, replyingTo = null }) {
//   return {
//     author,
//     id: generateUID(),
//     likes: [],
//     replies: [],
//     text,
//     timestamp: Date.now(),
//     replyingTo
//   };
// }

// export function _saveTweet({ text, author, replyingTo }) {
//   return new Promise((res, rej) => {
//     const formattedTweet = formatTweet({
//       text,
//       author,
//       replyingTo
//     });

//     setTimeout(() => {
//       tweets = {
//         ...tweets,
//         [formattedTweet.id]: formattedTweet
//       };

//       users = {
//         ...users,
//         [author]: {
//           ...users[author],
//           tweets: users[author].tweets.concat([formattedTweet.id])
//         }
//       };

//       res(formattedTweet);
//     }, 1000);
//   });
// }
