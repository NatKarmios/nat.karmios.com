import { component$, Slot, useClientEffect$ } from '@builder.io/qwik';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

let pendingUpdate = false;

export const updateScale = () => {
  if (pendingUpdate) return;
  pendingUpdate = true;
  
  requestAnimationFrame(() => {
    pendingUpdate = false;
    const root = document.querySelector(':root') as HTMLElement | null
    if (root === null) return;
    root.style.setProperty('--vw', `${window.innerWidth * 0.01}px`);
    root.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
  });
};

export const setupUpdateScale = () => {
  updateScale();
  window.onresize = updateScale;
}

export default component$(() => {
  useClientEffect$(setupUpdateScale);
  return (
    <div class="body-inner">
      <div class="bg-cover" />
      <div class="bg-header-cover" />
      <Header />
      <Slot />
      <Footer />
    </div>
  );
});
