import type { JSXChildren } from '@builder.io/qwik';
import { component$, useStylesScoped$ } from '@builder.io/qwik';
import * as urls from '../../urls';
import A from '../a';
import styles from './achievements.css?inline';

interface AchieveProps {
  date?: string;
  icon: string;
  children: JSXChildren;
  nodash?: boolean;
}

export const Achieve = ({ date = "", icon, children, nodash = false } : AchieveProps) => (
  <>
    <div class="achieve-icon">
      <div class={`icon ${icon}`} />
    </div>
    <div class="achieve-date">{date}</div>
    <div class="achieve-date">{nodash ? '' : '—'}</div>
    <div class="achieve-content">
      {children}
    </div>
  </>
);

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <h1 id="achievements">Achievements, Experience &amp; Education</h1>
      <div class="achievements">
        <div class="achieve-grid">
          <Achieve date="2022 - present" icon="work">Research Engineer, Imperial College London</Achieve>
          <Achieve date="2018 - 2022" icon="certificate">
            MEng Computing, Imperial College London
            <br/>
            <i><small>First class honours; transcript available upon request</small></i>
          </Achieve>
          <Achieve date="2021" icon="work">
            Software Engineer, Netcraft
            <br/>
            <i><small>6-month placement</small></i>
          </Achieve>
          <Achieve date="2020" icon="work">
            Software Engineer, AFS Technologies
            <br/>
            <i><small>3-month internship</small></i>
          </Achieve>
          <Achieve date="2019" icon="work">
            Software Engineer, Bossa Studios
            <br/>
            <i><small>Freelance contract</small></i>
          </Achieve>
          <Achieve date="2018" icon="work">
            Software Engineer, Exceedra Software
            <br/>
            <i><small>3-month internship</small></i>
          </Achieve>
          <Achieve date="2016" icon="certificate">Oracle Certified Associate, Java SE 8 Programmer</Achieve>
          <Achieve icon="more" nodash>
            <i>For more information, see <A href="/CV.pdf">my CV</A> or <A href={urls.linkedin}>my LinkedIn profile</A>.</i>
          </Achieve>
        </div>
      </div>
    </>
  )
});
