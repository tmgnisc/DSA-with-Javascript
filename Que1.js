const arr =[1,1,2,4,2,5,6,7]

function findDuplicate(arr){
    const freq = {}
    arr.forEach(num =>{
        freq[num] = (freq[num] || 0) +1
    })
    
    
    const duplicate = Object.keys(freq).filter(key=>freq[key] >1)
    .map(Number)

    console.log(duplicate)
}
findDuplicate(arr)