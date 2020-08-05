var slideshows = {
  programming: {
    count: -1,
    content: [
      `<div class="titleArea">🎧 FreeTube Music</div>
      FreeTube Music is a music-streaming app which I began working on in early 2020.
      I was frustrated at how YouTube Music charged money for the most basic of features, even including background listening. So, seeing as I couldn't justify the £9.99/month, I decided to make my own streaming service.
      FreeTube Music is completely client-side and uses YouTube's iframe API to stream music from their servers into a clean web app interface.<br>
      <div class="projectsButton" onclick="window.location='https://github.com/w-henderson/FreeTube-Music'">GitHub</div>
      <div class="projectsButton" onclick="slideshowNext('programming');">Next Project</div>`,

      `<div class="titleArea">🌊 TidesX</div>
      TidesX is a simple and beautiful web app to check the tide times.
      While there are tide table apps out there, they all look pretty ugly.
      I'd wanted to create a nice one for some time, but I couldn't find a tide times API.
      However, in the summer of 2020, it finally hit me that I didn't need one at all: I could just scrape a website.
      It sounds inefficient, but in reality it's extremely fast and reliable, making TidesX the best place to go for the tide times.<br>
      <div class="projectsButton" onclick="window.location='https://github.com/w-henderson/TidesX'">GitHub</div>
      <div class="projectsButton" onclick="slideshowNext('programming');">Next Project</div>`,

      `<div class="titleArea">🦠 Infection Inspection</div>
      Infection Inspection was one of the first mobile games I ever created, back in early 2019.
      The biology-inspired tower defence game sees the player, Wallace the white blood cell, try to defend the heart from increasingly deadly waves of bacteria.
      While I had some past experience in Unity and C#, Infection Inspection was my first production-ready game, and my first to make it onto the Google Play store, where it has recieved hundreds of downloads from around the world.<br>
      <div class="projectsButton" onclick="window.location='https://github.com/w-henderson/Infection-Inspection'">GitHub</div>
      <div class="projectsButton" onclick="window.location='https://play.google.com/store/apps/details?id=com.CoolTomato.InfectionInspection'">Google Play</div>
      <div class="projectsButton" onclick="slideshowNext('programming');">Next Project</div>`,

      `<div class="titleArea">🔓 FreeTube</div>
      FreeTube is a web-based YouTube proxy which allows for the viewing of YouTube videos in places where it wouldn't normally be possible.
      I created it in late 2018 so I could watch YouTube in secondary school, where it was blocked, and since then I've added to it a lot.
      While the project is now discontinued, FreeTube continues to be used by my younger peers as a way of accessing some quick entertainment during breaks in the school day.<br>
      <div class="projectsButton" onclick="window.location='https://github.com/w-henderson/FreeTube'">GitHub</div>
      <div class="projectsButton" onclick="slideshowNext('programming');">Next Project</div>`,

      `<div class="titleArea">🔍 UYTS</div>
      Unlimited YouTube Search (UYTS) is a Python library that I've developed to search YouTube without needing the YouTube Data API.
      You can see it in action in FreeTube and FreeTube Music, where it provides efficient and unlimited searches through YouTube's vast collection of videos.
      I always prefer not to use a limited API if possible, and thanks to a YouTube update and a few hours' work, this is now possible in the form of UYTS.<br>
      <div class="projectsButton" onclick="window.location='https://github.com/w-henderson/Unlimited-YouTube-Search'">GitHub</div>
      <div class="projectsButton" onclick="slideshowNext('programming');">Next Project</div>`,

      `<div class="titleArea">😊 That's it!</div>
      That's it for my featured programming projects! If you want to see all of my projects, you can find the whole lot on my <a href="https://github.com/w-henderson">GitHub</a>.<br>
      <div class="projectsButton" onclick="slideshowNext('programming');">Back to PortfoliOS</div>`
    ],
    originalContent: ""
  },
  music: {
    count: -1,
    content: [
      `<div class="titleArea">📚 GCSE Music</div>
      Alongside a listening exam, my GCSE Music course was 60% coursework, comprising of two performances and two compositions.
      One composition was completely free, while the other had a set brief to compose to, and for my year, it was "a boat sailing over the horizon".
      Here are the two compositions I submitted:<br><br>

      <b>Free Composition: "String Quartet" (<a href="#" onclick="var freeComp = document.getElementById('freeComposition');freeComp.paused ? freeComp.play() : freeComp.pause();">play/pause</a>)</b>
      <audio id="freeComposition" src="music/gcse_free_composition.webm"></audio><br>
      This was the third or fourth piece I wrote for my free composition, but I eventually chose to submit this one as I felt like it was the most musically impressive.

      <br><br><b>Set Composition: "The Boat" (<a href="#" onclick="var setComp = document.getElementById('setComposition');setComp.paused ? setComp.play() : setComp.pause();">play/pause</a>)</b>
      <audio id="setComposition" src="music/gcse_set_composition.webm"></audio><br>
      I intended to improve this piece before the deadline, but thanks to coronavirus, this wasn't possible. Still, I'm pretty proud of how it turned out. It's meant to represent a pirate ship.
      <br><div class="projectsButton" onclick="slideshowNext('music');">Next Project</div>`,

      `<div class="titleArea">👩‍👧‍👦 Family Lockdown Music</div>
      During the coronavirus lockdown in 2020, I arranged several pieces for my family and I to play, as well as accompanying them on the piano.
      My mum plays the bassoon and my sister the violin, yet despite the unusual instrumentation of our ensemble, I think it works better than expected.
      Here is a selection of the best ones: (approx 3 mins each)<br><br>

      <b>"Strange Days Ahead" from Doctor Strange (<a href="#" onclick="var sda = document.getElementById('strangeDaysAhead');sda.paused ? sda.play() : sda.pause();">play/pause</a>)</b>
      <audio id="strangeDaysAhead" src="music/strange_days_ahead.webm"></audio><br>
      This interesting piece is the theme from the Marvel film Doctor Strange, which sees an egotistical yet very capable neurosurgeon turn to the mystic arts in an attempt to regain the use of his hands.

      <br><br><b>Suite from Spider-Man: Homecoming (<a href="#" onclick="var shc = document.getElementById('spidermanHomecoming');shc.paused ? shc.play() : shc.pause();">play/pause</a>)</b>
      <audio id="spidermanHomecoming" src="music/homecoming.webm"></audio><br>
      This is the suite from Spider-Man: Homecoming, a Marvel film in which Peter Parker/Spider-Man tries to balance a normal life with fighting crime in New York.

      <br><br><b>"Portals" from Avengers: Endgame (<a href="#" onclick="var portals = document.getElementById('portals');portals.paused ? portals.play() : portals.pause();">play/pause</a>)</b>
      <audio id="portals" src="music/portals.webm"></audio><br>
      This piece is taken from the climactic battle scene of Avengers: Endgame, the final film of Marvel's Infinity Saga which sees the Avengers unite once more to defeat the evil Thanos.
      <br><div class="projectsButton" onclick="slideshowNext('music');">Next Project</div>`,

      `<div class="titleArea">🎼 Personal Projects</div>
      As well as my numerous musical endeavours with goals in mind, I've spent some considerable time composing for the fun of it.
      Most of the time, I will just experiment with some ideas, rarely producing a finished piece.
      However, on some rare occasions, I do finish pieces, and here are some of my favourites.<br><br>

      <b>"Tuning" (<a href="#" onclick="var tuning = document.getElementById('tuning');tuning.paused ? tuning.play() : tuning.pause();">play/pause</a>)</b>
      <audio id="tuning" src="music/tuning.webm"></audio><br>
      This piece was inspired by the sound of an orchestra tuning before a concert. I took the original fifths from the string section, and developed it into one of my favourite compositions yet.

      <br><div class="projectsButton" onclick="slideshowNext('music');">Next Project</div>`,

      `<div class="titleArea">😊 That's it!</div>
      That's it for my featured musical projects! I generally don't post my music anywhere, but you can always contact me if you want to know more about my musical endeavours. (contact information in 'CONTACT.EXE')<br>
      <div class="projectsButton" onclick="slideshowNext('music');">Back to PortfoliOS</div>`
    ],
    originalContent: "",
  },
  video_editing: {
    count: -1,
    content: [
      `<div class="titleArea">🎥 CoolTomato (YouTube)</div>
      I have a YouTube channel called CoolTomato, and, while I no longer upload as frequently as I used to, it's still a good showcase of my video editing ability.
      I achieved two thousand subscribers in mid-2020, and my videos have been viewed a total of more than 250,000 times!
      Here's a selection of what I think are my best videos:<br><br>

      <iframe style="width:calc(50% - 10px);height:10vw;float:left;" src="https://www.youtube-nocookie.com/embed/rdqPfs2fPuk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe style="width:calc(50% - 10px);height:10vw;float:right;" src="https://www.youtube-nocookie.com/embed/XxfnvbLcPeo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe style="width:calc(50% - 10px);height:10vw;float:left;" src="https://www.youtube-nocookie.com/embed/OzjHjO0mF_E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe style="width:calc(50% - 10px);height:10vw;float:right;" src="https://www.youtube-nocookie.com/embed/MX3Qrztw9MU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <div class="projectsButton" onclick="window.location='https://youtube.com/cooltomato'">Visit my channel</div>
      <div class="projectsButton" onclick="slideshowNext('video_editing');">Next Project</div>`,

      `<div class="titleArea">⛪ Part-Time Church Editing</div>
      During the coronavirus lockdown in 2020, I was employed part time by Exmouth Coastal Churches to film and edit several of their online services for members of the congregation who couldn't make it to church.
      As well as filming and editing, the job included coordinating numerous people to lead different parts of the services (such as the readings and the prayers), a skill I hadn't had to use much beforehand.
      Here's a playlist of the services I filmed and edited:<br><br>

      <iframe style="width:100%;height:20vw;" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLH7-uob7X0Aa9EjfAjlSbygyaSxCDZfnh" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <div class="projectsButton" onclick="slideshowNext('video_editing');">Next Project</div>`,

      `<div class="titleArea">😊 That's it!</div>
      That's it for my featured video-editing projects! You can check out my <a href="https://youtube.com/cooltomato">YouTube channel</a> to see more of my videos if you like.<br>
      <div class="projectsButton" onclick="slideshowNext('video_editing');">Back to PortfoliOS</div>`
    ]
  }
};
