function addTwoNumbers(l1: number[] | null, l2: number[]  | null): any | null {
    let l3 = [] as number[]

    if (l1?.length && l2?.length) {
        while (l1[l1.length - 1] == 0 || l2[l2.length - 1] == 0) {
            if (l1[l1.length - 1] == 0)
                l1.length = l1.length - 1
            else if (l2[l2.length - 1] == 0)
                l2.length = l2.length - 1
        }
    
        if (l1.length !== l2.length) {
            let diff = l1.length - l2.length

            let arr = l1.length > l2.length ? l2 : l1
            let arrayNum = l1.length > l2.length ? 1 : 0
        
            for (let i = 0; i < diff; i++)
                arr.push(0)

            if (arrayNum)
                l2 = arr
            else
                l1 = arr
        }

        for (let i = 0; i < l1.length; i++) {
            if (l1[i] + l2[i] < 10) {
                l3[i] = l1[i] + l2[i]
            } else {
                l3[i] = l1[i] + l2[i] - 10
                l1[i + 1]++
            }
        }
        return l3
    }
};

console.log(addTwoNumbers([2,4,3], [5,6,4]))