window.onload = function() {
    var hero = sessionStorage.getItem("selectedHero");
    switch (hero) {
      case "Police-Officer":
        document.getElementById("hero-video").src = "assets/video/bokeh-police-lights-on-a-cruiser-4k.mp4";
        break;
      case "Firefighter/EMS":
        document.getElementById("hero-video").src = "assets/video/Firefighters - 8872.mp4";
        break;
      case "Military":
        document.getElementById("hero-video").src = "assets/video/War - 16391.mp4";
        break;
      case "Civilian":
        document.getElementById("hero-video").src = "assets/video/hindesite--dandelion_timelapse.mp4";
        break;
    }
  };


