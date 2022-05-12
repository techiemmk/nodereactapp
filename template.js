export default({body, title, initialState}) => {
	return `
		<!DOCTYPE html>
		<html>
			<head>
				<script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
				<title>${title}</title>
				<link rel="stylesheet" href="/static/css/index.css" />
			</head>
			<body>
				<div id="root">${body}</div>				
			</body>
			<script src="/build/bundle.js" />
		</html>
	`;	
};