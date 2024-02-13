import Image from "next/image";
import { Manrope } from "next/font/google";
import { AntForm } from '@/components/AntForm';

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start p-24 ${manrope.className} bg-slate-50`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex mb-6">
        <p className="fixed text-xl left-0 top-0 flex w-full justify-center border-b pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 bg-red-500 text-white">
          Ant Form RS
        </p>
      </div>

      <AntForm />
    </main>
  );
}
