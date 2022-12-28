// Category images import
import img1 from "./../Images/Category/birthday_flower.png";
import img2 from "./../Images/Category/sympathy_flower.png";
import img3 from "./../Images/Category/love_flower.png";
import img4 from "./../Images/Category/getwell_flower.png";

// Member Images
import memberImg1 from "../Images/teamMember/Images-1.png";
import memberImg2 from "../Images/teamMember/Images-2.png";
import memberImg3 from "../Images/teamMember/Images-3.png";
import memberImg4 from "../Images/teamMember/Images-4.png";
import memberImg5 from "../Images/teamMember/Images-5.png";
import memberImg6 from "../Images/teamMember/Images-6.png";

// Testimonial Section Card Images
import testimonialImg1 from "./../Images/Testimonial/img1.png";
import testimonialImg2 from "./../Images/Testimonial/img2.png";
import testimonialImg3 from "./../Images/Testimonial/img3.png";

// Features1
import features1Img1 from "../Images/Features1/img-1.png";
import features1Img2 from "../Images/Features1/img-2.png";
import features1Img3 from "../Images/Features1/img-3.png";

// Product Card Home
import productHomeImg1 from "../Images/ProductCard/img-1.png";
import productHomeImg2 from "../Images/ProductCard/img-2.png";
import productHomeImg3 from "../Images/ProductCard/img-3.png";
import productHomeImg4 from "../Images/ProductCard/img-4.png";

//All Product Page

import productPageImg1 from "../Images/productPage/img-1.png";
import productPageImg2 from "../Images/productPage/img-2.png";
import productPageImg3 from "../Images/productPage/img-3.png";
import productPageImg4 from "../Images/productPage/img-4.png";
import productPageImg5 from "../Images/productPage/img-5.png";
import productPageImg6 from "../Images/productPage/img-6.png";
import productPageImg7 from "../Images/productPage/img-7.png";
import productPageImg8 from "../Images/productPage/img-8.png";
import productPageImg9 from "../Images/productPage/img-9.png";
import productPageImg10 from "../Images/productPage/img-10.png";
import productPageImg11 from "../Images/productPage/img-11.png";
import productPageImg12 from "../Images/productPage/img-12.png";

const DATA = {
  // Testimonial Section Card Data
  testimonial_card_data: [
    {
      img: testimonialImg1,
      title: "Wonderful Flowers",
      name: "Mark Wood",
      description:
        "Bouquet Flowers looks just like the picture! Wonderful present for my sister. Fresh and beautiful. Great summer bouquet!",
      number_of_star: [1, 2, 3, 4, 5],
    },
    {
      img: testimonialImg2,
      title: "Amazing Flowers",
      name: "Trent Boult",
      description:
        "Bouquet Flowers looks just like the picture! Wonderful present for my sister. Fresh and beautiful. Great summer bouquet!",
      number_of_star: [1, 2, 3, 4, 5],
    },
    {
      img: testimonialImg3,
      title: "Awesome Flowers",
      name: "Pat Cummins",
      description:
        "Bouquet Flowers looks just like the picture! Wonderful present for my sister. Fresh and beautiful. Great summer bouquet!",
      number_of_star: [1, 2, 3, 4, 5],
    },
  ],

  // Category Section Data

  category_card_data: [
    {
      img: img1,
      name: "Birthday",
    },
    {
      img: img2,
      name: "Sympathy",
    },
    {
      img: img3,
      name: "Love & Romance",
    },
    {
      img: img4,
      name: "Get Well",
    },
    {
      img: img4,
      name: "Get Well",
    },
    {
      img: img4,
      name: "Get Well",
    },
    {
      img: img4,
      name: "Get Well",
    },
    {
      img: img4,
      name: "Get Well",
    },
    {
      img: img4,
      name: "Get Well",
    },
    {
      img: img4,
      name: "Get Well",
    },
  ],

  // Footer data
  footer: {
    // shop
    shop: [
      {
        name: "Send Flowers",
        to: "#",
      },
      {
        name: "Rose Delivery",
        to: "#",
      },
      {
        name: "Plant Delivery",
        to: "#",
      },
      {
        name: "Gift Delivery",
        to: "#",
      },
      {
        name: "International Flower Delivery",
        to: "#",
      },
      {
        name: "Corporate Gifting",
        to: "#",
      },
    ],
    //Company
    company: [
      {
        name: "About Proflowers",
        to: "#",
      },
      {
        name: "Careers",
        to: "#",
      },
      {
        name: "Press",
        to: "#",
      },
      {
        name: "Delivery Policy",
        to: "#",
      },
      {
        name: "Ethical Labor Standards",
        to: "#",
      },
      {
        name: "Affiliate Program",
        to: "#",
      },
      {
        name: "Blog",
        to: "#",
      },
    ],
    // Help
    help: [
      {
        name: "Customer Service",
        to: "#",
      },
      {
        name: "Flower Guides",
        to: "#",
      },
      {
        name: "Plant Guides",
        to: "#",
      },
      {
        name: "Site Map",
        to: "#",
      },
    ],
  },

  // Header data

  header: {
    Occasions: [
      {
        name: "Birthday",
        to: "/",
      },
      {
        name: "Sympathy",
        to: "/",
      },
      {
        name: "Just Because",
        to: "/",
      },
      {
        name: "Anniversary",
        to: "/",
      },
      {
        name: "Housewarming",
        to: "/",
      },

      {
        name: "Get Well",
        to: "/",
      },
      {
        name: "Congrats",
        to: "/",
      },
      {
        name: "I’m Sorry",
        to: "/",
      },
      {
        name: "New Baby",
        to: "/",
      },
      {
        name: "Wedding",
        to: "/",
      },
    ],
    Flowers: [
      {
        name: "All Flowers",
        to: "/",
      },
      {
        name: "Best  Sellers",
        to: "/",
      },
      {
        name: "Modern Styles",
        to: "/",
      },
      {
        name: "Summer Flowers",
        to: "/",
      },
      {
        name: "Spring Flowers",
        to: "/",
      },

      {
        name: "Winter Flowers",
        to: "/",
      },
      {
        name: "Featured Flowers",
        to: "/",
      },
    ],
  },

  // Member data

  member: [
    {
      id: "1",
      img: memberImg1,
      title: "Ben Stokes",
      meta: "FOUNDER & CHAIRMAN",
      desc: "A proven brand builder and entrepreneur with deep experience in innovative media ventures and consumer products.",
      linkText: "Learn More",
      href: "/",
    },
    {
      id: "2",
      img: memberImg2,
      title: "David Miller",
      meta: "FOUNDER & CHIEF FLORAL OFFICER ",
      desc: "A proven brand builder and entrepreneur with deep experience in innovative media ventures and consumer products.",
      linkText: "Learn More",
      href: "/",
    },
    {
      id: "3",
      img: memberImg3,
      title: "Glenn Maxwell",
      meta: "CHIEF EXECUTIVE OFFICER",
      desc: "A proven brand builder and entrepreneur with deep experience in innovative media ventures and consumer products.",
      linkText: "Learn More",
      href: "/",
    },
    {
      id: "4",
      img: memberImg4,
      title: "Peter Moor",
      meta: "CHIEF FINANCIAL OFFICER",
      desc: "A proven brand builder and entrepreneur with deep experience in innovative media ventures and consumer products.",
      linkText: "Learn More",
      href: "/",
    },

    {
      id: "5",
      img: memberImg5,
      title: "Rayan Burl",
      meta: "SUB FINANCIAL OFFICER",
      desc: "A proven brand builder and entrepreneur with deep experience in innovative media ventures and consumer products.",
      linkText: "Learn More",
      href: "/",
    },
    {
      id: "6",
      img: memberImg6,
      title: "Joe Root",
      meta: "CHIEF FLORAL OFFICER",
      desc: "A proven brand builder and entrepreneur with deep experience in innovative media ventures and consumer products.",
      linkText: "Learn More",
      href: "/",
    },
  ],

  features1: [
    {
      id: "1",
      img: features1Img1,
    },
    {
      id: "2",
      img: features1Img2,
    },
    {
      id: "3",
      img: features1Img3,
    },
  ],

  // Product Data

  product: {
    home: [
      {
        id: "1",
        img: productHomeImg1,
        link: "/products_details",
        bSeller: "Best Seller",
        title: "Summer Sunset",
        price: "$60-93",
        desc: "FLORIST-TO-DOOR",
        btnLink: "/",
        btnText: "Ad to Cart",
      },
      {
        id: "2",
        img: productHomeImg2,
        link: "/products_details",
        title: "Make Me Blush",
        price: "$45-70",
        desc: "FARM-TO-DOOR",
        btnLink: "/",
        btnText: "Ad to Cart",
      },
      {
        id: "3",
        img: productHomeImg3,
        link: "/products_details",
        bSeller: "Best Seller",
        title: "Smiles & Sunshine",
        price: "$48-78",
        desc: "SHIPPED IN A BOX",
        btnLink: "/",
        btnText: "Ad to Cart",
      },
      {
        id: "4",
        img: productHomeImg4,
        link: "/products_details",
        title: "Fiesta Bouquet",
        price: "$55-95",
        desc: "FLORIST-TO-DOOR",
        btnLink: "/",
        btnText: "Ad to Cart",
      },
    ],
  },

  // All product filter data

  checkbox_title: {
    price: [
      {
        id: "1",
        title: "$40-$50",
      },
      {
        id: "2",
        title: "$50-$75",
      },
      {
        id: "3",
        title: "$75-$90",
      },
      {
        id: "4",
        title: "$90-$100",
      },
      {
        id: "5",
        title: "Over $100",
      },
    ],
    occasion: [
      {
        id: "1",
        title: "Anniversary",
      },
      {
        id: "2",
        title: "Birthday",
      },
      {
        id: "3",
        title: "Congratulations",
      },
      {
        id: "4",
        title: "Love",
      },
      {
        id: "5",
        title: "Wedding",
      },
    ],
    flower_type: [
      {
        id: "1",
        title: "Daisy",
      },
      {
        id: "2",
        title: "Hydrangea",
      },
      {
        id: "3",
        title: "Iris",
      },
      {
        id: "4",
        title: "Lily",
      },
      {
        id: "5",
        title: "Rose",
      },
      {
        id: "6",
        title: "Sunflower",
      },
    ],
    color: [
      {
        id: "1",
        title: "White",
      },
      {
        id: "2",
        title: "Green",
      },
      {
        id: "3",
        title: "Pink",
      },
      {
        id: "4",
        title: "Yellow",
      },
      {
        id: "5",
        title: "Purple",
      },
      {
        id: "6",
        title: "Red",
      },
      {
        id: "7",
        title: "Orange",
      },
      {
        id: "8",
        title: "Peach",
      },
      {
        id: "9",
        title: "Blue",
      },
      {
        id: "10",
        title: "Lavender",
      },
    ],
  },

  // All Product data

  all_product: {
    product_page: [
      {
        id: "1",
        img: productPageImg1,
        link: "/products_details",
        title: "Make Me Blush",
        price: "$48-78",
        desc: "SHIPPED IN A BOX",
        btnLink: "/",
        btnText: "Ad to Cart",
      },
      {
        id: "2",
        img: productPageImg2,
        link: "/products_details",
        bSeller: "Best Seller",
        title: "Birthday Brights Bouquet",
        price: "$45-70",
        desc: "FARM-TO-DOOR",
        btnLink: "/",
        btnText: "Ad to Cart",
      },
      {
        id: "3",
        img: productPageImg3,
        link: "/products_details",
        title: "Cookie Bundle",
        price: "$55-95",
        desc: "FLORIST-TO-DOOR",
        btnLink: "/",
        btnText: "Ad to Cart",
      },
      {
        id: "4",
        img: productPageImg4,
        link: "/products_details",
        title: "Truffle Bundle",
        price: "$48-78",
        desc: "SHIPPED IN A BOX",
        btnLink: "/",
        btnText: "Ad to Cart",
      },
      {
        id: "5",
        img: productPageImg5,
        link: "/products_details",
        bSeller: "Best Seller",
        title: "Flutter By Bouquet",
        price: "$45-70",
        desc: "FARM-TO-DOOR",
        btnLink: "/",
        btnText: "Ad to Cart",
      },
      {
        id: "6",
        img: productPageImg6,
        link: "/products_details",
        title: "Pink Roses",
        price: "$55-95",
        desc: "FLORIST-TO-DOOR",
        btnLink: "/",
        btnText: "Ad to Cart",
      },
      {
        id: "7",
        img: productPageImg7,
        link: "/products_details",
        title: "Picnic Tulips",
        price: "$48-78",
        desc: "SHIPPED IN A BOX",
        btnLink: "/",
        btnText: "Ad to Cart",
      },
      {
        id: "8",
        img: productPageImg8,
        link: "/products_details",
        bSeller: "Best Seller",
        title: "Mixed Roses",
        price: "$45-70",
        desc: "FARM-TO-DOOR",
        btnLink: "/",
        btnText: "Ad to Cart",
      },
      {
        id: "9",
        img: productPageImg9,
        link: "/products_details",
        title: "Fiesta Bouquet",
        price: "$55-95",
        desc: "FLORIST-TO-DOOR",
        btnLink: "/",
        btnText: "Ad to Cart",
      },
      {
        id: "10",
        img: productPageImg10,
        link: "/products_details",
        title: "Picnic Tulips",
        price: "$48-78",
        desc: "SHIPPED IN A BOX",
        btnLink: "/",
        btnText: "Ad to Cart",
      },
      {
        id: "11",
        img: productPageImg11,
        link: "/products_details",
        bSeller: "Best Seller",
        title: "Mixed Roses",
        price: "$45-70",
        desc: "FARM-TO-DOOR",
        btnLink: "/",
        btnText: "Ad to Cart",
      },
      {
        id: "12",
        img: productPageImg12,
        link: "/products_details",
        title: "Fiesta Bouquet",
        price: "$55-95",
        desc: "FLORIST-TO-DOOR",
        btnLink: "/",
        btnText: "Ad to Cart",
      },
    ],
  },
};

export default DATA;
