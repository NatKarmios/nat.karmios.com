const name = '2023-debt';
const title = 'Symbolic Debugging with Gillian';

const conferenceName = 'DEBT @ ECOOP \'23';
const conferenceLink = 'https://conf.researchr.org/track/ecoop-issta-2023/debt-2023';

const details = 'Tool demonstration';

const abstract = `
Software debugging for concrete execution enjoys a mature suite of tools, but
debugging symbolic execution is still in its infancy. It carries unique
challenges, as a single state can lead to multiple branches representing
different sets of conditions, and symbolic states must be 'matched' against
logical conditions. Some of today's otherwise mature symbolic-execution tools
still rely on plain-text log files for debugging, which provide no good overview
of the execution process and can quickly become overwhelming. We introduce a
debugger for Gillian's verification mode—complete with a custom interface—and
ponder the potential for this interface and the protocol behind it to be used
outside of Gillian.
`.trim();

const filename = 'debt23.pdf';
const doiLink = 'https://dl.acm.org/doi/10.1145/3605155.3605861';

const publication: PublicationData = {
  name,
  title,
  conference: {
    name: conferenceName,
    link: conferenceLink
  },
  details,
  abstract,
  filename,
  doiLink
}

export default publication;
