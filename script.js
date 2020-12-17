// oldal betöltődésekor lefutó dolgok ide kerülnek
function pageLoad () {

  const root = document.getElementById("root");
  let notes = [];

  // HOMEWORK: pusholni pontokat, css formázás
  /* OPCIONÁLIS: highlight js kiszínezi a kódblokkokat

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

   //1. Oldal betöltéskor lefutó függvény
    /* 
      pageLoad(){};
      window.addEventListener("load", pageLoad);
    */
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

      for(note of notes){
        // console.log(note.content);
        root.insertAdjacentHTML("beforeend", `
        <${note.tag}>${note.content}</${note.tag}>
        `
        );
      }

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

 

  //2. Function, document: constba
    /* 
    
    */

  //3.
    /* 
    
    */
}

// oldal betöltődését figyelő eseményfigyelő
window.addEventListener("load", pageLoad); // ahol event van, ott van ()