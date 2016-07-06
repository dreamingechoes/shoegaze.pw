$(function() {
  SocialShareKit.init();

  function get_album_info(artist_id, album_index) {
    $.get("https://api.spotify.com/v1/artists/" + artist_id + "/albums", function(data) {
      $(".album-cover").attr("src", data['items'][album_index]['images'][1]['url']);
      $(".playlist").attr("src", "https://embed.spotify.com/?uri=" + data['items'][album_index]['uri']);
    }).fail(function() {
      $(".album-cover").attr("src", "");
      $(".playlist").attr("src", "");
    });
  }

  function get_artist_info(artist_id) {
    $.get("https://api.spotify.com/v1/artists/" + artist_id, function(data) {
      $(".artist-image").attr("src", data['images'][0]['url']);
    }).fail(function() {
      $(".artist-image").attr("src", "");
    });
  }

  // Init album details from Spotify API
  if($(".album-detail").length > 0) {
    $.each($(".album-detail"), function(element) {
      get_album_info($(this).attr("data-spotify-id"), $(this).attr("data-album-index"));
    });
  }

  // Init artist details from Spotify API
  if($(".artist-detail").length > 0) {
    $.each($(".artist-detail"), function(element) {
      get_artist_info($(this).attr("data-spotify-id"));
    });
  }
});
