const blackUniformHeights = [150, 180, 149, 152, 154];
const orangeUniformHeights = [162, 181, 151, 160, 170];

function organizandoFotografia(blackUniformHeights, orangeUniformHeights) {
    let result = true;
    let i = 0;

    while(i < orangeUniformHeights.length) {
        if(orangeUniformHeights[i] <= blackUniformHeights[i]) {
            result = false
            break       
        }
        i++
    }
    if(result === false) {
        i = 0;
        result = true

        while(i < orangeUniformHeights.length) {
            if(blackUniformHeights[i] <= orangeUniformHeights[i]) {
                result = false;
                break
            }
            i++
        }
    }
    console.log(result);
}

organizandoFotografia(blackUniformHeights, orangeUniformHeights);