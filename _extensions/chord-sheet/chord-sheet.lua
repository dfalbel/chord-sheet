
local id = 0

local function displayBlock (block, format)
  id = id + 1
  local scriptTag = "<script type='text/javascript'>displayChordSheet(`" .. block.text .. "`, 'chord-" .. id .. "', '" .. format .."');</script>"
  quarto.doc.includeText("after-body", scriptTag)
  return pandoc.Div({pandoc.Plain({
    pandoc.RawInline("html", "<div id='chord-" .. id .."'></div>")
  })})
end

function CodeBlock(block)
  if block.classes[1] == "chord" then
    local format = "chordpro"
    if block.attributes ~= nil then
      for k, v in pairs(block.attributes) do
        if k == "format" then
          format = v
        end
      end
    end
    block = displayBlock(block, format)
  end

  if quarto.doc.isFormat("html") then  
    quarto.doc.addHtmlDependency({
      name = "ChordSheetsJS",
      version = "7.6.0",
      scripts = {"chord-sheet.js", "display.js"},
      stylesheets = {"chord-sheet.css"}
    })
  end

  return block
end