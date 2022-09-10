const formatter = new ChordSheetJS.HtmlTableFormatter();

function displayChordSheet (chordSheet, id, format = "chordpro") {
  var parser;
  if (format === "chordpro") {
    parser = new ChordSheetJS.ChordProParser();
  } else {
    parser = new ChordSheetJS.ChordSheetParser();
  }
  
  const song = parser.parse(chordSheet);
  const disp = formatter.format(song);
  var node = document.getElementById(id);
  node.innerHTML += disp
}