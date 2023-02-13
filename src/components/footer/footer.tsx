import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './footer.css?inline';
import Name from '../name/name';
import Socials from '../socials/socials';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <Name />
      <vbar />
      <Socials />
    </footer>
  );
});
