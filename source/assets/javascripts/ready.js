$(function() {
  SocialShareKit.init();

  function get_cover_art(artist_id, album_index) {
    $.get("https://api.spotify.com/v1/artists/" + artist_id + "/albums", function(data) {
      $(".album-cover").attr("src", data['items'][album_index]['images'][1]['url']);
      console.log(data['items'][0]);
    }).fail(function() {
      $(".album-cover").attr("src", "");
    });
  }

  if($(".album").length > 0) {
    $.each($(".album"), function(element) {
      get_cover_art($(this).attr("data-spotify-id"), $(this).attr("data-album-index"));
    });
  }
});
