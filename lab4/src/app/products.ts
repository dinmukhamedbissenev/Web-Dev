export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    url: string;
    score: number;
  }
  
  export const products = [
    {
      id: 1,
      image: 'iphone11.jpeg',
      name: 'Iphone 11',
      price: 799,
      description: 'Support for wireless and high-speed charging; Powerful Apple A13 processor with 6 cores; 4 GB of RAM; IPS screen with a diagonal of 6.1.',
      url: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000#!/item',
      score: 4.9,
    },
    {
      id: 2,
      image: 'iphone13.jpg',
      name: 'Iphone 13',
      price: 699,
      description: 'Apple iPhone 13 smartphone. Announced Sep 2021. Features 6.1″ display, Apple A15 Bionic chipset, 3240 mAh battery, 512 GB storage, 4 GB RAM',
      url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
      score: 4.9
    },
    {
      id: 3,
      image: 'iphone14.jpeg',
      name: 'Iphone 14',
      price: 299,
      description: 'The iPhone 14 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle',
      url: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000#!/item',
      score: 4.9
    },
    {
      id: 4,
      image: 'airpods.jpg',
      name: 'Airpods 2',
      description: 'They include support for spatial audio and Dolby Atmos, IPX4 water resistance, skin detection and a case supporting MagSafe charging.',
      url: 'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000#!/item',
      score: 4.9,
    },
    {
      id: 5,
      image: 'airpods3.jpg',
      name: 'Airpods 3',
      description: 'The third-generation AirPods are Apple s main wireless earbuds, featuring a streamlined design, force sensor controls, Adaptive EQ, spatial audio with dynamic head tracking, a MagSafe charging case, and more.',
      url: 'https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000#!/item',
      score: 4.9,
    },
    {
      id: 6,
      image: 'airpodsmax.jpeg',
      name: 'Airpods max',
      description: 'AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience.',
      url: 'https://kaspi.kz/shop/p/apple-airpods-max-chernyi-100950846/?c=750000000#!/item',
      score: 4.9
    },
    {
      id: 7,
      image: 'macbookair.jpeg',
      name: 'Macbook m2 air',
      description: 'Apple M2 chip. 8-core CPU with 4 performance cores and 4 efficiency cores; 10-core GPU; 16-core Neural Engine',
      url: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/?c=750000000#!/item',
      score: 4.9
    },
    {
      id: 8,
      image: 'macbookpro.jpeg',
      name: 'Macbook m2 pro',
      description: 'M2. 8-Core CPU 10-Core GPU 8GB Unified Memory 256GB SSD Storage',
      url: 'https://kaspi.kz/shop/p/apple-macbook-pro-13-mneh3-seryi-105514238/?c=750000000#!/item',
      score: 4.9
    },
    {
      id:9,
      image: 'applewatch.jpeg',
      name: 'Apple watch',
      description: 'Apple Watch is a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email. ',
      url: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item',
      score: 4.9
    },
    {
      id:10,
      image: 'ipadair.jpeg',
      name: 'Apple Ipad air',
      description: 'The new iPad Air has an all-screen design, 10.9″ display, M1 chip, Center Stage, works with Apple Pencil and Magic Keyboard, and comes in five colors.',
      url:'https://kaspi.kz/shop/p/apple-ipad-air-2022-10-9-64gb-wi-fi-seryi-104235453/?c=750000000#!/item',
      score: 4.9
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */