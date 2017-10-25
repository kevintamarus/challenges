
// You are given an array of integer altitudes along a hiking trail, as well as two indexes into that array. The two indexes represent the start and end of a segment in the array. 
// Return the sum of the changes for a walk within that segment (i.e., beginning at the start index and ending at the end index).
// Note that *increases* in height count double. 
// For example, with the heights `[5, 3, 6, 7, 2]` and `start=2`, `end=4`, the return value should be 7.

//output is the sum of changes between the two indexes
var sample = [5,3,6,7,2];

function altitudeDistance(array, index1, index2) {
    var startPoint = array[index1];
    var altitude = 0;
    for(i = index1 + 1; i<=index2; i++) {
        if (startPoint > array[i]) {
            altitude += (startPoint - array[i]);
            startPoint = array[i];
        }
        else if (startPoint < array[i]) {
            altitude += ((array[i] - startPoint) * 2);
            startPoint = array[i];
        }
    }
    return altitude;
}


console.log(altitudeDistance(sample, 3, 4));