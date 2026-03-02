const name = '2026-tacas';
const title = 'Gillian Debugging: Swinging Through the (Compositional Symbolic Execution) Trees';

const conferenceName = 'TACAS \'26';
const conferenceLink = 'https://etaps.org/2026/conferences/tacas/';

const details = 'Tool paper';

const abstract = `
In recent years, compositional symbolic execution (CSE)
tools have been growing in prominence and are becoming more and more applicable to real-world codebases.
Still to this day, however, debugging the output of these tools remains difficult, even for specialist users.
To address this, we introduce a debugging interface for symbolic execution tools, integrated with Visual Studio Code and the Gillian multi-language CSE platform, with strong focus on visualisation, interactivity, and intuitive representation of symbolic execution trees.
We take care in making this interface tool-agnostic, easing its transfer to other symbolic analysis tools in future.
We empirically evaluate our work with a user study, the results of which show the debugger's usefulness in helping early researchers understand the principles of CSE and verify fundamental data structure algorithms in Gillian.
`.trim();

const filename = 'tacas26.pdf';

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
}

export default publication;
