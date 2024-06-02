// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246

function ipsBetween(start, end){
    start = start.split('.').map(Number).reverse()
    end = end.split('.').map(Number).reverse()
    for (let i = 0; i < end.length; i++) {
      end[i] -= start[i]
      if (i == 1) {
        end[i] *= 256
      } else if (i == 2) {
        end[i] *= 256**2
      } else if (i == 3) {
        end[i] *= 256**3
      }
    }
    return end.reduce((a,b) => a+b)
  }


// top rated solution on codewars
function ipsBetween(start, end){
    const num = ip => ip.split('.')
                        .map(x => parseInt(x))
                        // i like this step because instead of using powers, you just continue to multiply by 256, keeps it simple
                        .reduce((acc, e) => acc * 256 + e);  
    
    return num(end) - num(start);
  }