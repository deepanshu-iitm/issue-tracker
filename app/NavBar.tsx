'use client';

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";
import {
    Avatar,
    Box,
    Container,
    DropdownMenu,
    Flex,
    Text,
  } from "@radix-ui/themes";

  const NavBar = () => {
    return (
      <nav className="border-b mb-5 px-5 py-3">
          <Flex justify="between">
            <Flex align="center" gap="3">
              <Link href="/">
                <AiFillBug />
              </Link>
              <NavLinks />
            </Flex>
          </Flex>
      </nav>
    );
  };
const NavLinks = () => {
    const currentPath = usePathname();
  
    const links = [
      { label: "Dashboard", href: "/" },
      { label: "Issues", href: "/issues/list" },
    ];
  
    return (
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={classnames({
                "nav-link": true,
                "!text-zinc-900": link.href === currentPath,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  

export default NavBar
