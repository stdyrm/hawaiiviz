import styled from "@emotion/styled";

interface IProps {
	children: React.ReactNode;
	to?: string;
	variant?: string;
}

const NavLink: React.FC = styled.a(
	{
		textDecoration: "none",
		cursor: "pointer",
	},
	props => (
		{
			color: props.theme.colors.secondary,
			fontFamily: props.theme.fonts.body,
			fontSize: props.size && props.size,
			padding: props.theme.space[2],
		}
));

export default NavLink;
