

# summernote-cleaner
A plugin for the [Summernote](https://github.com/summernote/summernote/) WYSIWYG editor.

summernote-cleaner removes the unnecessary and possibly layout breaking Crud that gets added by MSWord, Open Office, and Libre Office Documents.

The plugin can function in a couple of different ways. It can have a Toolbar Button which allows the Cleaning of the Editor's Text, or Pasted Text can be Cleaned when Pasted into the Text Editor.

The plugin can also limit the number of characters, with options to display text and/or HTML count in the status bar area.

# Installation

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
          action: 'both', 
          newline: '<br>', 
          icon: '<i class="note-icon">[Your Button]</i>',
          keepHtml: false,
          keepOnlyTags: ['<p>', '<br>', '<ul>', '<li>', '<b>', '<strong>','<i>', '<a>'], 
          keepClasses: false,
          badTags: ['style', 'script', 'applet', 'embed', 'noframes', 'noscript', 'html'],
          badAttributes: ['style', 'start'],
          limitChars: false, 
          limitDisplay: 'both',
          limitStop: false
    }
});
```


# Documentation


**action:**

Options: ( both | button | paste )

 - button = only cleans via toolbar button 
 - paste = only clean when pasting content
 - both = does both options.

**newline:**

Summernote's default is to use ```<p><br></p>```

**keepHtml:**

 - true = Keep only tags listed in keepOnlyTags
 - false = Remove all Tags

**keepOnlyTags:**

List of tags to keep if keepHTML set to true. Formatted with opening and closing brackets ```['<p>', '<ul>']```

**keepClasses:**

 - true = keep all classes
 - false = remove all classes

**badTags:**

Remove full tags with contents. Tags listed by name only ```['style',  'script']```

**badAttributes:**

Remove attributes from tags. Attributes listed by name only ```['style',  'start']```

**limitChars:**

Limits the number of characters in the summernote 
  - false or 0 = allows for max input
  - numbers > 0 = limit on number of characters

**limitDisplay:**

Shows in the status area the total html & text characters
Options: ( text | html | both )
 - text = text character count only
 - html = html character count only
 - both = both html & text

**limitStop:**

Limits the number of characters set by limitChars.
 - true = stops input 
 - false = doesn't stop input

# Thanks:
- [wheelspin](https://github.com/wheelspin)
  - For adding Microsoft Browsers Support, and modifying the alert.
 - [Diemen Design](https://github.com/DiemenDesign/)
   - Check out our other Summernote Plugins via our main Github page.
 
