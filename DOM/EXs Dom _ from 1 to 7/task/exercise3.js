const textDiv = document.getElementById("text");
const fontFam = document.getElementById("font_family");
const font_Size = document.getElementById("font_size");
const fontStyleBold = document.getElementById("font_bold");
const fontStyleIt = document.getElementById("font_italic");
const fontStyleUnder = document.getElementById("font_underline");

function ChangOnText() {
  textDiv.style.fontFamily = fontFam.value;
  textDiv.style.fontSize = font_Size.value;
  textDiv.style.fontStyle = fontStyleIt.checked ? "italic" : "normal";
  textDiv.style.fontWeight = fontStyleBold.checked ? "bold" : "noraml";
  textDiv.style.textDecoration = fontStyleUnder.checked ? "underline" : "none";
}

fontFam.onchange = ChangOnText;
font_Size.onchange = ChangOnText;
fontStyleBold.onchange = ChangOnText;
fontStyleIt.onchange = ChangOnText;
fontStyleUnder.onchange = ChangOnText;
