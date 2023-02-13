import * as urls from '../../urls';
import A from '../a';

export default () => (
  <>
    <p>
      Hi there! I'm Nat, a research engineer in the <A href={urls.vtss}>Verified Software group</A> at <A href={urls.icl}>Imperial College London</A>.
    </p>
    <p>
      I'm currently working on <A href={urls.gillian}>Gillian</A>, a symbolic execution platform that's parametric across target languages. My primary goal is to improve the accessibility and user experience of the Gillian platform in order broaden its user base, in the pursuit of real-world viability.
    </p>
    <p>
      After serving multiple positions in traditional software engineering, my journey in verified software began in the final year of my undergraduate studies &mdash; I completed my final project under <A href={urls.philippa}>Prof. Philippa Gardner</A>, introducing a visual debugger for symbolic execution and state matching in Gillian. After earning a first class MEng degree, I accepted the invitation to continue working on the Gillian platform as a research engineer.
    </p>
    <p>
      In my free time, I love to explore the artform of <A href={urls.steam}>video games</A>.
    </p>
  </>
);
