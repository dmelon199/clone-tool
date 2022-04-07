// clone button js file
(() => {
	let status = $('#cas7_ileinner').text();
	if(status === 'Closed-Completed' || status === 'Closed-Failed') {
		$('body').prepend(`
			<div class="case-cloner">
				<a id="clone">
					<span class="emoji"></span>
				</a>
			</div>
		`);
	}
})();