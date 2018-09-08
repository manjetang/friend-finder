var friendList = require('../public/js/friend.js');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

  app.post('/api/friends', function(req,res){
    //grabs the new friend's scores to compare with friends in friendList array
    console.log(req.body);
    var newFriendScores = req.body.score;
    var scoresArray = [];
    console.log(newFriendScores);
    var friendCount = 0;
    var bestMatch = 0;

    //runs friends in list
    for(var i=0; i<friendList.length; i++){
      var scoresDiff = 0;
      //run through scores while comparing friends
      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      //push results
      scoresArray.push(scoresDiff);
    }

    //find best match
    for( i = 0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch
    var bff = friendList[bestMatch];
    res.json(bff);

    //pushes new submission into the friendsList array
    // friendList.push(req.body);
    // Page.Server.ScriptTimeout = 300;
  });
};
