export type Attraction = { name: string; category: string; distance: string; description: string; image: string };

export const attractions: Attraction[] = [
  { name: 'Nine Arch Bridge', category: 'Landmark', distance: '1.5 km / 30 min walk', description: 'A colonial-era railway viaduct in lush jungle—especially magical when the blue train appears.', image: '/images/ninearch.png' },
  { name: 'Ravana Waterfall', category: 'Waterfall', distance: '5 km / 15 min by tuk-tuk', description: 'One of Ella’s signature waterfalls, framed by thick greenery and dramatic mountain scenery.', image: '/images/ravana-falls.jpg' },
  { name: 'Ella Rock', category: 'Hiking', distance: 'Around 2-hour hike', description: 'A rewarding trail through tea gardens and forest, ending in sweeping views across the valley.', image: '/images/rock.png' },
  { name: 'Little Adam’s Peak', category: 'Hiking', distance: 'Around 1-hour hike', description: 'An enjoyable ridge walk through tea country with beautiful views of Ella Gap.', image: '/images/little.png' },
  { name: 'Dowa Rock Temple', category: 'Culture', distance: '5km / 20 min by tuk-tuk', description: 'A peaceful historic temple known for rock carvings, murals and its impressive carved Buddha.', image: '/images/dowa.png' },
  { name: 'Adisham Bungalow, Haputale', category: 'Heritage', distance: '45 min drive', description: 'A graceful historic country house and monastery surrounded by misty gardens and hills.', image: '/images/adisham.jpg' },
  { name: 'Flying Ravana', category: 'Adventure', distance: '2km / 10 min by tuk tuk ', description: 'A highland adventure stop with zip lines, swings and big views over the Ella valley.', image: '/images/flying.png' },
  { name: 'Dunhinda Waterfall', category: 'Waterfall', distance: '45 min drive', description: 'Follow a scenic forest path to a spectacular viewpoint over one of Badulla’s finest falls.', image: '/images/dunhida.png' },
  { name: 'Halpewatte Tea Factory', category: 'Tea Country', distance: '20 min by tuk tuk', description: 'See how Ceylon tea is made, from fresh leaf to final cup, amid beautiful tea-country scenery.', image: '/images/tea-country.jpg' },
  { name: 'Mahamevnawa Monastery, Kumbalwela', category: 'Culture', distance: '20 min by tuk tuk', description: 'A quiet Buddhist monastery in the hills, offering a contemplative pause away from busy streets.', image: '/images/temple.png' }
];
