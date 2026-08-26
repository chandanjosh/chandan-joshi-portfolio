import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  to: string;
  href?: never;
  onClick?: never;
  type?: never;
}

interface AnchorButtonProps extends BaseProps {
  href: string;
  to?: never;
  onClick?: never;
  type?: never;
}

interface ClickButtonProps extends BaseProps {
  onClick?: () => void;
  type?: "button" | "submit";
  to?: never;
  href?: never;
}

type ButtonProps = LinkButtonProps | AnchorButtonProps | ClickButtonProps;

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5";
const variants = {
  primary: "bg-ink text-paper hover:bg-moss",
  ghost: "border border-line text-ink hover:border-ink",
};

export default function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  if ("href" in props && props.href) {
    return (
      <a href={props.href} className={classes}>
        {children}
      </a>
    );
  }

  const { onClick, type = "button" } = props as ClickButtonProps;
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
