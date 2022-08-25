module.exports = {
	split:function(number) {
		return number.toLocaleString('en-US').replace(/,/g, ' ')
	  },
  unixStampLeft:function(stamp) {
		let s = stamp % 60;
		stamp = ( stamp - s ) / 60;

		let m = stamp % 60;
		stamp = ( stamp - m ) / 60;

		let	h = ( stamp ) % 24;
		let	d = ( stamp - h ) / 24;

		let text = ``;

		if(d > 0) text += Math.floor(d) + " д. ";
		if(h > 0) text += Math.floor(h) + " ч. ";
		if(m > 0) text += Math.floor(m) + " мин. ";
		if(s > 0) text += Math.floor(s) + " с.";

		return text;
	},
	unixStampLeftMassiv:function(stamp) {
		let s = stamp % 60;
		stamp = ( stamp - s ) / 60;

		let m = stamp % 60;
		stamp = ( stamp - m ) / 60;

		let	h = ( stamp ) % 24;
		let	d = ( stamp - h ) / 24;

		return [(d > 0 ? Math.floor(d):0), (h > 0 ? Math.floor(h):0), (m > 0 ? Math.floor(m):0), (s > 0 ? Math.floor(s):0)];
	},
}
