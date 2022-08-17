// import styles from './Lightswitch.module.scss';

const Lightswitch = () => {
  return (
    <li className="nav-item active d-flex align-items-center mt-auto light-switch-wrap">
			<button className="light-switch off">
				<span className="status-icon">
					<i className="fa-regular fa-sun"></i>
					<i className="fa-solid fa-moon"></i>
				</span>
			</button>
		</li>
  );
};

export default Lightswitch;
