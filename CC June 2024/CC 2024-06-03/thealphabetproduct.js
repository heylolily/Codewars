// I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.

function alphabet(ns) {
    // sort from min to max
    ns = ns.sort((a,b) => a -b)
    // a has to be the smallest number, then remove it
    let a = Math.min(...ns)
    ns = ns.slice(1)
    // b will be the second smallest number, remove that too
    let b = ns[0]
    ns = ns.slice(1)
    // if a is 1, then ab will be the same as b, otherwise, the next smallest number will be c
    let ab
    let c
    if (ns[0] / a == b) {
      ab = ns[0]
      ns = ns.slice(1)
    } else {
      c = ns[0]
      ns = ns.slice(1)
    }
    // if c is empty, it should be the next smallest number
    if (!c) {
      c = ns[0]
    }
    // cd should be the largest number
    let cd = Math.max(...ns)
    // now that we have c, we can find d by dividing the largest number by c
    let d = cd / c
    return d
  
  }


// top rated on codewars
function alphabet(ns) {
    // sorted from smallest to largest
    let sorted = ns.sort((a,b) => a - b)
    // if the 2nd and 3rd number are the same, then return 3, otherwise 2
    // after the return it should be the smallest number (which would be 1) * 3 or 2
    // this will return the 3rd or 4th number (because itll be sorted[2 or 3])
    // lastly, itll be the largest number (sorted[7]) divided by the 3rd or 4th number
    // here is a better explanation of the way this workds
    // if you examine sorted arrays, you'll see that the first element of sorted will always be A (sorted[0] === A), the second element of sorted will always be B (sorted[1] === B), and the third element will either be C or AxB, depending on first two integers. So we have two cases:
        // The third element (sorted[2]) is C, then if you divide sorted[7] (which always be DxC or the last element in the sorted array) by C (which in this case is sorted[2]) you get DxC/C or simply D.
        // The third element is AxB, then the fourth element must be C, and here is why:
            // it can't be D (D must be greater than C due to condition A<B<C<D);
            // it can't be DxA, because D>C, and if you multiply D by A, it will definitely be greater then C;
            // it can neither be BxC nor DxC, because C will always be less than C multiplied by any positive number. Hence, the fourth element is C (sorted[3]). If you divide sorted[7] (which is DxC) by C (which in this case is sorted[3]) you get D.
    return sorted[7] / sorted[sorted[0] * sorted[1] == sorted[2] ? 3 : 2]
  }