# chord-sheet

This extension provides support for rendering chord sheets in [Quarto](https://quarto.org)
HTML documents. It uses the [ChordSheetJS](https://github.com/martijnversluis/ChordSheetJS)
library to parse and render sheets into HTML tables.

## Installing

You can install it with:

```
quarto install extension dfalbel/chord-sheet
```

## Example

````markdown
---
title: Songs
format:
   html: default
filters:
   - chord-sheet
---

```chord
Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be
[C]Whisper words of [G]wisdom, let it [F]be [C/E] [Dm] [C]
```
````

By default the ChordPro format is used, but you can switch to the ChordSheet format
by specifying `format="chordsheet"`, for example:

````markdown
```{.chord format="chordsheet"}
          Am         Am/G       F          C
Let it   be, let it be, let it be, let it be
                     G           F Em/F F6 C
There will be an answer, let it be
```
````

You can see an example here along with its [rendered](https://daniel.quarto.pub/chord-sheet-example/) version.


