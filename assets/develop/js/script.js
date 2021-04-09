var sData = [];
var high_score = localStorage.getItem('cities');

//get parameters from the url
var urlParams = new URLSearchParams(window.location.search);
//get pagebase url
var pagebase = location.protocol + '//' + location.host + location.pathname
//city parameter value
var city = urlParams.get('city');

var city_info_url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=988b6c911cfcc11d1f0a1b2bfd8472ec"
var c_id;
$.get(city_info_url, function() {}).done(function(citydata) { 
    c_id = citydata.id
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
    window.myWidgetParam.push({id: 11,cityid: c_id,appid: '988b6c911cfcc11d1f0a1b2bfd8472ec',units: 'metric',containerid: 'openweathermap-widget-11',  });  
    (function() {var script = document.createElement('script');
    script.async = true;script.charset = "utf-8";
    script.src = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);  })();

    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
    window.myWidgetParam.push({id: 15,cityid: c_id,appid: '988b6c911cfcc11d1f0a1b2bfd8472ec',units: 'metric',containerid: 'openweathermap-widget-15',  });
        (function() {var script = document.createElement('script');
        script.async = true;
        script.charset = "utf-8";script.src = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();

});

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
// 
    $("#search_btn").on("click", function(){
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

    $("#search_button").on("click",function(){
        var city = $("#city_search").val();
        window.location=pagebase+"?city="+city
        cities.push(city);
    });