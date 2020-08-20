var acceptedKeys = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ._").split("").concat(["Enter", "Backspace"]);

function mobileAndTabletCheck() { // from http://detectmobilebrowsers.com/
  let check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

function startupCheck() {
  if (mobileAndTabletCheck()) {
    window.location = "simple/index.html";
  } else {
    intro();
  }
}

var introText = [
  "Initiating PortfoliOS...",
  "Authenticating user...",
  "Finalising configuration...",
  "Removing obviously fake loading messages..."
];

var introDone = false;

var adminCommands = [
  "mkdir",
  "rm",
  "rmdir",
  "ping",
  "ipconfig",
  "sudo",
  "del",
  "explorer"
]

async function intro() {
  var cmd = document.getElementById("consoleArea");
  for (let i = 0; i < 4; i++) {
    document.getElementById("consoleArea").className = "";
    for (let char = 0; char < introText[i].length; char++) {
      cmd.innerHTML += introText[i][char];
      await sleep(25);
    }
    document.getElementById("consoleArea").className = "animated";
    await sleep(Math.random() * 2000 + 1);
    cmd.innerHTML += " Done<br>";
  }
  await sleep(250);
  cmd.innerHTML = "";
  document.getElementById("consoleArea").className = "";
  for (let char = 0; char < "Welcome to PortfoliOS v1.0!".length; char++) {
    cmd.innerHTML += "Welcome to PortfoliOS v1.0!"[char];
    await sleep(25);
  }
  document.getElementById("consoleArea").className = "animated";
  cmd.innerHTML += '<br><br><span class="dollar">$ </span>';
  introDone = true;
}

function exitCommand() {
  document.getElementById("consoleHolder").className = "console goodbyeAnimation";
  document.getElementById("exitImage").className = "exitImage finalAnimation";
  window.setTimeout(function () { document.body.innerHTML = ""; }, 300);
}

function clearCommand() {
  document.getElementById("consoleArea").innerHTML = "<span class=\"dollar\">$ </span>";
}

function dirCommand() {
  document.getElementById("consoleArea").innerHTML += "<br> Volume in drive C is WILLIAMHENDERSON";
  document.getElementById("consoleArea").innerHTML += "<br> Volume Serial Number is 0-54973930-29786015-62170724";
  document.getElementById("consoleArea").innerHTML += "<br><br> Directory of C:\\Users\\Guest";
  document.getElementById("consoleArea").innerHTML += `<br><br>
ABOUT_ME.EXE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROGRAMMING.EXE<br>
VIDEO_EDITING.EXE&nbsp;&nbsp;&nbsp;MUSIC.EXE<br>
QUALIFICATIONS.EXE&nbsp;&nbsp;CONTACT.EXE<br>`;
  document.getElementById("consoleArea").innerHTML += "<br><span class=\"dollar\">$ </span>";
}

function echoCommand(toEcho) {
  document.getElementById("consoleArea").innerHTML += "<br>" + toEcho + "<br>";
  document.getElementById("consoleArea").innerHTML += "<br><span class=\"dollar\">$ </span>";
}

function contactCommand() {
  document.getElementById("consoleArea").innerHTML += `<br>
  Host Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;William Henderson<br>
  OS Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PortfoliOS v1.0<br>
  Serial Number:&nbsp;&nbsp;0-54973930-29786015-62170724<br><br>

  Email Address:&nbsp;&nbsp;<a href="mailto:william-henderson@outlook.com">william-henderson@outlook.com</a><br>
  GitHub:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/w-henderson">https://github.com/w-henderson</a><br>
  Twitter:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://twitter.com/realcooltomato">@realcooltomato</a><br><br>

  Thank you for visiting my portfolio!

  <br><br><span class=\"dollar\">$ </span>`;
}

function qualificationsCommand() {
  document.getElementById("consoleArea").innerHTML += `<br><br>
  10 Level 9's at GCSE:<br><br>
Mathematics: 9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;English Literature: 9<br>
English Language: 9&nbsp;&nbsp;&nbsp;&nbsp;Physics: 9<br>
Chemistry: 9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Biology: 9<br>
Computer Science: 9&nbsp;&nbsp;&nbsp;&nbsp;Music: 9<br>
French: 9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Religion: 9
  <br><br><span class=\"dollar\">$ </span>`;
}

function inputEvent(e) {
  if (acceptedKeys.includes(e.key) && introDone) {
    if (e.key == "Enter") {
      var commands = document.getElementById("consoleArea").innerHTML.split("$ ");
      var command = commands[commands.length - 1].replace("</span>", "").toLowerCase().replace(".exe", "");
      console.log("'" + command + "'");
      if (command == "exit" || command == "quit" || command == "goodbye" || command == "shutdown") {
        exitCommand();
      } else if (command == "clear" || command == "cls") {
        clearCommand();
      } else if (command == "dir") {
        dirCommand();
      } else if (command == "about_me") {
        document.getElementById("aboutMeWindow").className = "normalWindow separateWindowActive";
        document.getElementById("consoleArea").innerHTML += "<br>";
        introDone = false;
        openExtraWindow();
      } else if (command == "programming") {
        document.getElementById("programmingWindow").className = "normalWindow separateWindowActive";
        document.getElementById("consoleArea").innerHTML += "<br>";
        introDone = false;
        openExtraWindow();
      } else if (command == "music") {
        document.getElementById("musicWindow").className = "normalWindow separateWindowActive";
        document.getElementById("consoleArea").innerHTML += "<br>";
        introDone = false;
        openExtraWindow();
      } else if (command == "video_editing") {
        document.getElementById("video_editingWindow").className = "normalWindow separateWindowActive";
        document.getElementById("consoleArea").innerHTML += "<br>";
        introDone = false;
        openExtraWindow();
      } else if (command == "qualifications") {
        qualificationsCommand();
      } else if (command == "contact") {
        contactCommand();
      } else if (command.slice(0, 5) == "echo ") {
        echoCommand(command.slice(5))
      } else if (command.substring(0, 3) == "cd ") {
        document.getElementById("consoleArea").innerHTML += "<br>There are no other directories on this entire system, so you'll have to stay here.<br><br><span class=\"dollar\">$ </span>";
      } else if (command == "help") {
        document.getElementById("consoleArea").innerHTML += "<br>The 'dir' command might be a good place to start.<br><br><span class=\"dollar\">$ </span>";
      } else if (adminCommands.includes(command.split(" ")[0])) {
        document.getElementById("consoleArea").innerHTML += "<br>I don't want to ruin the experience, but believe it or not, this isn't actually a real terminal... I thought emulating an entire operating system in JavaScript would be a bit much. I mean, <a href='https://github.com/felixrieseberg/windows95'>you can</a>, but you really don't need to be able to play Minesweeper or run actual programs in a portfolio. It's a portfolio.<br><br><span class=\"dollar\">$ </span>";
      } else if (command == "") {
        document.getElementById("consoleArea").innerHTML += "<br><span class=\"dollar\">$ </span>";
      } else {
        document.getElementById("consoleArea").innerHTML += "<br>'" + command + "' is not recognised as an internal or external command, operable program or batch file.<br><br><span class=\"dollar\">$ </span>";
      }
      var dollars = document.getElementsByClassName("dollar");
      dollars[dollars.length - 1].scrollIntoView();
    } else if (e.key == "Backspace") {
      console.log(document.getElementById("consoleArea").innerHTML.slice(-2));
      if (document.getElementById("consoleArea").innerHTML.slice(-2) != "$ ") {
        document.getElementById("consoleArea").innerHTML = document.getElementById("consoleArea").innerHTML.slice(0, -1);
      }
    } else {
      document.getElementById("consoleArea").innerHTML += e.key;
    }
    document.getElementById("consoleArea").className = "";
    document.getElementById("consoleArea").offsetWidth;
    document.getElementById("consoleArea").className = "animated";
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function clickToClose(e) {
  if (e.target.className == "normalWindow separateWindowActive") {
    e.target.className = "normalWindow";
    document.getElementById("consoleArea").innerHTML += "<br><span class=\"dollar\">$ </span>";
    var dollars = document.getElementsByClassName("dollar");
    dollars[dollars.length - 1].scrollIntoView();
    introDone = true;
    document.removeEventListener("click", clickToClose);
    slideshows[e.target.id.replace("Window", "")].count = -1;
    window.setTimeout(function (target = e.target) {
      document.getElementById(target.id.replace("Window", "Content")).innerHTML = slideshows[target.id.replace("Window", "")].originalContent;
    }, 500);
  }
}

function openExtraWindow() {
  document.addEventListener("click", clickToClose);
}

function slideshowNext(slideshow) {
  slideshows[slideshow].count++;
  if (slideshows[slideshow].count == slideshows[slideshow].content.length) {
    document.getElementsByClassName("separateWindowActive")[0].className = "normalWindow";
    document.getElementById("consoleArea").innerHTML += "<br><span class=\"dollar\">$ </span>";
    introDone = true;
    document.removeEventListener("click", clickToClose);
    slideshows[slideshow].count = -1;
    var dollars = document.getElementsByClassName("dollar");
    dollars[dollars.length - 1].scrollIntoView();
    window.setTimeout(function () {
      document.getElementById(slideshow + "Content").innerHTML = slideshows[slideshow].originalContent;
    }, 500);
  } else if (slideshows[slideshow].count == 0) {
    slideshows[slideshow].originalContent = document.getElementById(slideshow + "Content").innerHTML;
    document.getElementById(slideshow + "Content").innerHTML = slideshows[slideshow].content[slideshows[slideshow].count];
    document.getElementsByClassName("separateWindowActive")[0].children[0].children[0].children[0].scrollIntoView();
  } else {
    document.getElementById(slideshow + "Content").innerHTML = slideshows[slideshow].content[slideshows[slideshow].count];
    document.getElementsByClassName("separateWindowActive")[0].children[0].children[0].children[0].scrollIntoView();
  }
}
