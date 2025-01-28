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
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 px-4">
      <div className="flex w-56 flex-col items-center justify-center gap-4 rounded-3xl bg-secondary p-4">
        <Image
          src={url}
          height={300}
          width={300}
          alt="Tudor-Gabriel photo"
          className="h-40 w-40 rounded-full"
        />
        <div className="flex flex-col items-center justify-center gap-1">
          <h1>Rîmbu Tudor-Gabriel</h1>
          <h2 className="underline underline-offset-4">Portfolio</h2>
        </div>
      </div>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.instagram.com/tudorrimbu_/"
        className="grid w-56 grid-cols-[1fr_4fr] place-items-center gap-1 rounded-xl border p-2 transition-all hover:bg-secondary"
      >
        <AiOutlineInstagram />
        <h2>Instagram</h2>
      </Link>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="www.linkedin.com/in/tudor-gabriel-rîmbu-81a93230b"
        className="grid w-56 grid-cols-[1fr_4fr] place-items-center gap-1 rounded-xl border p-2 transition-all hover:bg-secondary"
      >
        <AiOutlineLinkedin />
        <h2>LinkedIn</h2>
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/tudorica-fara-frica"
        className="grid w-56 grid-cols-[1fr_4fr] place-items-center gap-1 rounded-xl border p-2 transition-all hover:bg-secondary"
      >
        <AiOutlineGithub />
        <h2>GitHub</h2>
      </Link>
      <Link
        target="_blank"
        href="mailto:rtudorg2003@gmail.com"
        rel="noopener noreferrer"
        className="grid w-56 grid-cols-[1fr_4fr] place-items-center gap-1 rounded-xl border p-2 transition-all hover:bg-secondary"
      >
        <AiOutlineMail />
        <h2>Email</h2>
      </Link>
      <Link
        target="_blank"
        href="tel:+40726816559"
        rel="noopener noreferrer"
        className="grid w-56 grid-cols-[1fr_4fr] place-items-center gap-1 rounded-xl border p-2 transition-all hover:bg-secondary"
      >
        <HiOutlinePhone />
        <h2>Phone</h2>
      </Link>
    </div>
  );
}
