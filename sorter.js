    function sortListAsc(){
      a = document.getElementById("id01").getElementsByTagName("LI");
      b = document.getElementById("id01").getElementsByTagName("h5");
      arr = [], arr2 = [];

      for (let index = 0; index < b.length; index++) {
        arr[index] = b[index].innerHTML.substr(0,b[index].innerHTML.length-2);
        arr2[index] = a[index].innerHTML;
      }

      for (let index = 0; index < b.length; index++) {
        a[index].innerHTML = arr2[index];        
      }
    }
    function sortListDesc(){
      b = document.getElementById("id01").getElementsByTagName("LI");
      arr = [];

      for (let index = 0; index < b.length; index++) {
        arr[index] = b[index].innerHTML;
      }
      arr.sort();
      arr.reverse();
      for (let index = 0; index < b.length; index++) {
        b[index].innerHTML = arr[index];
        
      }
    }
 

