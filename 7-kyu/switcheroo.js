/* Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb' */

function switcheroo(x){
    let newArr = []
    for(let i = 0; i < x.length; i++){
        if(x[i] === 'a'){
            newArr.push('b')
        }else if (x[i] === 'b'){
            newArr.push('a')
        }else {
            newArr.push(x[i])
        }
    }
    return newArr.join('')
}