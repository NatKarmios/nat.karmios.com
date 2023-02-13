import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';
import Name from '../name/name';

export const updateMousePos = (mouseX: number, mouseY: number) => {
  for (const border of document.querySelectorAll('.pfp-gradient') as NodeListOf<HTMLElement>) {
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
    <header>
      <div class="pfp-border" onMouseMove$={e => { updateMousePos(e.clientX, e.clientY)}} >
        <div class="pfp-gradient" />
        <div class="pfp" />
      </div>
      <div>
        <div>
          <Name />
          <span class="pronouns">
            He/They
          </span>
        </div>
        <div class="role">
          Research Engineer
        </div>
      </div>
    </header>
  );
});
