    function sortListAsc(){
      b = document.getElementById("id01").getElementsByTagName("LI");
      arr = [];

      for (let index = 0; index < b.length; index++) {
        arr[index] = b[index].innerHTML;
      }
      arr.sort();
      for (let index = 0; index < b.length; index++) {
        b[index].innerHTML = arr[index];
        
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
