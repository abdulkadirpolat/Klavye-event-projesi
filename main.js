const joinList = document.querySelector('#join');

window.addEventListener('keydown', down => {
	 

	joinList.innerHTML = `
    <div class="eventKey">${down.keyCode}  </div>
     			<div class="key">${down.key} <span class="code">e.key</span></div>
			<div class="key">${down.keyCode}<span class="code">e.keyCode</span></div>
			<div class="key">${down.code}<span class="code">e.code</span></div>
     `;
});
