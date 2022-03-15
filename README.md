# summernote-cleaner v1.0.1
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
    toolbar: [
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
    cleaner: {
          action: 'both',
          icon: '<i class="note-icon">[Your Button]</i>',
          keepHtml: true,
          badTags: ['applet', 'body', 'col', 'colgroup', 'embed', 'html', 'noframes', 'noscript', 'script', 'style', 'title'],
          badAttributes: ['bgcolor', 'border', 'height', 'cellpadding', 'cellspacing', 'lang', 'start', 'style', 'valign', 'width'],
          limitChars: false,
          limitDisplay: 'both',
          limitStop: false,
          imagePlaceholder: 'https://via.placeholder.com/200' // URL, or relative path to file.
    }
});
```

# Documentation

**action:**
Options: ( both | button | paste )
- button = Only cleans via toolbar button.
- paste = Only cleans when pasting content.
- both = Does both of the above options.

**keepHtml:**
- true = Keeps HTML Markup and put through parser to remove Word Crud.
- false = Removes tag elements using the text version of the pasted content from the clipboard.

**badTags:**
Remove full tags with contents. Tags listed by name only ['style',  'script']`

**badAttributes:**
Remove attributes from tags. Attributes listed by name only `['style',  'start']`

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

**imagePlaceholder:**
Replace pasted images with a nominated placeholder.

# Thanks:
- [wheelspin](https://github.com/wheelspin)
  - For adding Microsoft Browsers Support, and modifying the alert.
- [Diemen Design](https://github.com/DiemenDesign/)
  - Check out our other Summernote Plugins via our main Github page.

# CHANGELOG:
#### v1.0.2
- Resolved paste plain text with keepHtml enabled bug
- Code cleanup

#### V1.0.1
- Remove keepOnlyTags, and keepClasses, they were origially intended to be used, but refinement and other options have taken their place.
- Reformat source looking for typos.
- Replace Images with a nominated placeholder.
- Replace `alt` attributes with `data-title` and `alt` used by Summernote.

# TODO:
- Implement Image conversion to base64, and hopefully automatic upload to destination folder.
