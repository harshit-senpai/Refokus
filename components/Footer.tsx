import { FooterLinks } from "@/constants";

const Footer = () => {
  return (
    <div className="hidden lg:block min-w-full">
      <div className="max-w-7xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[10rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="flex gap-4 basis-1/2">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">Socials</h4>
            {FooterLinks.map((link, index) => (
              <span className="mt-3 text-zinc-600 block" key={index}>
                {link}
              </span>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">Socials</h4>
            {FooterLinks.map((link, index) => (
              <span className="mt-3 text-zinc-600 block" key={index}>
                {link}
              </span>
            ))}
          </div>
          <div className="basis-1/2">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              iste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
