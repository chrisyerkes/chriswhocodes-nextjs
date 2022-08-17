import Nav from '../Nav/Nav';

import styles from './TemplateHeader.module.scss';

const TemplateHeader = ({ children, className }) => {
  return (
		<header id="main-header" className={`${styles.header} ${className}`}>
			<Nav />
      {children}
    </header>
  );
};

export default TemplateHeader;
