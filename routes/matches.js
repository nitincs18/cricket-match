var express = require('express'),
    _       = require('lodash'),
    config  = require('../config'),
    jwt     = require('jsonwebtoken'),
    ejwt    = require('express-jwt'),
    db      = require('../db');

var app = module.exports = express.Router();


app.patch('/updateMatch/:id', function(req, res) {
  let match = {daynight,gmt_offset,_group,league,live,livecoverage,comp_type_id,comp_type,matchfile,matchnumber,matchresult,matchstatus,matchdate_gmt,matchdate_ist,matchdate_local,matchtime_gmt,matchtime_ist,matchtime_local,end_matchdate_gmt,end_matchdate_ist,end_matchdate_local,end_matchtime_gmt,end_matchtime_ist,end_matchtime_local,matchtype,priority,recent,series_Id,seriesname,series_start_date,series_end_date,stage,teama_Id,teama,teama_short,teama_runs,teama_wickets,teama_overs,teamb_Id,teamb,teamb_short,teamb_runs,teamb_wickets,teamb_overs,tour_Id,tourname,upcoming,venue,venue_Id,winningmargin,winningteam_Id,toss_elected_to,toss_won_by,series_short_display_name,series_type,has_comm,has_scores,teama_hassquads,teamb_hassquads,parent_id,parent_name,has_standings,matchstatus_Id,match_ordinal,coverage_level_id,coverage_level} = req.body;
 db.get().query(`UPDATE generic_data_matches set ? where match_Id= ?`,[match,req.params.id],function(err,result){
  if(err){
    console.log(err)
    res.status(422).send({error: 'No match found.'});
  }
  res.send('Updated')
 })
});

app.post('/getMatch', function(req, res) {
  let {startDate,endDate} = req.body;
 
  db.get().query('SELECT * FROM generic_data_matches WHERE matchdate_gmt >= ? AND matchdate_gmt <= ? ', [startDate,endDate], function(err, rows) {
      if(err){
        console.log(err)
        res.status(422).send({error: 'No match found.'});
      }
      // var foundUser = rows[0];
      res.send(rows);
  });
});

app.get('/match/:id', function(req, res){
  let id = req.params.id;
    db.get().query('SELECT * FROM generic_data_matches WHERE match_Id = ? ', [id], function(err, rows) {
        if(err){
          console.log(err)
          res.status(422).send({error: 'No match found.'});
        }
        // var foundUser = rows[0];
        res.send(rows);
    });
});


