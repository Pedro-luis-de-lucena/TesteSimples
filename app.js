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

module.exports = { macsByRadio };
