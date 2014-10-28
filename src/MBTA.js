var line, distanceToPark, calculateDistances,line1, stop1, lineLength, parkNum, line2, stop2, dist1, dist2;

var MBTA = {

  intersecting_station: ["Park Street"],

    red_line: ["Alewife","Davis","Porter","Harvard","Central","Kendall/MIT", "Park Street", "South Station"],

    green_line: ["Haymarket","Government Center","Park Street","Boylston","Arlington", "Copley"],

    orange_line: ["North Station","Haymarket","Park Street","State Street","Downtown Crossing","Chinatown","Tufts Medical Center"],


  distanceToPark: function(line1, stop1){
     //line1 = prompt("What line do you want to start from?");
    // stop1 = prompt("Waht stop are you starting from?");

     lineLength1 = Math.abs(MBTA[line1].indexOf(stop1));
     parkNum1 = MBTA[line1].indexOf("Park Street");

    dist1 = parkNum1 - lineLength1;
    // return dist1

    // return MBTA.calculateDistances(line1, stop1, dist1)
    return dist1
  },
  // prompts: ,

  calculateDistances: function(line1, dist1, line2, stop2){
    // var dist1 = MBTA.distanceToPark();
    // alert(dist1);


    //line2 = prompt("What line do you want to end on?");
    //stop2 = prompt("What stop do you want to end at?");



    lineLength2 = Math.abs(MBTA[line2].indexOf(stop2));
     parkNum2 = MBTA[line2].indexOf("Park Street");

     if(line1 != line2){

     dist2 = Math.abs(parkNum2 - lineLength2);
     return dist2 + dist1
     //alert(dist1 + dist2);

   } else{
      //alert(dist1);
      return dist1
   }



  },



}


   // MBTA.distanceToPark();
