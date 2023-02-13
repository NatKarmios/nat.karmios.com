import type { JSXChildren } from '@builder.io/qwik';
import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './core-skills.css?inline';

interface SkillProps {
  title: string;
  img: string;
  children: JSXChildren;
}

export const Skill = ({ title, img, children } : SkillProps) => (
  <div class="skill">
    <div class="skill-bar" />
    <div class="skill-img" style={`background-image: url(/images/skills/${img}.png)`} />
    <div class="skill-content">
      <h2><i>{title}</i></h2>
      {children}
    </div>
  </div>
);

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <h1 id="core-skills">Core Skills</h1>
      <div>
        <Skill title="Symbolic verification" img="symbolic">
          Since early 2022, I've been immersed in the world of symbolic verification via my work on Gillian. Creating a symbolic debugger required me to step deep into this concept, both in picking apart the process of execution and state matching, and formulating clear and concise ways of communicating execution traces to a user.
        </Skill>
        <Skill title="Hoare &amp; Separation Logic" img="hoare">
          My undergraduate studies involved specialist courses on Hoare Logic &mdash; including big- and small-step semantics &mdash; and Separation Logic for scalable program verification. My work frequently calls upon these principles, both in theoretical and practical contexts.
        </Skill>
        <Skill title="OCaml proficiency" img="ocaml">
          The history of formal methods is entwined with that of OCaml. I've grown a deep appreciation for the language while working in this field, arming me with a natural understanding of advanced techniques, including the monadic programming style, and metaprogramming with modules and functors.
        </Skill>
        <Skill title="Polyglot" img="langs">
          As a self-taught hobbyist, turned software engineer, turned research engineer, my experience ranges over languages at all levels &mdash; from C and Rust to Haskell and OCaml; from Java and Kotlin to Python and JavaScript. A prime example is how my symbolic debugger, introduced a second language (TypeScript) Gillian's codebase.
        </Skill>
        <Skill title="Full stack" img="stack">
          In my numerous engineering roles, I've worked on applications at all levels &mdash; frontend, backend, and databases &mdash; from development to deployment, and maintaining servers thereafter. I'm well-versed in collaboration via Git and GitHub, and I'm comfortable in various development environments, whether it be Windows, Linux, WSL or Docker.
        </Skill>
      </div>
    </>
  );
});
