# cricket-match

Code is deployed on AWS EC2

You can check using base URL : http://3.6.37.4:3001/

API for getMatchById  http://3.6.37.4:3001/match/:id
This is GET Request.Provide match_Id in parameter, Instead of ':id' to get result.

API for getMatchesByDateRange  http://3.6.37.4:3001/getMatch
This is POST Request.Provide startDate and endDate in body.


API for updateMatchField   http://3.6.37.4:3001/updateMatch/:id
This is PATCH Request.Provide all fields in body, whatever you want to update
and provide match_Id in parameter which match you want to update
