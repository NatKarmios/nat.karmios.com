import type { QRL} from '@builder.io/qwik';
import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './publication-view.css?inline';
import { publicationsBase } from '~/urls';
import Links from './publication-links';
import A from '../a';

interface PublicationProps {
  data: PublicationData;
  expanded?: boolean;
  onClick: QRL<() => void>;
}

const PublicationView = component$(({ data, expanded=false, onClick }: PublicationProps) => {
  useStyles$(styles);
  const { title, conference, details, abstract, filename, doiLink } = data;
  const className = expanded ? 'expanded' : '';
  return (
    <publication class={className}>
      <header onClick$={onClick}>
        <header-text>
          <h2>{title}</h2>
          <subheader>
            <A href={conference.link}>{conference.name}</A>
            <span>{details}</span>
          </subheader>
        </header-text>
        <div class="arrow" />
      </header>
      <div class="content">
        <div class="abstract">
          {abstract}
        </div>
        <Links
          pdf={`${publicationsBase}/${filename}`}
          doi={doiLink}
        />
      </div>
    </publication>
  );
})

export default PublicationView;
