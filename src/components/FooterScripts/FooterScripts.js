import React from 'react';
import { useEffect } from 'react';

const FooterScripts = (props) => {
  useEffect(() => {
    const scriptTag = document.createElement('script');

    scriptTag.src = props.url;
    props.className ? scriptTag.classList.add(props.className) : null;
    // scriptTag.classList.add(props.className);
    props.async ? (scriptTag.async = true) : null;
    props.defer ? (scriptTag.defer = true) : null;

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  // return <div>Adding inline styles to functional component</div>;
};

export default FooterScripts;
