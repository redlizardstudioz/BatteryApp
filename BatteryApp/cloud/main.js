
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("averageBatteryLevel", function(request, response) {
  var query = new Parse.Query("b352944059607484");
	query.limit(1000);
  query.find({
    success: function(results) {
      var sum = 0;
      var total = new Array();
      for (var i = 0; i < results.length; ++i) {	
      var abc = results.length;
        sum += results[i].get("batteryLevel");
		total[i] = results[i].get("batteryLevel");
      }
      response.success(sum/results.length);
    },
    error: function() {
      response.error("Error");
    }
  });
});