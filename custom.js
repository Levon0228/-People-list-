

var input = document.getElementById('usr');
var btn = document.getElementById('addName');
var p = document.getElementById('demos');
btn.onclick = function () {
    var arr = input.value.split(" ")
    if (arr.length < 7) {
        return p.innerHTML = 'Please add atleast seven names.';
    } else {
		
		 
        for (var i = 0; i < arr.length; i++) {
		    var ul = document.getElementById("list-group-id");
			var li = document.createElement("li");
			li.setAttribute("class", "list-group-item sortable-dragging");
			//li.setAttribute("draggable", "true");
	        var rand = Math.floor(Math.random() * 1000)
            li.style.color = '#' + rand
            input.value = '';
			li.appendChild(document.createTextNode(arr[i]));
			ul.appendChild(li);	
			

			
        }
			$("#list-group-id").sortable({
				connectWith: ".list-group-item"
			})
      // $("#list-group-id").disableSelection();
		

    }
 }	