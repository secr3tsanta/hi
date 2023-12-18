var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
let pwd = false;
var commands = [];

setTimeout(function () {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);


//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("rajanagori@about-me:~$ " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "santa":
      addLine("Magic Link is opening.....", "color2", 80);
      setTimeout(function () {
        window.open('https://www.google.com/search?q=splunk+%2B+blackhat+%2B+arsenal+%2B+docker&sca_esv=591861726&source=hp&ei=_EyAZd3SDMDS2roP2-OxWA&iflsig=AO6bgOgAAAAAZYBbDClqoFFiFuNqO3TxKI_6jvolj8Lg&ved=0ahUKEwjdwM21j5mDAxVAqVYBHdtxDAsQ4dUDCAo&uact=5&oq=splunk+%2B+blackhat+%2B+arsenal+%2B+docker&gs_lp=Egdnd3Mtd2l6IiRzcGx1bmsgKyBibGFja2hhdCArIGFyc2VuYWwgKyBkb2NrZXIyBRAhGKABSIilAlDOCljpoQJwDHgAkAEEmAGkA6ABhFuqAQsyLjYuMjcuMTAuMbgBA8gBAPgBAfgBAqgCCsICEBAAGAMYjwEY5QIY6gIYjAPCAhAQLhgDGI8BGOUCGOoCGIwDwgILEAAYgAQYsQMYgwHCAg4QABiABBiKBRixAxiDAcICCxAuGIAEGLEDGIMBwgIREC4YgwEYxwEYsQMY0QMYgATCAhEQLhiABBiKBRixAxiDARjUAsICDhAuGIAEGIoFGLEDGIMBwgIREC4YgAQYsQMYgwEYxwEY0QPCAggQABiABBixA8ICDhAuGIAEGLEDGMcBGNEDwgIFEAAYgATCAgYQABgWGB7CAggQABgWGB4YCsICBhAAGB4YDcICBBAhGArCAgoQIRigARjDBBgKwgIIECEYoAEYwwTCAggQABiABBiiBMICBxAhGKABGAo&sclient=gws-wiz');
      }, 2000);
      break;
  }
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}
