import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './main-socials.css?inline';
import Socials from '../socials/socials';

export const updateMousePos = (mouseX: number, mouseY: number) => {
  for (const border of document.querySelectorAll('main-socials .social-inner, main-socials .icon-overlay') as NodeListOf<HTMLElement>) {
    const rect = border.getBoundingClientRect();
    const x = mouseX - rect.left;
    const y = mouseY - rect.top;
    border.style.setProperty('--mouse-x', `${x}px`);
    border.style.setProperty('--mouse-y', `${y}px`);
  }
};

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <main-socials onMouseMove$={e => { updateMousePos(e.clientX, e.clientY) }}>
      <Socials />
    </main-socials>
  );
});
