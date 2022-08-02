/**
 * @param {*} probes 
 */
function macsByRadio(probes){
  if (!probes)
        return []

    const radio1 = {
        radio: "Rd 1",
        macs: []
    }
    const radio2 = {
        radio: "Rd 2",
        macs: []
    }
    const radio3 = {
        radio: "Rd 3",
        macs: []
    }
    const radio4 = {
        radio: "Rd 4",
        macs: []
    }

    probes.map(v => {
        if (v.radio === "Rd 1")
            radio1.macs.push(v.mac)
        else if (v.radio === "Rd 2")
            radio2.macs.push(v.mac)
        else if (v.radio === "Rd 3")
            radio3.macs.push(v.mac)
        else if (v.radio === "Rd 4")
            radio4.macs.push(v.mac)
    })
    return [radio1, radio2, radio3, radio4]
}

 ### esse abaixo e mais bonito de ser feito mas nao consegui passar no test( mas faz exatamente o que se pede).
// const groupBy = (array, key) => {
//     // Return the end result
//     return array.reduce((result, currentValue) => {
//       // If an array already present for key, push it to the array. Else create an array and push the object
//       (result[currentValue[key]] = result[currentValue[key]] || []).push(
//         currentValue
//       );
//       // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
//       return result;
//     }, {}); // empty object is the initial value for result object
//   };
  
//   // Group by color as key to the person array
//   const group = groupBy(probes, 'radio');
//   console.log(group)

module.exports = { macsByRadio };
