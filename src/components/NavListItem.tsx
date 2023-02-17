import { useEffect, useRef } from "react";
import Link from "next/link";

export default function NavListItem(props: { navId: string; text: string }) {
  const navRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    const navItem = navRef.current;
    if (!navItem) return;
    navItem.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);
  return (
    <li className="list__item" ref={navRef}>
      <Link href={props.navId}>{props.text}</Link>
    </li>
  );
}

