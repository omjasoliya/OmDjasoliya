$(document).ready(function () {
    //time & date
    function likeARollex() {
      //get time/date
      var time = new Date();
      var hr = time.getHours();
      var min = time.getMinutes();
      var ofWeek = time.getDay();
      var month = time.getMonth();
      var today = time.getDate();
  
      //add zero if the time is 1 digit
      if (hr < 10) {
        $(".hr").html("0" + hr);
      } else {
        $(".hr").html(hr);
      }
      if (min < 10) {
        $(".min").html("0" + min);
      } else {
        $(".min").html(min);
      }
  
      //day of week as string
      var weeks = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
  
      for (w = 0; w <= 6; w++) {
        var thisOfWeek = weeks[w];
        if (ofWeek == w) {
          $(".ofWeek").html(thisOfWeek);
        }
      }
  
      //month as string
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
  
      for (i = 0; i <= 11; i++) {
        var thisMonth = months[i];
        if (month == i) {
          $(".month").html(thisMonth + ".");
        }
      }
  
      $(".date").html(today);
    }
    setInterval(likeARollex, 1000);
  
    //messsenger app
    $(".send").on("click", function () {
      var post = $("#postIt").val();
      $(".me").show();
      $(".mssg")
        .fadeIn()
        .append(post + "<br>");
      $("#postIt").val("");
    });
  
    //email app
    $(".subject").on("click", function () {
      $(this).next("li").slideToggle();
    });
  
    //toggle views
    $(".unlockMe").on("click", function () {
      $(".unlock").addClass("unlocked");
      $(".lockScreen").addClass("pushUp");
    });
  
    $(".toggleToDo").on("click", function () {
      $("#mainOs").hide();
      $(".toDo").fadeIn();
    });
  
    $(".toggleMssg").on("click", function () {
      $("#mainOs").hide();
      $(".messenger").fadeIn();
    });
  
    $(".toggleEmail").on("click", function () {
      $("#mainOs").hide();
      $(".email").fadeIn();
    });
  
    $(".toDoNav").on("click", function () {
      $(".toDo").hide();
      $(".messenger").hide();
      $(".email").hide();
      $("#mainOs").fadeIn();
    });
  
    $(".exit").on("click", function () {
      $(".lockScreen").removeClass("pushUp");
      $(".unlock").removeClass("unlocked");
    });
  });
  