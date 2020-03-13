Download the code First

First run 'npm install' command
then 'npm start'

Base URL for Project http://3.6.37.4:3001/

API for getMatchById  http://3.6.37.4:3001/match/:id
This is GET request.Provide match_Id as paramater to get response.

API for getMatchesByDateRange  http://3.6.37.4:3001/getMatch
This is POST request.Provide {startDate,endDate} in request body.

API for updateMatchField  http://3.6.37.4:3001/updateMatch/:id
This is PATCH requset. Provide data in body which field you want to update.
and match_Id as paramater to update data.

Field In Match---
daynight,gmt_offset,_group,league,live,livecoverage,comp_type_id,comp_type,matchfile,matchnumber,matchresult,matchstatus,matchdate_gmt,matchdate_ist,matchdate_local,matchtime_gmt,matchtime_ist,matchtime_local,end_matchdate_gmt,end_matchdate_ist,end_matchdate_local,end_matchtime_gmt,end_matchtime_ist,end_matchtime_local,matchtype,priority,recent,series_Id,seriesname,series_start_date,series_end_date,stage,teama_Id,teama,teama_short,teama_runs,teama_wickets,teama_overs,teamb_Id,teamb,teamb_short,teamb_runs,teamb_wickets,teamb_overs,tour_Id,tourname,upcoming,venue,venue_Id,winningmargin,winningteam_Id,toss_elected_to,toss_won_by,series_short_display_name,series_type,has_comm,has_scores,teama_hassquads,teamb_hassquads,parent_id,parent_name,has_standings,matchstatus_Id,match_ordinal,coverage_level_id,coverage_level
