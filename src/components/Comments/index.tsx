/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component } from 'react';

export default class Comments extends Component {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  componentDidMount() {
    const script = document.createElement('script');
    const anchor = document.getElementById('inject-comments-for-uterances');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', 'true');
    script.setAttribute('repo', 'FelipeBrenner/ignite-reactjs-desafios');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-dark');
    anchor.appendChild(script);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return <div id="inject-comments-for-uterances" />;
  }
}
