
$(function(){
  $('.card_link').click(function(){
      $('#exampleModalLabel').html( $(this).data('title') );
      $('#btn_download').attr('href', $(this).attr('href') );

      var devlog_url = $(this).data('devlog');
      if( devlog_url ){
          $('#btn_devlog').attr('href', devlog_url).show();
      }else{
          $('#btn_devlog').hide();
      }

      var video_url = $(this).data('video');
      if( video_url ){
          $('#btn_video').attr('href', video_url).show();
          $('#btn_info').show();
      }else{
          $('#btn_video').hide();
          $('#btn_info').hide();
      }

      $.ajax({
        method: 'GET',
        url: '/juegos/' + $(this).data('file') + '.html',
        dataType: 'html'
      }).done(function(data) {
        $('#modal .modal-info').html(data).show();
        $('#modal .modal-video').html('').hide();
        $('#modal').modal('show'); 
        setTimeout(function(){
            $('#modal .modal-info div').scrollTop(0);
        }, 200);
      });
      return false;
  });
  
  
  

  $('#modal').on('hidden.bs.modal', function (e) {
      $('#modal-video').html('');
  });
});


function video_open(url_youtube){
  var id_youtube = url_youtube.replace('https://youtu.be/','');
  var html = '<iframe allowfullscreen="" mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen" src="https://www.youtube.com/embed/'+id_youtube+'?feature=oembed&amp;autoplay=1" style="width:100%;height:262px;" height="500"></iframe>';
  $('#modal .modal-video').html(html).show();
  $('#modal .modal-info').hide();
  return false;
}
