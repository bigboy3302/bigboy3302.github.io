const toggleTheme = document.getElementById("toggle-theme");

const html = document.getElementById("html");

toggleTheme.addEventListener("change", toggleThemeHandler);

function toggleThemeHandler() {
  if (toggleTheme.checked) {
    html.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    html.dataset.theme = "light";
    localStorage.setItem("theme", "light");
  }
}

const theme = localStorage.getItem("theme");

if (theme == "light" || !theme) {
  html.dataset.theme = "light";
} else {
  html.dataset.theme = "dark";
  document.getElementById("toggle-theme").checked = true;
}
const igaunija = document.getElementById("check1");
const lielbritanija = document.getElementById("check2");
const liepaja = document.getElementById("check3");
const indonezija = document.getElementById("check4");

function getValue() {
  if (igaunija.checked != true) {
    document.getElementById("igaunija").style.background = "var(--box-color)";
  } else {
    document.getElementById("igaunija").style.background = "#DC3757";
  }
  if (lielbritanija.checked != true) {
    document.getElementById("lielbritanija").style.background =
      "var(--box-color)";
  } else {
    document.getElementById("lielbritanija").style.background = "#DC3757";
  }
  if (liepaja.checked != true) {
    document.getElementById("liepaja").style.background = "var(--box-color)";
  } else {
    document.getElementById("liepaja").style.background = "#DC3757";
  }
  if (indonezija.checked != true) {
    document.getElementById("indonezija").style.background = "var(--box-color)";
  } else {
    document.getElementById("indonezija").style.background = "#00B16E";
  }
}

const liepaja2 = document.getElementById("check5");
const australija = document.getElementById("check6");
const lietuva = document.getElementById("check7");
const kanada = document.getElementById("check8");

function getValue2() {
  if (liepaja2.checked != true) {
    document.getElementById("liepaja2").style.background = "var(--box-color)";
  } else {
    document.getElementById("liepaja2").style.background = "#DC3757";
  }
  if (australija.checked != true) {
    document.getElementById("australija").style.background = "var(--box-color)";
  } else {
    document.getElementById("australija").style.background = "#00B16E";
  }
  if (lietuva.checked != true) {
    document.getElementById("lietuva").style.background = "var(--box-color)";
  } else {
    document.getElementById("lietuva").style.background = "#DC3757";
  }
  if (kanada.checked != true) {
    document.getElementById("kanada").style.background = "var(--box-color)";
  } else {
    document.getElementById("kanada").style.background = "#DC3757";
  }
}

const libija = document.getElementById("check9");
const kina = document.getElementById("check10");
const liepaja3 = document.getElementById("check11");
const cile = document.getElementById("check12");

function getValue3() {
  if (libija.checked != true) {
    document.getElementById("libija").style.background = "var(--box-color)";
  } else {
    document.getElementById("libija").style.background = "#DC3757";
  }
  if (kina.checked != true) {
    document.getElementById("kina").style.background = "var(--box-color)";
  } else {
    document.getElementById("kina").style.background = "#DC3757";
  }
  if (liepaja3.checked != true) {
    document.getElementById("liepaja3").style.background = "var(--box-color)";
  } else {
    document.getElementById("liepaja3").style.background = "#00B16E";
  }
  if (cile.checked != true) {
    document.getElementById("cile").style.background = "var(--box-color)";
  } else {
    document.getElementById("cile").style.background = "#DC3757";
  }
}

