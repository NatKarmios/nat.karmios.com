import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './footer.css?inline';
import Name from '../name/name';
import Socials from '../socials/socials';
import Links from '../links';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <Name />
      <vbar />
      <Links />
      <vbar />
      <Socials />
    </footer>
  );
});
