import Image from 'next/image';

export default function Loading(){
  return <div className="fixed inset-0 z-[100] grid place-items-center bg-cream" aria-label="Loading Cloud Breeze Villa" role="status"><div className="flex flex-col items-center"><div className="relative grid h-24 w-24 place-items-center"><span className="absolute inset-0 rounded-full border border-sand/50 border-t-teal animate-spin"/><Image src="/images/cloud-breeze-logo.png" width={150} height={150} className="h-16 w-16 rounded-full object-cover object-[50%_27%]" alt="" priority/></div><p className="mt-5 font-serif text-xl text-teal">Cloud Breeze <span className="text-ocean">Villa</span></p><span className="mt-2 text-[.65rem] font-bold uppercase tracking-[.28em] text-ocean">Ella, Sri Lanka</span></div></div>
}
