require.config({
  baseUrl: 'src/js',
  paths: {
    jquery: '//code.jquery.com/jquery-1.9.1.min',
    bootstrap: '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
    summernotevideo: '/../../plugin/summernote-ext-video',
    summernotecodeblock: '/../../plugin/summernote-ext-codeblock',
    CodeMirror: '//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/codemirror',
    CodeMirrorXml: '//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/mode/xml/xml.min',
    CodeMirrorFormatting: '//cdnjs.cloudflare.com/ajax/libs/codemirror/2.36.0/formatting.min'
  },
  shim: {
    bootstrap: ['jquery'],
    CodeMirror: { exports: 'CodeMirror' },
    CodeMirrorXml: ['CodeMirror'],
    CodeMirrorFormatting: ['CodeMirror', 'CodeMirrorXml'],
    summernotevideo: ['summernote'],
    summernotecodeblock: ['summernote']
  },
  packages: [{
    name: 'summernote',
    location: './',
    main: 'summernote'
  }]
});

require([
  'jquery', 'bootstrap', 'CodeMirrorFormatting',
  'summernote', 'summernotevideo', 'summernotecodeblock'
], function ($) {
  // summernote
  $('.summernote').summernote({
    lang: 'ko-KR',
    height: 300,                  // set editable area's height
    tabsize: 2,                   // size of tab
    placeholder: '내용을 입력해 주세요.', // set editable area's placeholder text
    prettifyHtml: false,
    // toolbar
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'italic', 'underline', 'clear']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'table']],
      ['insert', ['codeblock', 'link', 'picture', 'video', 'hr']],
      ['view', ['fullscreen', 'codeview', 'help']]
    ],
    onenter: function (e) {
      console.log(e);
    },
    onImageUpload : function () {
      var $form = $('.note-image-dialog .note-modal-form');
      
      $('<iframe src="about:blank"  style="display: none;" name="imageUploadFrame"></iframe>').appendTo('body');

      $form.submit(function () {
        alert('aaaa');
      });
      
      $form.attr({
        enctype: 'multipart/form-data',
        target: 'imageUploadFrame',
        action: '/image/upload',
        method: 'post'
      });
      
      $form[0].submit();
    }
  });
});
