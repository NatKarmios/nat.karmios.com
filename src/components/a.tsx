import type { JSXChildren } from '@builder.io/qwik';

export interface AProps {
  href: string;
  children: JSXChildren;
}

export default ({ href, children } : AProps) => (
  <a class="link" href={href} target="_blank">{children}</a>
);
