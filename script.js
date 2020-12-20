// oldal betöltődésekor lefutó dolgok ide kerülnek
function pageLoad () {

  const root = document.getElementById("root");
  let notes = [];

  // HOMEWORK: pusholni pontokat, css formázás
  /* 
  OPCIONÁLIS: highlight js kiszínezi böngészőben a kódblokkokat

  https://highlightjs.org/usage/

  https://highlightjs.org/download/
    <link rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.1/styles/default.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.4.1/highlight.min.js"></script>

    FOR CIKLUS UTÁN pageLoadba betenni:
    document.querySelectorAll('code').forEach((block) => {
    hljs.highlightBlock(block);
    });
  */
 
  //általános

  notes.push({
    tag: "h1",
    content: `
      Fontos tanulságok
    `
    });

  notes.push({
    tag: "div",
    content: `
      1. Egymásra épülő komplexitású megoldandó feladatok
    `
    });

  notes.push({
    tag: "div",
    content: `
      2. Átlátható kód: tabolás, sorkihagyások, kommentek
    `
    });

  notes.push({
    tag: "div",
    content: `
      3. Alap template elemek egy projekthez
    `
    });
  
  //HTML
  notes.push({
    tag: "h2",
    content: `
      HTML
    `
    });

  notes.push({
    tag: "div",
    content: `
      1. VSC-ben POWER USER move-ok: autocomplete trükkök (létrehozás, tagek közé rakás stb.), automatikus html:5 alapstruktúra használata, meggyorsítja a folyamatot, ennek mintájára átláthatóan bővíteni
    `
    });

  // <> helyett &lt; és &gt; fog csak jól renderelődni
  notes.push({
    tag: "code",
    content: `
    &lt;!DOCTYPE html&gt;
    &lt;html lang="en"&gt;
      &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
        &lt;title&gt;Stone book&lt;/title&gt;
      &lt;/head&gt;
      &lt;body&gt;
      &lt;/body&gt;
    &lt;/html&gt;
    `
    });

  notes.push({
    tag: "div",
    content: `
      2. Helyesen belinkelt .js, .css a headben (filenév, elérési út)
    `
    });

  notes.push({
    tag: "code",
    content: `
    &lt;link rel="stylesheet" href="CSS/style.css"&gt;
    &lt;script src="script.js"&gt;&lt;/script&gt;
    `
    });

  notes.push({
    tag: "div",
    content: `
      3. Sorrend
    `
    });

  notes.push({
    tag: "code",
    content: `
    &lt;body&gt;
      &lt;div id="root"&gt;
        &lt;div>1. div&lt;/div&gt;
        &lt;div>2. div&lt;/div&gt;
      &lt;/div&gt;
    &lt;/body&gt;
    `
    });

  notes.push({
    tag: "div",
    content: `
      4. Classok, id-k pontosan írása, következetes használata
    `
    });

  notes.push({
    tag: "code",
    content: `
    &lt;div id="root"&gt;
      &lt;div id="firstDiv" class="first"&gt;1. div&lt;/div&gt;
      &lt;div id="secondDiv" class="second"&gt;2. div&lt;/div&gt;
    &lt;/div&gt;
    `
    });


  //CSS
  notes.push({
    tag: "h2",
    content: `
      CSS
    `
    });

  notes.push({
    tag: "div",
    content: `
      1. Sass: mert megírja pontosan és egyszerűen a selectorokat pl. egymásba ágyazással
    `
    });

  notes.push({
    tag: "code",
    content: `
      body {
        background-color: #d6fde6;
        font-family: 'Roboto', sans-serif;

        .root {
          background-color: #8ff5ba;
        }
      }
    `
    });

  notes.push({
    tag: "div",
    content: `
      2. Css reset
    `
    });

  notes.push({
    tag: "code",
    content: `
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `
    });

  notes.push({
    tag: "div",
    content: `
      3. Mindig lezárni az egységeket, zárójel hiánya elronthatja
    `
    });

  notes.push({
    tag: "code",
    content: `
      selector {}
    `
    });  
  
  //js
  notes.push({
    tag: "h2",
    content: `
      JavaScript
    `
    });

  notes.push({
    tag: "div",
    content: `
      1. Oldal betöltéskor lefutó függvény
    `
    });

  notes.push({
    tag: "code",
    content: `
        pageLoad(){};
        window.addEventListener("load", pageLoad);
    `
    });

  notes.push({
    tag: "div",
    content: `
      2. HTML elemek létreozása javascriptből meglévő divbe
    `
    });

  notes.push({
    tag: "code",
    content: `
      document.querySelector("#myDiv").insertAdjacentHTML("beforeend", &#96; 
      &lt;div&gt;
        &lt;div id="myDiv"&gt;
          &lt;div>1. div&lt;/div&gt;
          &lt;div>2. div&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &#96;
    );
    `
    });

  notes.push({
    tag: "div",
    content: `
      3. Function, document: constba érdemes menteni
    `
    });

  notes.push({
    tag: "code",
    content: `
      const myRoot = document.getElementById("root");
    `
    });

  for(note of notes){
    // console.log(note.content);
    root.insertAdjacentHTML("beforeend", `
    <${note.tag}>${note.content}</${note.tag}>
    `
    );
  }

  document.querySelectorAll('code').forEach((block) => {
    hljs.highlightBlock(block);
    });


  /* hljs not rendering html correctly, but now solved with white-space: pre; and &lt; and &gt; instead of <> workaround
  const makeHtml = document.getElementsByClassName("apache");
  console.log(makeHtml);

 
  for (let index = 0; index < makeHtml.length; index++) {
    makeHtml[index].classList.add("html");
    //makeHtml[index].classList.add("nohighlight");
    makeHtml[index].classList.remove("hljs");
    makeHtml[index].classList.remove("apache");
  }
  */
  
  

// Nekem fontos dolgok amiket tanultunk

  //1. Egymásra épülő komplexitású megoldandó feladatok

  //2. Átlátható kód: tabolás, sorkihagyások, kommentek

  //3. Alap template elemek egy projekthez

// HTML nekem fontos dolgok

  //1. VSC-ben POWER USER move-ok: autocomplete trükkök (létrehozás, tagek közé rakás stb.), automatikus html:5 alapstruktúra használata, meggyorsítja a folyamatot, ennek mintájára átláthatóan bővíteni
    /*
    !DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Stone book</title>
      </head>
      <body>
      </body>
    </html>
    */

  //2. Jól belinkelt .js, .css a headben (filenév, elérési út)
    /*
    <link rel="stylesheet" href="CSS/style.css">
    <script src="script.js"></script> 
    */

  //3. Sorrend
    /*
    <body>
      <div id="root">
        <div>1. div</div>
        <div>2. div</div>
      </div>
    </body>
    */

  //4. Classok, id-k következetes használata
   /*
    <div id="root">
      <div id="firstDiv" class="first">1. div</div>
      <div id="secondDiv" class="second">2. div</div>
    </div>
   */

// CSS nekem fontos dolgok

  //1. Sass: mert megírja pontosan és egyszerűen a selectorokat pl. egymásba ágyazással
    /* 
      SCSS: 
      body {
        background-color: #d6fde6;
        font-family: 'Roboto', sans-serif;

        .root {
          background-color: #8ff5ba;
        }
      }

      CSS:
      body .root {
      background-color: #8ff5ba;
      }
    */

  //2. Css reset
    /* 
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    */

  //3. mindig lezárni az egységeket, zárójel hiánya elronthatja
  /* 
      selector {}
  */

// javascript nekem fontos dolgok

  //1. Oldal betöltés eseménykor lefutó függvény
  /* 
    pageLoad(){};
    window.addEventListener("load", pageLoad);
  */

  //2. HTML elemek létreozása javascriptből a meglévő #root divbe
    /* 
      document.querySelector("#root").insertAdjacentHTML("beforeend", `
        <div class="nav">
          <p class="motto">Our motto</p>
          <a href="index.html">
            <img border="0" alt="logo" src="images/logo.png">
          </a>
          <div class="menu">
            <div class="wrap-in-menu">
              <div class="nav-in">
                <div class="nav-ti">Projects</div>
                <div class="underline w-embed"></div>
              </div>
              <div class="nav-in">
                <div class="nav-ti">About</div>
                <div class="underline w-embed"></div>
              </div>
              <div class="nav-in">
                <div class="nav-ti">Contact</div>
                <div class="underline w-embed"></div>
              </div>
            </div> 
            <div class="sandwich-wrap">
              <div class="sandwich"></div>
              <div class="sandwich s"></div>
            </div>
          </div>
        </div>
        <div class="contentWrapper">
          <h1 class="content">Content</h1>
        </div>
        <div class="footerWrapper">
          <h1 class="footer">Content</h1>
        </div>
      `
      );
    */

  //3. Function, document: constba érdemes menteni
    /* 
    const myRoot = document.getElementById("root");
    */
}

// oldal betöltődését figyelő eseményfigyelő
window.addEventListener("load", pageLoad); // ahol event van, ott van ()