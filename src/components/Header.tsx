export interface NavigationItem {
	id: string;
	label: string;
}

export interface HeaderProps {
	logo: string;
	items: NavigationItem[]
}

const Header: React.FC<HeaderProps> = ({ logo, items }) => {
	return (
		<div className="flex">
			<img src={logo} alt="logo" />
			<nav>
				{items.map(item => (
					<a key={item.id} href={`#${item.id}`}>{item.label}</a>
				))}
			</nav>
		</div>
	);
}

Header.defaultProps = {};
Header.displayName = 'Header';

export default Header;