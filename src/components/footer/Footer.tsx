import { InstagramLogoIcon } from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-slate-700 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Farmacia Generation | Copyright: {data}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <a href="https://www.instagram.com/" target="_blank">
              <InstagramLogoIcon size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
