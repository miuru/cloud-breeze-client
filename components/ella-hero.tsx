'use client';
import Image from 'next/image'; import Link from 'next/link'; import { useEffect, useState } from 'react';
function HeroImage({ src, alt, active, priority = false, thumbnail = false }: { src: string; alt: string; active?: boolean; priority?: boolean; thumbnail?: boolean }) {
  const [source, setSource] = useState(src);
  return <Image fill src={source} alt={alt} priority={priority} loading={priority ? 'eager' : 'lazy'} quality={thumbnail ? 65 : 82} sizes={thumbnail ? '80px' : '100vw'} onError={() => setSource('/images/ninearch.png')} className={thumbnail ? 'object-cover' : `object-cover object-center transition-transform duration-[9000ms] ease-out ${active ? 'scale-100' : 'scale-[1.04]'}`} />;
}
const slides = [
  {
    src: '/images/ninearch.png',
    alt: 'Blue train crossing the Nine Arch Bridge in Ella',
    eyebrow: 'Ella, Sri Lanka',
    title: (
      <>
        Ella Cloud Breeze
        <br />
        Villa
      </>
    ),
    text: 'A refined mountain retreat, surrounded by nature and inspired by Ella.'
  },
  {
    src: '/images/tea-country.jpg',
    alt: 'Tea pickers working in Ella’s green tea country',
    eyebrow: 'Ceylon tea country',
    title: 'Green horizons, golden mornings',
    text: 'Discover the estates and people that give Ella its distinctive, generous character.'
  },
  {
    src: '/images/flying.png',
    alt: 'Mountain swing overlooking Ella’s forested hills',
    eyebrow: 'A little adventure',
    title: 'Make the view unforgettable',
    text: 'Add a touch of exhilaration to your highland escape, then return to the villa’s calm.'
  },
  {
    src: '/images/ravana-falls.jpg',
    alt: 'Ravana Falls surrounded by lush forest',
    eyebrow: 'Ravana Waterfall',
    title: 'Follow the sound of the hills',
    text: 'Take the scenic road to cool cascades, forest trails and hidden viewpoints around Ella.'
  },
  {
    src: '/images/rock.png',
    alt: 'Clouds drifting over Ella Rock',
    eyebrow: 'Ella Rock',
    title: 'Stay close to the story of Ella',
    text: 'Wake among cool green hills, then explore the island’s most cinematic highland escapes.'
  },
  {
    src: '/images/temple.png',
    alt: 'Mahamevnawa Buddhist Monastery surrounded by the peaceful hills of Ella',
    eyebrow: 'Peace & Spirituality',
    title: 'Find a moment of stillness',
    text: 'Discover the peaceful atmosphere of Mahamevnawa Asapuwa in Kumbalwela, surrounded by the serene green hills near Ella.'
  },
  {
    src: '/images/dowa.png',
    alt: 'Ancient rock-carved Buddha at Dowa Temple near Ella',
    eyebrow: 'Dowa Temple',
    title: 'Discover Ella’s ancient heritage',
    text: 'Visit this peaceful historic temple, known for its impressive rock-carved Buddha and centuries of Buddhist heritage.'
  },
  {
  src: '/images/dunhida.png',
  alt: 'Dunhinda Waterfall surrounded by lush greenery near Badulla',
  eyebrow: 'Dunhinda Waterfall',
  title: 'Into the wild',
  text: 'Follow a scenic forest trail to one of Sri Lanka’s most spectacular waterfalls, surrounded by lush greenery and mountain beauty.'
},
{
  src: '/images/night.png',
  alt: 'Vibrant nightlife and restaurants in Ella town',
  eyebrow: 'Ella Nightlife',
  title: 'When the hills come alive',
  text: 'Enjoy Ella’s lively evenings with cosy cafés, restaurants, music and a relaxed atmosphere in the heart of the mountain town.'
},
{
  src: '/images/little.png',
  alt: 'Scenic hiking trail at Little Adam’s Peak in Ella',
  eyebrow: 'Little Adam’s Peak',
  title: 'A short climb. An unforgettable view.',
  text: 'Take an easy hike through Ella’s green hills and enjoy breathtaking panoramic views across the surrounding mountains and valleys.'
},
];
export function EllaHero(){const [active,setActive]=useState(0);useEffect(()=>{const id=window.setInterval(()=>setActive(v=>(v+1)%slides.length),5000);return()=>window.clearInterval(id)},[]);const slide=slides[active];return <section className="relative flex h-[clamp(520px,78vh,760px)] items-center overflow-hidden bg-ink text-white"><div className="absolute inset-0">{slides.map((item,i)=><div key={item.src} className={`absolute inset-0 transition-opacity duration-[2200ms] ease-in-out ${i===active?'z-[1] opacity-100':'z-0 opacity-0'}`}><HeroImage src={item.src} alt={i===active?item.alt:''} active={i===active} priority={i<5}/></div>)}</div><div className="absolute inset-0 z-[2] bg-gradient-to-r from-ink/95 via-ink/65 to-ink/10"/><div className="container relative z-[3] py-24"><div key={active} className="hero-copy-in max-w-3xl"><p className="eyebrow text-sand">{slide.eyebrow}</p><h1 className="mt-4 text-5xl leading-[1.05] sm:text-7xl">{slide.title}</h1><p className="mt-6 max-w-lg text-lg leading-8 text-white/90">{slide.text}</p><div className="mt-9 flex flex-wrap gap-3"><Link href="/book" className="rounded-full bg-sand px-5 py-3 text-sm font-bold text-ink transition hover:bg-white">Check Availability</Link><Link href="/gallery" className="rounded-full border border-white/70 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-ink">View Gallery</Link></div></div><div className="mt-12 grid w-full max-w-md grid-cols-5 gap-2 rounded-2xl border border-white/20 bg-black/15 p-3 sm:gap-3">{slides.map((item,i)=><button key={item.src} onClick={()=>setActive(i)} aria-label={`Show ${item.alt}`} aria-pressed={active===i} className={`relative aspect-[4/3] min-w-0 overflow-hidden rounded-lg border transition-opacity duration-500 ${active===i?'scale-105 border-sand shadow-lg shadow-sand/20':'border-white/30 opacity-75 hover:scale-105 hover:opacity-100'}`}><HeroImage src={item.src} alt="" thumbnail/>{active===i&&<span className="absolute inset-x-0 bottom-0 h-1 overflow-hidden bg-white/30"><span key={active} className="thumbnail-timer block h-full origin-left bg-sand"/></span>}</button>)}</div></div></section>}




