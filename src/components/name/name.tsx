import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './name.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <span class="name">
      <span class="nat">Nat</span>
      &nbsp;
      <span class="karmios">Karmios</span>
    </span>
  )
});
