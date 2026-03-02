import * as urls from '../../urls';
import A from '../a';

export default () => (
  <>
    <p>
      Hi there! I'm Nat, a research engineer and PhD student in the <A href={urls.vtss}>Verified Software group</A> at <A href={urls.icl}>Imperial College London</A>.
    </p>
    <p>
      I've carried a passion for programming throughout my undergraduate studies and multiple industry positions, and now I'm taking my interests to the next level in striving for a PhD in PL research under <A href={urls.philippa}>Prof. Philippa Gardner</A>, focusing on the user experience of program analysis tools.
    </p>
    <p>
      After my final undergraduate project&mdash;where I developed a visual debugger for symbolic execution -based program analyses in <A href={urls.gillian}>the Gillian platform</A>&mdash;I accepted the invitation to join the Verified Software group and continue this pursuit. This began with leveraging Gillian's parametric nature to explore language-agnostic symbolic execution debugging, before expanding the scope past Gillian to <i>tool</i>-agnostic debugging.
    </p>
    <p>
      My work places me at an interstice between precise PL theory, subjective evaluation with diverse user groups, and raw software engineering; I find it incredibly rewarding.
    </p>
    <p>
      In my free time, I love tinkering with <A href={urls.nixConfig}>my NixOS setup</A>, experimenting with self-hosting, and exploring the artform of <A href={urls.steam}>video games</A>.
    </p>
  </>
);
