//your JS code here. If required.
let text = window.location.href;
    
      let pattern = /[a-z]/g;
      let result = text.match(pattern).length;

     alert("The length of the URL is:"+result);