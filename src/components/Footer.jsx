import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img
          src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
          alt="logo-ct"
          className="w-10"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:underline-offset-1 hover:underline"
            >
              Home
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:underline-offset-1 hover:underline"
            >
              Blog
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:underline-offset-1 hover:underline"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Link to="contact">
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:underline-offset-1 hover:underline"
              >
                Contact Us
              </Typography>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Potterbloom
      </Typography>
    </footer>
  );
}
