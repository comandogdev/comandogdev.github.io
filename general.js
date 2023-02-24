
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
      }else{
          $('#btn_video').hide();
      }

      $.ajax({
        method: 'GET',
        url: '/juegos/' + $(this).data('file') + '.html',
        dataType: 'html'
      }).done(function(data) {
        $('#modal .modal-body').html(data);
        $('#modal').modal('show'); 
        setTimeout(function(){
            $('#modal .modal-body div').scrollTop(0);
        }, 200);
      });
      return false;
  });
});
