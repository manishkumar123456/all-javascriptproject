const buttons = document.querySelectorAll('.buttons');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventsListener('click', function (e) {
		console.log(e);
		console.log(e.target);
		if (e.target.id === 'gray') {
		body.style.background = e.target.id;
		}
		if (e.target.id === 'blue') {
		body.style.background = e.target.id;
		}
		if (e.target.id === 'yellow') {
		body.style.background = e.target.id;
		}
		if (e.target.id === 'pink') {
		body.style.background = e.target.id;
		}
    });
});





