import { Children } from "react";
import { isExternalUrl } from "../../util/isExternalUrl";
import Link from "next/link";

export default function AutoHref(props: AutoHrefProps) {
  return (
    <>
      {isExternalUrl(props.href) ? (
        <a href={props.href}>{props.children}</a>
      ) : (
        <Link href={props.href}>
          <a>{props.children}</a>
        </Link>
      )}
    </>
  );
}

type AutoHrefProps = {
  href: string;
  children: JSX.Element;
};
