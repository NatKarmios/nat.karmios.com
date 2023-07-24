import type { JSXChildren } from '@builder.io/qwik';

export interface AProps {
  href: string;
  className?: string;
  children: JSXChildren;
}

export default ({ href, className = '', children } : AProps) => (
  <a
    class={`link ${className}`}
    href={href}
    target="_blank"
  >
    {children}
  </a>
);
