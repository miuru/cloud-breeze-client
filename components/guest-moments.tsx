import Image from 'next/image';
import Link from 'next/link';
import { Container, SectionHeading } from './ui';

const guests = ['0309','0375','0236','9902','9910','9939','9951','0040','0108','0129'];

export function GuestMoments() {
  return <section className="section bg-cream"><Container><SectionHeading eyebrow="Shared moments" title="Happy guests at Cloud Breeze" text="A few smiles, breakfasts and goodbyes from guests who made Ella their home." /><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{guests.map((id) => <div key={id} className="group relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src={`/images/guests/guest-${id}.jpg`} alt="Happy guests enjoying Cloud Breeze Villa" fill className="object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-105" sizes="(max-width:640px) 50vw, 20vw" /></div>)}</div><div className="mt-8 text-center"><Link href="/gallery" className="inline-flex rounded-full border border-teal/25 px-6 py-3 text-sm font-bold text-teal transition-colors hover:bg-teal hover:text-white">See all guest moments</Link></div></Container></section>;
}
