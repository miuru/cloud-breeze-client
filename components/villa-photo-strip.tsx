import Image from 'next/image';
import { Container, SectionHeading } from './ui';

const photos = [
  ['/images/bathroom/bathroom1.jpg', 'Bathroom details'],
  ['/images/bathroom/bathroom2.jpg', 'Fresh, modern bathroom'],
  ['/images/exterior/ext-2.jpg', 'Cloud Breeze exterior'],
  ['/images/exterior/ext-3.jpg', 'Villa entrance'],
];

export function VillaPhotoStrip() { return <section className="section bg-cream"><Container><SectionHeading eyebrow="Thoughtful details" title="Comfort inside and out" text="Explore the spaces that make Cloud Breeze feel like home." /><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{photos.map(([src, alt]) => <div key={src} className="group relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src={src} alt={alt} fill loading="lazy" sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /></div>)}</div></Container></section>; }
