function bubbleSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
      for (var j = 0; j < n - 1; j++) {
        if (arr[j] > arr[j + 1]) {
         
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  

  var arr = [64, 34, 25, 12, 22, 11, 90];
  console.log(bubbleSort(arr)); 