import React from 'react';

import SiteHeader from './SiteHeader.js';
import SiteBody from './SiteBody.js';

class MainView extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div className="MainView" style={{
				
			}}>
				<SiteHeader/>
				<SiteBody/>
			</div>
		)
	}
}

export default MainView;