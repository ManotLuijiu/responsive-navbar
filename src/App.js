import React, { Component } from 'react';
import { LocalizeProvider } from 'react-localize-redux';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';

class App extends Component {
	state = {
		sideDrawerOpen: false
	};

	drawerTogggleClickHandler = () => {
		this.setState(prevState => {
			return { sideDrawerOpen: !prevState.sideDrawerOpen };
		});
	};

	backdropClickHandler = () => {
		this.setState({ sideDrawerOpen: false });
	};

	render() {
		let backdrop;

		if (this.state.sideDrawerOpen) {
			backdrop = <Backdrop click={this.backdropClickHandler} />;
		}
		return (
			<LocalizeProvider>
				<div>
					<Toolbar drawerClickHandler={this.drawerTogggleClickHandler} />
					<SideDrawer show={this.state.sideDrawerOpen} />
					{backdrop}
					<Home />
					<Footer />
				</div>
			</LocalizeProvider>
		);
	}
}

export default App;
