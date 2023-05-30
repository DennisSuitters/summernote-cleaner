# summernote-cleaner v1.0.7
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
      action: 'both', // both|button|paste 'button' only cleans via toolbar button, 'paste' only clean when pasting content, both does both options.
      icon: '<i class="note-icon"><svg xmlns="http://www.w3.org/2000/svg" id="libre-paintbrush" viewBox="0 0 14 14" width="14" height="14"><path d="m 11.821425,1 q 0.46875,0 0.82031,0.311384 0.35157,0.311384 0.35157,0.780134 0,0.421875 -0.30134,1.01116 -2.22322,4.212054 -3.11384,5.035715 -0.64956,0.609375 -1.45982,0.609375 -0.84375,0 -1.44978,-0.61942 -0.60603,-0.61942 -0.60603,-1.469866 0,-0.857143 0.61608,-1.419643 l 4.27232,-3.877232 Q 11.345985,1 11.821425,1 z m -6.08705,6.924107 q 0.26116,0.508928 0.71317,0.870536 0.45201,0.361607 1.00781,0.508928 l 0.007,0.475447 q 0.0268,1.426339 -0.86719,2.32366 Q 5.700895,13 4.261155,13 q -0.82366,0 -1.45982,-0.311384 -0.63616,-0.311384 -1.0212,-0.853795 -0.38505,-0.54241 -0.57924,-1.225446 -0.1942,-0.683036 -0.1942,-1.473214 0.0469,0.03348 0.27455,0.200893 0.22768,0.16741 0.41518,0.29799 0.1875,0.130581 0.39509,0.24442 0.20759,0.113839 0.30804,0.113839 0.27455,0 0.3683,-0.247767 0.16741,-0.441965 0.38505,-0.753349 0.21763,-0.311383 0.4654,-0.508928 0.24776,-0.197545 0.58928,-0.31808 0.34152,-0.120536 0.68974,-0.170759 0.34821,-0.05022 0.83705,-0.07031 z"/></svg></i>',
      keepHtml: true,
      keepTagContents: ['span'], //Remove tags and keep the contents
      badTags: ['applet', 'col', 'colgroup', 'embed', 'noframes', 'noscript', 'script', 'style', 'title', 'meta', 'link', 'head'], //Remove full tags with contents
      badAttributes: ['bgcolor', 'border', 'height', 'cellpadding', 'cellspacing', 'lang', 'start', 'style', 'valign', 'width', 'data-(.*?)'], //Remove attributes from remaining tags
      limitChars: 0, // 0|# 0 disables option
      limitDisplay: 'both', // none|text|html|both
      limitStop: false, // true/false
      notTimeOut: 850, //time before status message is hidden in miliseconds
      imagePlaceholder: 'https://via.placeholder.com/200'
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

**keepTagContents**
Removes the tag but keeps the contents, e.g. useful for removing links or spans without losing text content

**badTags:**
Remove full tags with contents. Tags listed by name only ['style',  'script']`
NB: any tag not present in keepTagContents or badTags will remain

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
- [RichardSquires](https://github.com/RichardSquires)
  - Several issue regarding parsing text, and updating docs.
- [wheelspin](https://github.com/wheelspin)
  - For adding Microsoft Browsers Support, and modifying the alert.
- [Diemen Design](https://github.com/DiemenDesign/)
  - Check out our other Summernote Plugins via our main Github page.

# CHANGELOG:
#### v1.0.8
- Resolved issue where text like `<asdf>` was accidentally counted as html when pasting from plain text context

#### v1.0.7
- Resolved issue in some cases where code view would be out of synch with editor

#### v1.0.6
- Added cleanup of data- attributes

#### v1.0.5
- Resolved tags/attributes not stripped when over one or more line
- Resolved spaces disappearing after pasting

#### v1.0.4
- Resolved sucess status text always shown after action

#### v1.0.3
- Added feature for removing a tag whilst keeping its content

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
