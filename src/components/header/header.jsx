import { NavLink, Link, useNavigate } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {
	const navigate = useNavigate();

	return (
		<header className={styles.header}>
			<NavLink to={"/"} className={styles.logo}>Pixel Pioneers</NavLink>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					<li className={styles.link}>
						<Link to="/">Главная</Link>
					</li>
					<li className={styles.link}>
						<Link to="/aboutus">О нас</Link>
					</li>
					<li className={styles.link}>
						<Link to="/favorites">Избранное</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.faContainer}>
				<i className="fa fa-fast-backward" onClick={() => navigate(-1)} aria-hidden="true"/>
			</div>
		</header>
	);
};
