

const mean = nums => {
    let sum = 0;
    for (let num of nums) {
        sum += num
    }

    return sum/nums.length
}

const mode = nums => {
    let objNums = {}
    let mode;
    let multiMode = [];

    nums.forEach(num => {
        return objNums[num]? objNums[num] ++ : objNums[num] = 1
    });

    let occurences = []
    for (const [index, value] of Object.entries(objNums)) {
        occurences.push(value)
    }
    let highestOccurence = Math.max(...occurences)

    const getOccurence = (occurencesArr, highestOccurence) => {
        console.log(occurencesArr, highestOccurence)
        return occurencesArr.filter((occurence) => occurence === highestOccurence).length
    }

    if (new Set(occurences).size === 1) {
        mode = Object.keys(objNums)
        return mode;
    }

    for (const [key, value] of Object.entries(objNums)) {
        if (value === highestOccurence) {
            if (getOccurence(occurences, highestOccurence) === 1) {
                mode = key
                console.log(mode)
            } else if (getOccurence(occurences, highestOccurence) > 1) {
                multiMode.push(key)
                console.log(multiMode)
            }
        }
    }

    return multiMode.length === 0? mode : multiMode
}


const median = nums => {
    nums.sort((a,b) => a - b)

    if(nums.length%2 == 0) {
        let mid = nums.length/2
        return [nums[mid-1], nums[mid]]
    } else {
        let mid = Math.floor(nums.length/2)
        return nums[mid]
    }
}
module.exports = { mean, mode, median }