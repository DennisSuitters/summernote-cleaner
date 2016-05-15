# summernote-cleaner
A plugin for the [Summernote](https://github.com/summernote/summernote/) WYSIWYG editor.

Adds a button to the Toolbar, that allows cleaning of editor content.

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
        action:'button' // Options: button|both|paste (Currently only button is in use until we work out how to capture pasted content before insertion.
    ]
});
```

#### TODO:
- Get pasting of content clean up working.
- Check other editors like Libre Office, Open Office, and others are cleaned as well.
