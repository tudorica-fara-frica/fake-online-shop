import Image from "next/image";
import { Logo } from "../actions";

export default async function AboutPage() {
  const url = await Logo();

  return (
    <div className="mx-auto my-4 flex min-h-screen max-w-[600px] flex-col gap-4 p-4 sm:my-8 lg:max-w-[900px]">
      <Image
        className="self-center"
        src={url}
        width={100}
        height={100}
        alt="scco.p logo"
      />

      <p>
        <span className="text-lg font-semibold">SCCO.P</span> is a purely
        demonstrative project created for{" "}
        <span className="font-semibold underline underline-offset-2">
          my portfolio
        </span>{" "}
        to showcase the core functionality of an online product catalog. The
        purpose of this project is not to solve a real-world problem or feature
        a striking design but to highlight how the functionality of an
        e-commerce platform can be implemented effectively.
      </p>

      <p>
        The project focuses on server-side rendering (SSR) using Next.js,
        ensuring a seamless user experience by dynamically loading product data.
        Built with React, Tailwind CSS, and Supabase, it replicates a real-world
        scenario where external databases are used to fetch and display product
        information.
      </p>

      <p>
        Through this project, I expanded my experience across several domains,
        including building dynamic web applications, managing external data
        integration, and understanding SSR workflows.
      </p>

      <div className="flex flex-col gap-1 rounded bg-secondary p-4">
        <h3 className="text-lg font-semibold">Technologies Used</h3>
        <ul className="flex flex-col gap-1">
          <li>
            <span className="text-lg font-semibold">React</span> – The core
            library for building the user interface, allowing dynamic and
            interactive components.
          </li>
          <li>
            <span className="text-lg font-semibold">Next.js</span> – Utilized
            for server-side rendering (SSR), ensuring fast loading times and
            SEO-friendly pages.
          </li>
          <li>
            <span className="text-lg font-semibold">Tailwind CSS</span> – A
            utility-first CSS framework for rapid styling, which helped in
            building a clean and responsive design.
          </li>
          <li>
            <span className="text-lg font-semibold">ShadCN</span> – A design
            system and component library built on top of Tailwind CSS, helping
            to streamline UI development with pre-designed, customizable
            components.
          </li>
          <li>
            <span className="text-lg font-semibold">Supabase</span> – Used as a
            backend solution, providing a real-time database and user
            authentication for fetching product data from an external source.
          </li>
        </ul>
      </div>

      <p>
        The SCCO.P project allowed me to apply and expand my skills in building
        a dynamic web application. While the design wasn’t the focus, the
        emphasis was on creating a functional, SSR-enabled product catalog. I
        gained valuable experience in integrating external databases, using
        Supabase for real-time data management, and implementing server-side
        rendering with Next.js.
      </p>

      <div className="flex flex-col gap-1 rounded bg-secondary p-4">
        <h3 className="text-lg font-semibold">Key Features</h3>
        <ul className="flex flex-col gap-1">
          <li>
            <span className="text-lg font-semibold">Product Catalog</span> – A
            fully functional catalog displaying a variety of sci-fi products,
            fetched dynamically from an external database via Supabase.
          </li>
          <li>
            <span className="text-lg font-semibold">Product Pages</span> – Each
            product has its dedicated page with detailed information, simulating
            a real-world e-commerce platform experience.
          </li>
          <li>
            <span className="text-lg font-semibold">
              Server-Side Rendering (SSR)
            </span>{" "}
            – Pages are rendered on the server for improved performance and SEO
            optimization, providing a smooth and fast user experience.
          </li>
          <li>
            <span className="text-lg font-semibold">Responsive Design</span> –
            The layout is fully responsive, built using Tailwind CSS, ensuring a
            consistent experience across all devices.
          </li>
        </ul>
      </div>

      <p>
        Rather than upgrading this project, I plan to focus on smaller, modular
        projects in the future to demonstrate specific skills like shopping
        carts, advanced filtering, or user authentication. These smaller
        projects will help me build a diverse portfolio, showcasing my ability
        to handle different aspects of web development. You can check out all my
        projects in{" "}
        <span className="font-semibold underline underline-offset-2">
          my personal portfolio
        </span>{" "}
        to explore my full range of skills.
      </p>
    </div>
  );
}
