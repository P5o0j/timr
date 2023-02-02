import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0397/0396/9949/products/UP40-SCOUT-BASEBALL-CAP_1200x.jpg?v=1649082073",
    },
    {
      id: 2,
      title: "Tees",
      imageUrl:
        "https://media.boohoo.com/i/boohoo/gzz10835_black_xl?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit",
    },
    {
      id: 3,
      title: "Hoodies",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/celine-bethmann-wearing-beige-distorted-people-sweater-news-photo-1626372511.jpg?crop=0.647xw:0.969xh;0.204xw,0.0288xh&resize=640:*",
    },
    {
      id: 4,
      title: "Accessories",
      imageUrl:
        "https://s.yimg.com/uu/api/res/1.2/3cnICBHjlmgwAOhsuaUSQg--~B/Zmk9ZmlsbDtoPTU4Mzt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2021-01/f6b61a80-624f-11eb-bff7-9ddb566f8583.cf.jpg",
    },
    {
      id: 5,
      title: "Swimwear",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0240/7084/8592/products/greyswimsuitpic4_533x.jpg?v=1646933105",
    },
  ];
  return <Directory categories={categories} />;
};

export default App;
