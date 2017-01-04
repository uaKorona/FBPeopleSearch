# FBPeopleSearch
Web application for search people in Facebook

FB.api(
  '/search',
  'GET',
  {"q":"Алла Киев","type":"user"},
  function(response) {
      // Insert your code here
  }
);

FB.api(
  '/246608262443812',
  'GET',
  {"fields":"name,id,about,first_name,cover,location,age_range,devices,picture,birthday"},
  function(response) {
      // Insert your code here
  }
);
