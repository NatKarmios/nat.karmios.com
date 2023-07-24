import type { Signal} from '@builder.io/qwik';
import { component$, useSignal, useStyles$, $, useVisibleTask$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import publicationData from '~/publication-data';
import PublicationView from '~/components/publications/publication-view';

import styles from './index.css?inline';
import { linkEntries } from '~/components/links';

export const getHash = () => undefined;

export default component$(() => {
  useStyles$(styles);
  const expandedPublication: Signal<string> = useSignal('');

  useVisibleTask$(() => {
    const hash = window.location.hash.slice(1);
    expandedPublication.value = hash;
  });

  const publicationElems = publicationData.flatMap((data, i) => {
    const expanded = (data.name === expandedPublication.value);
    const onClick = expanded
      ? $(() => {
        expandedPublication.value = '';
        window.location.hash = '';
      })
      : $(() => {
        expandedPublication.value = data.name
        window.location.hash = `#${data.name}`;
      });
    const pub = <PublicationView key={data.name} {...{ data, expanded, onClick }} />
    if (i > 0) return [ <sep key={`${data.name}-sep`} />, pub ]
    return [ pub ]
  });

  return (
    <>
      <main>
        <section>
          <h1>Publications</h1>
          {publicationElems}
        </section>
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Publications',
  meta: [
    {
      name: 'path',
      content: linkEntries.pubs.path,
    },
  ],
};
