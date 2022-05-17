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
    price: 20,
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
    price: 50,
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
    price: 36,
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
    price: 35,
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
    price: 15,
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
    price: 10,
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
    price: 45,
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
    price: 75,
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
    price: 20,
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
    price: 50,
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
    price: 36,
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
    price: 35,
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://cms.cloudinary.vpsvc.com//image/fetch/q_auto:eco,w_700,f_auto,dpr_auto/https://s3-eu-west-1.amazonaws.com/sitecore-media-bucket/prod%2Fen%2F%7B41ED0F83-1DC4-4568-B273-4DBCCE756419%7D",
    likes: ["user1", "user1", "user1"]
  },
  {
    id: 5,
    name: "Green Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: 15,
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
    price: 45,
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://static.vecteezy.com/system/resources/previews/002/106/452/large_2x/fashion-shirt-on-white-background-free-photo.jpg",
    likes: ["user1", "user1", "user1", "user1"]
  },
  {
    id: 7,
    name: "BlueWhite Squares",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: 45,
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://media.istockphoto.com/photos/mens-shirt-picture-id488160041?k=20&m=488160041&s=612x612&w=0&h=OH_-skyES8-aeTvDQHdVDZ6GKLsqp6adFJC8u6O6_UY=",
    likes: ["user1", "user1", "user1", "user1"]
  },
  {
    id: 8,
    name: "BlueWhite Squares",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: 45,
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://media.istockphoto.com/photos/shirt-isolated-white-picture-id1083383944?k=20&m=1083383944&s=612x612&w=0&h=m5dh7kTdW5msm43Ne1Lqn_eglRzt9x-x0QWMnddxFz4=",
    likes: ["user1", "user1", "user1", "user1"]
  },
  {
    id: 9,
    name: "BlueWhite Squares",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: 45,
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://media.istockphoto.com/photos/red-plaid-shirt-picture-id498852901?k=20&m=498852901&s=612x612&w=0&h=eMSXW6GDPLsVb39C_V8Uc245jPNDZzDMWxdPVE4y9Tc=",
    likes: ["user1", "user1", "user1", "user1"]
  },
  {
    id: 10,
    name: "BlueWhite Squares",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: 45,
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://media.istockphoto.com/photos/white-tshirt-isolated-on-white-picture-id592689778?k=20&m=592689778&s=612x612&w=0&h=ygyeuqjsgjTTZDzK3RK5sI3gzlyBGQ_tSeqvlkp-3JQ=",
    likes: ["user1", "user1", "user1", "user1"]
  },
  {
    id: 11,
    name: "BlueWhite Squares",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: 45,
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://media.istockphoto.com/photos/blue-flannel-shirt-picture-id184962348?k=20&m=184962348&s=612x612&w=0&h=FEKDhbm3bnOyPEELZMPmOrxqcsVZDiR4-bUeWWxl_Qk=",
    likes: ["user1", "user1", "user1", "user1"]
  },
  {
    id: 12,
    name: "BlueWhite Squares",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: 45,
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://media.istockphoto.com/photos/blue-blank-jeans-and-business-shirt-picture-id1179272851?k=20&m=1179272851&s=612x612&w=0&h=N6rLF0nHRqXXwhYpItgJgPLGaCh5MwZ1qXthd8XfnU8=",
    likes: ["user1", "user1", "user1", "user1"]
  },
  {
    id: 13,
    name: "BlueWhite Squares",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: 45,
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://media.istockphoto.com/photos/close-up-of-the-business-shirt-picture-id963398596?k=20&m=963398596&s=612x612&w=0&h=-mp0euYaNZxRSIUaH2X-L9_vi5hqg7xuRC9ENu6ZXBE=",
    likes: ["user1", "user1", "user1", "user1"]
  },
  {
    id: 14,
    name: "BlueWhite Squares",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: 45,
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://media.istockphoto.com/photos/blue-shirt-isolated-on-white-background-picture-id500462876?k=20&m=500462876&s=612x612&w=0&h=6N_LqazFMdcnWkXOfuc0O6r_jVdTXb1CFfEuWDXic50=",
    likes: ["user1", "user1", "user1", "user1"]
  },
  {
    id: 15,
    name: "BlueWhite Squares",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo, consequat id condimentum ac, volutpat ornare.",
    price: 45,
    colors: ["black", "blue", "gray"],
    sizes: ["XS", "S", "M", "L", "XL"],
    img:
      "https://media.istockphoto.com/photos/black-classic-and-business-shirt-with-button-picture-id1264302718?k=20&m=1264302718&s=612x612&w=0&h=l8JbV84L1mbOkIxXuxa33myzVMYcG14Q6YHhYWjTMHQ=",
    likes: ["user1", "user1", "user1", "user1"]
  }
];

//Cart items
let cartItems = [];

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getPopularProducts(productsType) {
  return new Promise((res, rej) => {
    switch (productsType) {
      case "":
        // console.log("popular");
        setTimeout(() => res([...popularProducts]), 1000);
        break;
      case "shirts":
        // console.log("shirts");
        setTimeout(() => res([...shirtsProducts]), 1000);
        break;
      case "loungwear":
        // console.log("loungwear");
        break;
      default:
        break;
    }
    // console.log(result);
  });
}

export function _addToCart(product, selectedColor, selectedSize) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let item = {
        ...product,
        selectedColor: selectedColor,
        selectedSize: selectedSize
      };
      cartItems.push(item);

      //TODO: Add items to the logged user cart
      // users = {
      //   ...users,
      //   [author]: {
      //     ...users[author],
      //     tweets: users[author].tweets.concat([formattedTweet.id])
      //   }
      // };

      res(cartItems);
    }, 1000);
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

// export function _addToCart({ text, author, replyingTo }) {
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
