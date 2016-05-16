# summernote-cleaner
A plugin for the [Summernote](https://github.com/summernote/summernote/) WYSIWYG editor.

Adds a button to the Toolbar, that allows cleaning of editor content, and displays an notification that cleaning has been done in the StatusBar.

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
        ['cleaner',['cleaner']],
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
    cleaner:[
        element:'.summernote', // The element you use to initialise Summernote.
        time:900, // Time to indicate that the Text has been Cleaned, changes the button colour.
        action:'both' // Options: button|both|paste
    ]
});
```

#### TODO:
- Check other editors like Libre Office, Open Office, and others are cleaned as well.
