import { Track } from "react-native-track-player";

export const playListData: Track[] = [
    {
        id:1,
        title:'Fast',
        artist: 'Juice Wrld',
        album: 'Death race for World',
        artwork: 'https://swahilisongs.com/wp-content/uploads/2023/06/ab67616d0000b2738b27d35aa2c6dcf99895d664.webp',
        url: require('./assets/one.mp3'),
    },
    {
        id: 2,
        title: 'Raataan Lambiyan',
        artist: 'Tanishk Bagchi, Asees Kaur',
        album: 'Shershaah',
        artwork:
          'https://c.saavncdn.com/238/Shershaah-Original-Motion-Picture-Soundtrack--Hindi-2021-20210815181610-500x500.jpg',
        url: require('./assets/two.mp3'),
      },
      {
        id: 3,
        title: 'Kesariya',
        artist: 'Arijit Singh, Amitabh Bhattacharya',
        album: 'Brahmastra',
        artwork:
          'https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg',
        url: require('./assets/three.mp3'),
      },
      {
        id: 4,
        title: 'Title Track',
        artist: 'Arijit Singh, Parampara Tandon',
        album: 'Pal Pal Dil Ke Paas',
        artwork:
          'https://c.saavncdn.com/328/Pal-Pal-Dil-Ke-Paas-Hindi-2019-20200420150444-500x500.jpg',
        url: require('./assets/four.mp3'),
      },
      {
        id: 5,
        title: 'Besharam Rang',
        artist: 'Vishal & Shekhar, Shilpa Rao',
        album: 'Pathaan',
        artwork:
          'https://c.saavncdn.com/807/Pathaan-Hindi-2022-20221222104158-500x500.jpg',
        url: require('./assets/five.mp3'),
      },

]