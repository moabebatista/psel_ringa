
function codificandoString(string) {
    let seq = string;
    let last = seq[0];
    let result = "";
    let i = 1;

    if (seq.length === 1) {
        result = "1" + seq 
    }

    else {
        while (i < seq.length) {
            let count = 1;

            if(seq[i] === last) {
                while (i < seq.length && seq[i] === last && count < 9) {
                    count += 1;
                    last = seq[i];
                    i += 1;
                }
                result += count.toString() + last;
                last = seq[i];
                i += 1;
            }
            else {
                last = seq[i];
                i += 1;
                result += count.toString() + last;           
            }

        }
    }
    console.log(result);
}

codificandoString("BBBBBBBBBBBBBAACCCDD");