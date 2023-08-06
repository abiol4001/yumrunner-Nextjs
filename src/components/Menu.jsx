"use client";

import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const user = false;

  const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "menu", url: "/menu" },
    { id: 3, title: "working hours", url: "/" },
    { id: 4, title: "contact", url: "/contact" },
  ];
  return (
    <div className="">
      {open ? (
        <p onClick={() => setOpen(false)}>close</p>
      ) : (
        <p onClick={() => setOpen(true)}>open</p>
      )}
      {open && (
        <div className="bg-red-500 text-white uppercase absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col justify-center items-center gap-8">
          {links.map((item) => (
            <Link key={item.id} href={item.url} onClick={()=>setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? <Link href="/login" onClick={()=>setOpen(false)}>Login</Link> : <Link href="/orders" onClick={()=>setOpen(false)}>Orders</Link>}
          <Link href="/cart" onClick={()=>setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
