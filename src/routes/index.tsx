import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import AboutMe from '~/components/index/about-me';
import MainSocials from '~/components/main-socials/main-socials';
import ContactMe from '~/components/index/contact-me';
import SpecialThanks from '~/components/index/special-thanks';
import CoreSkills from '~/components/index/core-skills';
import Achievements from '~/components/index/achievements';
import { linkEntries } from '~/components/links';

export default component$(() => {
  return (
    <>
      <MainSocials />
      <main>
        <section>
          <AboutMe />
          <CoreSkills />
          <Achievements />
          <ContactMe />
          <hbar />
          <SpecialThanks />
        </section>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Home',
  meta: [
    {
      name: 'path',
      content: linkEntries.home.path,
    }
  ]
};
