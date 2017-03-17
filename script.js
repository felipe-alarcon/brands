/*
* future features
* add registered trademark dynamically
*
*
*/

function loadJSON(callback) {   
  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
  xobj.open('GET', 'data.json', true);
  xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
      }
  };
  xobj.send(null);  
}

function init() {
 loadJSON(function(response) {
  
    var data   = JSON.parse(response);
    var output = document.getElementById('output');
    
    var query  = document.getElementById('query');

    query.addEventListener('click', function(){
      if ( output ){
        output.innerHTML = "";
      }
      var input = document.getElementById('input').value + "%";
      var res = alasql('SELECT * FROM ? WHERE FIELD2 LIKE ?',[data, input]);
      if ( res.length > 0 && res.length <= 20 ){
        for ( var i = 0; i < res.length; i++ ) {
          output.innerHTML += 
                      `<li class="well well-lg top-right-parent">
                          <a target="_blank" class="top-right btn" href="https://duckduckgo.com/?q=!ducky+${res[i].FIELD2}">VISIT SITE <span class="glyphicon glyphicon-new-window"></span></a>
                          <h2>${res[i].FIELD2}</h2> <br>
                          <div class="btn-group">
                            <a href="https://www.google.ie/search?q=${res[i].FIELD2}+logo&source=lnms&tbm=isch" target="_blank" class="btn btn-primary btn-block">Check on Google</a>
                            <button class="btn btn-success btn-block" onclick="save('${res[i].FIELD2}', this)">Save Brand</button>
                            <button id="data" class="btn btn-default btn-block" data-clipboard-text='${res[i].FIELD2}'>
                            COPY</button>
                          </div>
                       </li>`;
        }
      }
      if ( res.length > 20 ){
        output.innerHTML = "<h3 class='label label-warning'>Output is too large, please be more specific</h3>";
      }
      if ( res.length == 0 ){
        output.innerHTML = "<h3 class='label label-danger'>No Data Found</h3>";
      }
    });

 });
}



function save(value, object){
  localStorage.setItem(value, value);
}

init();