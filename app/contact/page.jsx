import Image from "next/image";
import { TudorPhoto } from "../actions";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import Link from "next/link";
import { HiOutlinePhone } from "react-icons/hi2";

export default async function ContactPage() {
  const url = await TudorPhoto();

  return (
    <div className="grid min-h-screen grid-cols-[14rem] grid-rows-[auto_1fr] place-content-center justify-items-center gap-2 px-4 sm:grid-cols-[18rem_18rem] sm:grid-rows-[auto] sm:flex-row sm:items-center md:grid-cols-[22rem_22rem]">
      <div className="mt-4 flex flex-col items-center justify-center gap-4 rounded-3xl bg-secondary p-4 sm:mt-0 sm:gap-6 sm:p-6 sm:text-xl md:text-2xl">
        <Image
          src={url}
          height={1000}
          width={1000}
          alt="Tudor-Gabriel photo"
          className="h-full w-full rounded-full"
        />
        <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
          <h1>Rîmbu Tudor-Gabriel</h1>
          <h2 className="underline underline-offset-4">Portfolio</h2>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 sm:text-xl">
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/tudorrimbu_/"
          className="grid grid-cols-[1fr_4fr] place-items-center gap-1 rounded-xl border p-2 transition-all hover:bg-secondary sm:p-4"
        >
          <AiOutlineInstagram />
          <h2>Instagram</h2>
        </Link>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/tudor-gabriel-rimbu"
          className="grid grid-cols-[1fr_4fr] place-items-center gap-1 rounded-xl border p-2 transition-all hover:bg-secondary sm:p-4"
        >
          <AiOutlineLinkedin />
          <h2>LinkedIn</h2>
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/tudorica-fara-frica"
          className="grid grid-cols-[1fr_4fr] place-items-center gap-1 rounded-xl border p-2 transition-all hover:bg-secondary sm:p-4"
        >
          <AiOutlineGithub />
          <h2>GitHub</h2>
        </Link>
        <Link
          target="_blank"
          href="mailto:rtudorg2003@gmail.com"
          rel="noopener noreferrer"
          className="grid grid-cols-[1fr_4fr] place-items-center gap-1 rounded-xl border p-2 transition-all hover:bg-secondary sm:p-4"
        >
          <AiOutlineMail />
          <h2>Email</h2>
        </Link>
        <Link
          target="_blank"
          href="tel:+40726816559"
          rel="noopener noreferrer"
          className="grid grid-cols-[1fr_4fr] place-items-center gap-1 rounded-xl border p-2 transition-all hover:bg-secondary sm:p-4"
        >
          <HiOutlinePhone />
          <h2>Phone</h2>
        </Link>
      </div>
    </div>
  );
}
