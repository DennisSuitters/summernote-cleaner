# summernote-cleaner
A plugin for the [Summernote](https://github.com/summernote/summernote/) WYSIWYG editor.

summernote-cleaner removes the unnecessary and possibly layout breaking Crud that gets added by MSWord, Open Office, and Libre Office Documents.

The plugin can function in a couple of different ways. It can have a Toolbar Button which allows the Cleaning of the Editor's Text, or Pasted Text can be Cleaned when Pasted into the Text Editor.

### Installation

#### 1. Include JS

Include the following code after Summernote:

```html
<script src="summernote-cleaner.js"></script>
```

#### 2. Supported languages

Currently available in English!

#### 3. Summernote options

```javascript
$('.summernote').summernote({
    toolbar:[
        ['cleaner',['cleaner']], // The Button
        ['style',['style']],
        ['font',['bold','italic','underline','clear']],
        ['fontname',['fontname']],
        ['color',['color']],
        ['para',['ul','ol','paragraph']],
        ['height',['height']],
        ['table',['table']],
        ['insert',['media','link','hr']],
        ['view',['fullscreen','codeview']],
        ['help',['help']]
    ],
    cleaner:{
             notTime:2400, // Time to display Notifications.
            action:'both', // both|button|paste 'button' only cleans via toolbar button, 'paste' only clean when pasting content, both does both options.
            newline:'<br>', // Summernote's default is to use '<p><br></p>'
            notStyle:'position:absolute;bottom:0;left:2px', // Position of Notification
            icon:'<i class="note-icon">[Your Button]</i>'
    }
});
```

#### Thanks:
- [wheelspin](https://github.com/wheelspin)
  - For adding Microsoft Browsers Support, and modifying the alert.
