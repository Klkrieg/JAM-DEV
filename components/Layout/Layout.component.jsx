const { loadGetInitialProps } = require("next/dist/next-server/lib/utils");

import Navbar from "../Navbar/Navbar.component";

const Layout = (props) => (
	<div>
		<Navbar />
		{props.children}
	</div>
);

export default Layout;
