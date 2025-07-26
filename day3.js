//Question 3 - Valid Anagram
//An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase , using all the original letters exactly once


//Input: (s= "anagram"), (t = "nagaram"); output true
//Input: (s = "rat"), (t = "car"); output false


//first approach
const isAnagram = function(s, t){
    s = s.split("").sort().join("")
    t=t.split("").sort().join("")
    return s === t
}

