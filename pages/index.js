import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Link from 'next/link';
import {
	Button,
	Container,
	Divider,
	Grid,
	Header,
	Icon,
	Image,
	List,
	Menu,
	Responsive,
	Segment,
	Sidebar,
	Visibility,
} from 'semantic-ui-react';
import '../static/hometest.css';
import { Helmet } from 'react-helmet';
const HomepageHeading = ({ mobile }) => (
	<Container text className="cont">
		<Header
			as="h1"
			content="CPSC - Grad Seminar Project"
			inverted
			style={{
				fontSize: mobile ? '2em' : '3em',
				fontWeight: 'normal',
				marginBottom: 0,
				marginTop: mobile ? '1.5em' : '2em',
				color: 'black',
			}}
		/>
		<Header
			as="h4"
			content="By Rajat Balda  (1288909)"
			inverted
			style={{
				fontSize: mobile ? '1.5em' : '1.7em',
				fontWeight: 'normal',
				marginTop: mobile ? '0.5em' : '1.5em',
				color: 'grey',
			}}
		/>
		<div style={{ float: 'left', marginTop: '10%' }}>
			<Header as="h4" style={{ color: 'grey' }}>
				Admin Login
			</Header>
			<Link href="/admin">
  			<Button primary size="huge">
    		<Icon name="left arrow" />
    			Admin
  			</Button>
			</Link>
		</div>

		<div style={{ float: 'right', marginTop: '10%' }}>
			<Header as="h4" style={{ color: 'grey' }}>
				{' '}
				Voter Login
			</Header>
			<Link href="/voter">
  <Button primary size="huge">
    Voter
    <Icon name="right arrow" />
  </Button>
</Link>

		</div>
	</Container>
);

HomepageHeading.propTypes = {
	mobile: PropTypes.bool,
};

class DesktopContainer extends Component {
	state = {};

	hideFixedMenu = () => this.setState({ fixed: false });
	showFixedMenu = () => this.setState({ fixed: true });

	render() {
		const { children } = this.props;
		const { fixed } = this.state;

		return (
			<Responsive>
				<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.5.0/dist/semantic.min.css" />
				<Helmet>
					<title>HomePage</title>
					<link rel="shortcut icon" type="image/x-icon" href="" />
				</Helmet>
				<Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
					<Segment inverted textAlign="center" style={{ minHeight: 700, padding: '1em 0em' }} vertical>
						<Menu
							fixed={fixed ? 'top' : null}
							inverted={!fixed}
							pointing={!fixed}
							secondary={!fixed}
							size="large"
							className="menu"
						>
							<Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <h1 style={{ fontSize: '3em', color: 'black', fontWeight: 'bold' }}>
        Blockchain Voting Application
    </h1>
</Container>

						</Menu>
						<HomepageHeading />
					</Segment>
				</Visibility>

				{children}
			</Responsive>
		);
	}
}

DesktopContainer.propTypes = {
	children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
	<div>
		<DesktopContainer>{children}</DesktopContainer>
	</div>
);

ResponsiveContainer.propTypes = {
	children: PropTypes.node,
};

const HomepageLayout = () => (
	<ResponsiveContainer>
		
	</ResponsiveContainer>
);
export default HomepageLayout;
