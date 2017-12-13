const signature = document.querySelector('#signature-layer')

const signThis = () => {
  anime({
    targets: '#signature-layer path',
    strokeDashoffset: [anime.setDashoffset, 0],
    opacity: 1,
    easing: 'easeInSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
  });
}

//David Walsh Debounce Function => (https://davidwalsh.name/javascript-debounce-function)
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


let signed = false;

const checkView = (e) => {
  const beginSignatureAt = (window.scrollY + window.innerHeight) - signature.clientHeight / 2;

  //find a more accurate way to measure this --> SVG issues
  let sigTop = signature.getBoundingClientRect().top + window.innerHeight - 200;

  const isShowing = beginSignatureAt > sigTop;

  if (isShowing === true && signed === false) {
    signed = true;
    signThis();
  };

}

window.addEventListener('scroll', debounce(checkView, 50));
