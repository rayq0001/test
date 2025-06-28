import React from "react";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-base-300 shadow-xl p-5 flex flex-col items-center space-y-5">
      <Image src="/icon.png" alt="logo" width="100" height="100" />
      <div className="flex space-x-5 items-center">
        <span className="font-bold">unex anime</span>
        <a href="https://discord.gg/k99uAvWVRn" target="_blank">
          <DiscordLogoIcon width="25" height="25" />
        </a>
      </div>
      <p className="text-sm text-gray-300">
        unex anime does not store any files on the server, we only link to the
        media which is hosted on 3rd party services.
      </p>
      <p className="text-sm text-gray-300">&copy; unex anime</p>
    </footer>
  );
};

export default Footer;
