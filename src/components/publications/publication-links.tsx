import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './publication-links.css?inline'

interface LinksProps {
  pdf?: string,
  doi?: string,
}

const Links = component$(({ pdf, doi }: LinksProps) => {
  useStyles$(styles);

  let pdfLink;
  if (pdf) {
    pdfLink = (
      <a class="button pdf-button" target="_blank" href={pdf}>
        <div class="button-inner">
          <icon />
          <div>PDF</div>
        </div>
      </a>
    );
  }

  let doiLink;
  if (doi) {
    doiLink = (
      <a class="button doi-button" target="_blank" href={doi}>
        <div class="button-inner">
          <icon />
          <div>DOI</div>
        </div>
      </a>
    );
  }

  return (
    <div class="button-wrapper">
      {pdfLink}
      {doiLink}
    </div>
  );
});

export default Links;
