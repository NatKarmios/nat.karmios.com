import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './publication-links.css?inline'

interface LinksProps {
  pdf: string,
  doi: string,
}

const Links = component$(({ pdf, doi }: LinksProps) => {
  useStyles$(styles);
  
  return (
    <div class="button-wrapper">
      <a class="button pdf-button" target="_blank" href={pdf}>
        <div class="button-inner">
          <icon />
          <div>PDF</div>
        </div>
      </a>
      <a class="button doi-button" target="_blank" href={doi}>
        <div class="button-inner">
          <icon />
          <div>DOI</div>
        </div>
      </a>
    </div>
  );
});

export default Links;
