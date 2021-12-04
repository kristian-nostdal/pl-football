var helpers = {
    fetchMatches: function(date) {
        var url = 'https://sportscentral.io/new-api/matches?timeZone=-60&date='+date
    
        return fetch(url)
        .then(function(response) {
          return response.json()
        })
        .then(function(json) {
          console.log(date, json)
          return json
        })
        .catch(function(error) {
          console.log('error', error)
        })
      },
      fetchStreams: function(date) {
        var url = 'http://weakstreams.com/soccer-streams/england-championship/fulham-vs-afc-bournemouth/46279/'
    
        return fetch(url)
        .then(function(response) {
          return response.json()
        })
        .then(function(json) {
          console.log(date, json)
          return json
        })
        .catch(function(error) {
          console.log('error', error)
        })
      },
  }
  
module.exports = helpers;