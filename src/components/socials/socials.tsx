import type { JSXNode } from '@builder.io/qwik';
import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './socials.css?inline';
import * as urls from '~/urls';

interface SocialProps {
  title: string;
  url: string;
  icon: string;
  newtab?: boolean;
}

export const Social = ({ title, url, icon, newtab = false } : SocialProps) : JSXNode => (
  <a
    href={url}
    title={title}
    class="social"
    style={{ '--icon-src': `url("/images/social/${icon}.svg")`}}
    target={newtab ? '_blank' : undefined}
  >
    <div class="social-inner" />
    <div class="social-content">
      <div class="icon">
        <div class="icon-overlay" />
      </div>
    </div>
  </a>
)

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <>
      <Social title="Contact" icon="email" url={urls.contactMe} />
      <Social title="CV" icon="cv" url={urls.cv} newtab />
      <Social title="GitHub" icon="github" url={urls.github} newtab />
      <Social title="Twitter" icon="twitter" url={urls.twitter} newtab />
      <Social title="LinkedIn" icon="linkedin" url={urls.linkedin} newtab />
      <Social title="Steam" icon="steam" url={urls.steam} newtab />
    </>
  );
});
