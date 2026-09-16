import Image from 'next/image';
import { Container, SectionHeading } from './ui';

const images = ['1','2','3','4','5','6','7','1'];

export function PropertyViews() {
  return <section className="section bg-white"><Container><SectionHeading eyebrow="From your balcony" title="Views from Cloud Breeze" text="Wake up to Ella’s hills, treetops and glowing skies from the comfort of your room." /><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{images.map(id => <div key={id} className="group relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src={`/images/views/view-${id}.jpg`} alt="View from Cloud Breeze Villa in Ella" fill className="object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-105" sizes="(max-width:640px) 50vw, 25vw" /></div>)}</div></Container></section>;
}
