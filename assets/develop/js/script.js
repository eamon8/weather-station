var sData = [];
var high_score = localStorage.getItem('cities');


if (high_score !== null) {
    // parse the scores into variable 
    var sorted_scores = JSON.parse(cities)
    //itirate over current scores
    for (x of sorted_scores){
        $("#high-scores").append('<li class="list-group-item">'+cities+'</li>');
    }
    //add current socores to sdata
    sData = JSON.parse(cities);
}
// 
window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
window.myWidgetParam.push({id: 11,q: 'quyon',appid: '988b6c911cfcc11d1f0a1b2bfd8472ec',units: 'metric',containerid: 'openweathermap-widget-11',  });  
(function() {var script = document.createElement('script');
script.async = true;script.charset = "utf-8";
script.src = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(script, s);  })();

window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
  window.myWidgetParam.push({id: 15,q: 'quyon',appid: '988b6c911cfcc11d1f0a1b2bfd8472ec',units: 'metric',containerid: 'openweathermap-widget-15',  });
    (function() {var script = document.createElement('script');
    script.async = true;
    script.charset = "utf-8";script.src = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();
// 
    $("#save_score").on("click", function(){
        // get the name/initials and check that input length is higher then 1
        var get_name=$("#username").val();
        //validate the input
        if (get_name.length > 1 ){
            //craate object from answers
            var citplace = {
                citie: get_name.trim(),
            };
        //push data to the array sData
        sData.push(saved_score);
        // store and json stringify the sData 
        localStorage.setItem(JSON.stringify(sData));
        //update the page
        document.location.href=curUrl;
        }
    });
