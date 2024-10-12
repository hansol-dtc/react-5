import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';
import './style.css';

import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';

Reveal.initialize({
    hash: true,
    controls: true,
    progress: true,
    center: true,
    slideNumber: 'c/t',
    transition: 'slide', // none/fade/slide/convex/concave/zoom
    plugins: [RevealHighlight, RevealNotes],
});
