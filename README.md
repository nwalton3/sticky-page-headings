## Usage

### Basic options

```javascript
$('#container').stickySectionHeaders();
```

Check out the [demo here](http://polarblau.github.com/stickySectionHeaders/).

### Settings and defaults

```javascript
$('section.sticky').stickyPageHeadings({
  stickyClass     : 'sticky',
  headingSelector : 'h2'
});
```

### HTML

```html
<section class="sticky">
  <h2>Heading 1</h2>  
  <p>Content under heading 1</p>
  
  <h2>Heading 2</h2>
  <p>Content under heading 2</p>
  
  <h2>Heading 3</h2>
  <p>Content under heading 3</p>
  
  <h2>Heading 4</h2>
  <p>Content under heading 4</p>
  
  <h2>Heading 5</h2>
  <p>Content under heading 5</p>
</section>
```

### CSS

```css
#events h2 {
  position: relative;
  z-index: 1;
  color: white;
  padding: .25em 2em;
  background-color: black;
  margin:2em 0 1em; 
  margin-bottom:2em;
}
#events h2.sticky {
  position: fixed;
  margin-top:0;
  top:0;
  z-index: 2;
}
#events h2.hidden {
  display: none;
}
```