// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"


// my solution, i thought about doing 2 separate formulas here, and just doing a callback, but opted not to
function rgb(r, g, b) {
    let hex = [r,g,b].map(x => {
      if (x >= 255) {
        return 'FF'
      } else if (x <= 0) {
        return '00'
      } else {
        let first = (x - (x%16))/16
        let second = x%16
        return [first,second].map(x => x > 9 ? String.fromCharCode(x + 55) : x).join('')
      }
    })
    return hex.join('')
}




// this uses 2 functions which i think is nice. i believe you can edit the second function to be a bit cleaner tbh but its not my solution
function rgb(r, g, b){
	return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}