import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO

  $.ajax({
    url: `https://app-hrsei-api.herokuapp.com/api/recastly/videos?q=${query}`,
    type: 'GET',
    // data: query,
    contentType: 'application/json',
    success: function(data) {

      callback(data);
    },
    error: function(error) {
      console.error('Unable to find videos', error);
    }
  });
};

export default searchYouTube;


