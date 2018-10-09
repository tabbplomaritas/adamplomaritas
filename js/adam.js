"use strict";

$(document).ready(function() {

    $.get("https://rest.bandsintown.com/artists/chris%20dupont/events?app_id=39e32f9800bbac9b764cb3284d5708f5&date=upcoming").then((resolvedData) => {
        console.log(resolvedData);
        
        let events = resolvedData;
        for(let i = 0; i < events.length; i++) {
            let date = events[i].datetime;
            let lineup = events[i].lineup;
            let venue = events[i].venue.name;
            let city = events[i].venue.city;
            let state = events[i].venue.region;
            let tickets = events[i].offers[0].url;

            $(".eventsWrapper").append(`
            <div class="event-details">
            <a href="${tickets}" role="button">Get Tickets</a>
                <h3>${venue}</h3>
                <p>${city}, ${state}</p>

                
            </div>
            `)
        }
    });

    $("#tracklist").css("font-size", "3rem");

    $(function(){
        $(window).scroll(function(){
          let headerTop = $('header').height();
          let liAfter= $('nav ul li:after');
          if($(this).scrollTop()>=headerTop){
              $("header").addClass("animated colorChange");
            
              $("h1").css("font-size", "3rem");
              $("nav ul li").css("color", "white");
          } else if ($(this).scrollTop()===0){
            $("header").removeClass("animated colorChange");
            $("h1").css("font-size", "5rem");
            $("nav ul li").css("color", "rgb(48,48,48");
          }
        });
      });


});