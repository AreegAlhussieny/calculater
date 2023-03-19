var outputScreen=document.getElementById("output-Screen");

    function display(num){
        document.getElementById("output-Screen").value +=num;
    }
    function calculate(){
        try {
            document.getElementById("output-Screen").value=eval(document.getElementById("output-Screen").value);
        } catch (error) {
            alert("invalid")
        }
    }
    function CClear() {
        document.getElementById("output-Screen").value =" ";
      }
    function del(){

        document.getElementById("output-Screen").value =  document.getElementById("output-Screen").value.slice(0,-1);
    }