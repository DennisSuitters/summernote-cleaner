# summernote-cleaner
A plugin for the [Summernote](https://github.com/summernote/summernote/) WYSIWYG editor.

summernote-cleaner removes the unnecessary and possibly layout breaking Crud that gets added to MSWord, Open Office, and Libre Office Documents.

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
        element:'.summernote', // The element you use to initialise Summernote.
        time:900, // Time to display the Notification.
        action:'both' // Options: button|both|paste
    }
});
```

#### Thanks:
- [wheelspin](https://github.com/wheelspin)
- - For adding Microsoft Browsers Support, and modifying the alert.
