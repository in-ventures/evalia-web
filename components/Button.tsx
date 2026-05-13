import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "ghost" | "outline";

type Common = {
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = Common & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "children" | "className">;

export function Button({
  href,
  variant = "primary",
  arrow = true,
  className = "",
  children,
  external = false,
  ...rest
}: LinkProps) {
  const cls = `ev-btn ev-btn--${variant} ${className}`.trim();
  const content = (
    <>
      {children}
      {arrow ? <span className="ev-btn__arrow">→</span> : null}
    </>
  );

  // Mailto, tel, http(s), o externo → <a>; rutas internas → <Link>
  const isExternalLike =
    external ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http://") ||
    href.startsWith("https://");

  if (isExternalLike) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}
