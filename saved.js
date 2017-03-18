
var savedData = document.getElementById('saved-data');
for ( var i = 0; i < allStorage().length; i++ ){
	if ( !isEmpty(allStorage()[i]) ){
		savedData.innerHTML += 
					  `<li class="well well-lg top-right-parent">
					  	  <a target="_blank" class="top-right btn" href="https://duckduckgo.com/?q=!ducky+${encodeURIComponent(allStorage()[i])}">VISIT SITE <span class="glyphicon glyphicon-new-window"></span></a>
                          <h2 class="name">${allStorage()[i]}</h2> <br>
                          <div class="btn-group">
                            <a href="https://www.google.ie/search?q=${encodeURIComponent(allStorage()[i])}+logo&source=lnms&tbm=isch" target="_blank" class="btn btn-primary btn-block">Check on Google</a>
                            <button class="btn btn-danger btn-block" onclick="remove('${allStorage()[i]}', this)">Remove Brand</button>
                            <button id="data" class="btn btn-default btn-block" data-clipboard-text='${allStorage()[i]}'>
                            COPY</button>
                          </div>
                       </li>`;
	}else{
		savedData.innerHTML = "<h6 class='text-center'>Nothing saved at this time....</h6>"
	}
}


function allStorage() {
    return Object.keys(localStorage);
}

function remove(value, object){
	localStorage.removeItem(value);
	location.reload(true);
}

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
}

var monkeyList = new List('test-list', { 
  valueNames: ['name']
});


