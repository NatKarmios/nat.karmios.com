import { component$, useComputed$, useStyles$ } from "@builder.io/qwik";
import { useDocumentHead } from "@builder.io/qwik-city";

import styles from './links.css?inline';

export const linkEntries = {
  home: {
    name: 'Home',
    path: '/',
  },
  pubs: {
    name: 'Publications',
    path: '/publications/'
  }
};

const Links = component$(() => {
  useStyles$(styles);
  const head = useDocumentHead();
  const currentPath = useComputed$(() => {
    for (const meta of head.meta) {
      if (meta.name === 'path') {
        return meta.content || '';
      }
    }
    return '';
  });
  const linkElems = Object.values(linkEntries).flatMap((link, i) => {
    const elem = (link.path === currentPath.value)
      ? <span key={`${i}-elem`}>{link.name}</span>
      : <a href={link.path} key={`${i}-elem`}>{link.name}</a>;
    if (i > 0) return [ <sep key={`${i}-sep`} />, elem ];
    return [ elem ];
  });
  return (
    <div class="links">
      <meta name="head" content={JSON.stringify(head)} />
      {linkElems}
    </div>
  )
});

export default Links;