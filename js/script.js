try { var inject = document.getElementById("inject"); inject.innerHTML = "", myobj = gData; for (let e = 0; e < myobj.length; e++)inject.innerHTML = inject.innerHTML + `\n    \x3c!-- col start --\x3e\n    <div class="col-4 col-sm-4 col-md-3 mb-2">\n        <div class="cstm mx-auto" style="background-image: url('${myobj[e].thumbnail}');">\n            <div class="child"></div>\n            <div class="childX"><a href="${myobj[e].link}" class="text-light">${myobj[e].name}</a></div>\n        </div>\n    </div>\n    \x3c!-- col end --\x3e\n    ` } catch (e) { } try { var player, vinject = document.getElementById("vinject"); vinject.innerHTML = "", myobj = vData; for (let e = 0; e < myobj.length; e++)vinject.innerHTML = vinject.innerHTML + `\n    \x3c!-- col start --\x3e\n    <div class="col-4 col-sm-4 col-md-3 mb-2">\n        <div class="cstm mx-auto" style="background-image: url('https://i.ytimg.com/vi/${myobj[e].vid}/mqdefault.jpg');">\n            <div class="child"></div>\n            <div class="childX"><a onclick="playThisVideo('${myobj[e].vid}')" class="text-white"> ${myobj[e].vtitle}</a></div>\n        </div>\n    </div>\n    \x3c!-- col end --\x3e\n    \x3c!-- col end --\x3e\n    `; function playThisVideo(e) { new bootstrap.Modal(document.getElementById("dialogBox")).show(), console.log(e), player && player.destroy(), player = new YT.Player("player", { height: "250", width: "100%", videoId: e, playerVars: { playsinline: 1 }, events: { onReady: onPlayerReady } }) } var tag = document.createElement("script"); tag.src = "https://www.youtube.com/iframe_api"; var firstScriptTag = document.getElementsByTagName("script")[0]; function onYouTubeIframeAPIReady() { console.log("ready") } function onPlayerReady(e) { e.target.playVideo() } function stopVideo() { player.stopVideo() } firstScriptTag.parentNode.insertBefore(tag, firstScriptTag) } catch (e) { }