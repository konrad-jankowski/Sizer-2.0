const shoes = [
  {
    id: "1",
    companyUrl: "https://sklep.sizeer.com/images/loga_marek/Nike_karta.png",
    model: "NIKE AIR FORCE 1 ",
    category: "SNEAKERSY",
    price: 649.99,
    rating: 4.8,
    ratingUsers: 7,
    sizes: [42, 41, 45.5],
    images: [
      "https://sklep.sizeer.com/media/cache/gallery/rc/0ffvs8xj/nike-air-force-1-07-meskie-sneakersy-bialy-dx2660-001.jpg",
      "https://sklep.sizeer.com/media/cache/gallery/rc/xrldmebw/nike-air-force-1-07-meskie-sneakersy-bialy-dx2660-001_2.jpg",
      "https://sklep.sizeer.com/media/cache/gallery/rc/jt2kusdf/nike-air-force-1-07-meskie-sneakersy-bialy-dx2660-001_3.jpg",
      "https://sklep.sizeer.com/media/cache/gallery/rc/d250viee/nike-air-force-1-07-meskie-sneakersy-bialy-dx2660-001_4.jpg",
    ],
    description: [
      "Szykujesz już w swojej szafie miejsce na nowe sneakersy? Wybierz legendarny model Nike Air Force 1! Jego cholewka wykonana została z wysokiej jakości skór: naturalnej i syntetycznej, by zapewnić trwałą i wygodną konstrukcję wspierającą stopy. Za komfort noszenia odpowiada także miękkie, tekstylne wnętrze i amortyzująca poduszka gazowa Air Sole. Gumowy bieżnik dba natomiast o odpowiedni kontakt buta z podłożem. Biała kolorystyka świetnie ożywi każdą stylówkę.",
      "Wierzch: skóra naturalna, skóra syntetyczna",
      "Wyściółka: materiał tekstylny",
      "Podeszwa: system amortyzacji Air-Sole, tworzywo syntetyczne, guma",
    ],
  },
  {
    id: "2",
    companyUrl: "https://sklep.sizeer.com/images/loga_marek/Nike_karta.png",
    model: "NIKE AIR MAX 90",
    category: "SNEAKERSY",
    price: 629.99,
    rating: 5.0,
    ratingUsers: 23,
    discountFrom: 699.99,
    sizes: [42, 43, 44.5],

    images: [
      "https://sklep.sizeer.com/media/cache/gallery/rc/lykwkh1b/nike-air-max-90-meskie-sneakersy-bialy-dq4071-100.jpg",
      "https://sklep.sizeer.com/media/cache/gallery/rc/xmgweshd/nike-air-max-90-meskie-sneakersy-bialy-dq4071-100_2.jpg",
      "https://sklep.sizeer.com/media/cache/gallery/rc/7f990ivu/nike-air-max-90-meskie-sneakersy-bialy-dq4071-100_4.jpg",
    ],
  },
  {
    id: "3",
    companyUrl: "https://sklep.sizeer.com/images/loga_marek/Nike_karta.png",
    category: "SNEAKERSY",
    model: "NIKE WAFFLE ONE",
    price: 419.99,
    rating: 4.5,
    ratingUsers: 19,
    sizes: [42, 43, 44.5],
    images: [
      "https://sklep.sizeer.com/media/cache/gallery/rc/42o7rprk/nike-waffle-one-damskie-sneakersy-rozowy-dc2533-200.jpg",
      "https://sklep.sizeer.com/media/cache/gallery/rc/fe4ggmqm/nike-waffle-one-damskie-sneakersy-rozowy-dc2533-200_2.jpg",
      "https://sklep.sizeer.com/media/cache/gallery/rc/gtw77bnl/nike-waffle-one-damskie-sneakersy-rozowy-dc2533-200_3.jpg",
    ],
  },
  {
    id: "4",
    companyUrl:
      "https://creativeheads.pl/wp-content/uploads/2019/10/logo-adidas-koniczyna.png",
    model: "ADIDAS SUPERSTAR VEGAN",
    category: "SNEAKERSY",
    price: 399.99,
    rating: 4.0,
    ratingUsers: 19,
    sizes: [42, 43, 44.5],
    images: [
      "https://sklep.sizeer.com/media/cache/gallery/rc/5xq5biht/adidas-superstar-vegan-damskie-sneakersy-bialy-fw2295.jpg",
      "https://sklep.sizeer.com/media/cache/gallery/rc/eyi9lwhl/adidas-superstar-vegan-damskie-sneakersy-bialy-fw2295_2.jpg",
      "https://sklep.sizeer.com/media/cache/gallery/rc/nsy1jwb5/adidas-superstar-vegan-damskie-sneakersy-bialy-fw2295_3.jpg",
      "https://sklep.sizeer.com/media/cache/gallery/rc/r3feuxb0/adidas-superstar-vegan-damskie-sneakersy-bialy-fw2295_4.jpg",
    ],
  },
  {
    id: "5",
    companyUrl:
      "https://creativeheads.pl/wp-content/uploads/2019/10/logo-adidas-koniczyna.png",
    model: "ADIDAS NMD_R1",
    category: "SNEAKERSY",
    price: 489.99,
    rating: 4.8,
    ratingUsers: 3,
    discountFrom: 649.99,
    sizes: ["41 1/3", 42, 43, "45 1/3"],
    images: [
      "https://sklep.sizeer.com/media/cache/gallery/rc/f6pbfbmd/adidas-nmd-r1-meskie-sneakersy-czarny-gx6978.jpg",
      "https://sklep.sizeer.com/media/cache/gallery/rc/bnlx6rdp/adidas-nmd-r1-meskie-sneakersy-czarny-gx6978_2.jpg",
      "https://sklep.sizeer.com/media/cache/gallery/rc/anfdgl69/adidas-nmd-r1-meskie-sneakersy-czarny-gx6978_4.jpg",
    ],
    description: [
      "Jako prawdziwy sneakerhead z pewnością znasz model adidas NMD. Ale spójrz! Teraz powstała jego nowa odsłona, która będzie idealna do Twoich codziennych outfitów! Buty posiadają miękkie, elastyczne cholewki ze sznurowadłami i pętelką ułatwiającą zakładanie. Wewnętrzna wyściółka chroni stopę przed otarciami. Na spodzie z kolei znajduje się sprężysta, amortyzująca wstrząsy podeszwa BOOST, wykończona od spodu przyczepną gumą. Wyposażony w takie sneakersy możesz przemierzać miasto wzdłuż i wszerz! Ozdobnymi detalami są wstawki z kolorowym obrysem w obrębie podeszwy oraz kontrastowa taśma i logo na zapiętku.",
      "Wierzch: materiał tekstylny (w tym co najmniej 50% Parley Ocean Plastic i 50% poliestru z recyklingu)",
      "Wyściółka: materiał tekstylny",
      "Podeszwa: BOOST, guma",
    ],
  },
];

export default shoes;
