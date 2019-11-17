import 'bootstrap';
import './scss/main.scss';
import 'highlight.js/styles/default.css';

import hljs from 'highlight.js/lib/highlight';
import coffeescript from 'highlight.js/lib/languages/coffeescript';
import javascript from 'highlight.js/lib/languages/javascript';

console.log('hola mundo')
hljs.registerLanguage('coffeescript', coffeescript);
hljs.registerLanguage('javascript', javascript);
hljs.initHighlightingOnLoad();