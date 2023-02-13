import * as urls from '../../urls';
import A from '../a';

export default () => (
  <>
    <h1 id="contact-me">Contact me</h1>
    <p>
      I can most easily be contacted at:
    </p>
    <ul>
      <li>My personal e-mail, <i class="email">nat [at] karmios [dot] com</i> .</li>
      <li>...or failing that, my Imperial College email, <i class="email">nk4118 [at] ic [dot] ac [dot] uk</i> .</li>
    </ul>
    <p>
      You're more than welcome to reach out via <A href={urls.linkedin}>LinkedIn</A>, however I check it <i>exceedingly</i> rarely.
    </p>
  </>
);
