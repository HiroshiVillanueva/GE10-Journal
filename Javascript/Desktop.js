
setInterval(function() {
    let time = new Date();
    let currentTime = time.toLocaleString();
    
    document.getElementById("currentTime").innerHTML = currentTime;
}, 1000);


dragElement(document.getElementById("About_Me"));

function dragElement(elmnt) {

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;

      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      if(window.localStorage.getItem("expand") == 0){
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        window.localStorage.setItem("Xpos", elmnt.style.top);
        window.localStorage.setItem("Ypos", elmnt.style.left);
      }
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function resize() {
    let file = document.getElementById("About_Me");

       // Winodw is Maxmimized and needs to be small.
    if(window.localStorage.getItem("expand") == 1) {
        window.localStorage.setItem("expand", 0);

        file.style.width = window.localStorage.getItem("winWidth");
        file.style.height = window.localStorage.getItem("winHeight");
        file.style.left = window.localStorage.getItem("Ypos");
        file.style.top = window.localStorage.getItem("Xpos");
    }else {// window is small and is maximized.
        window.localStorage.setItem("expand", 1);

        Width = file.style.width;
        Height = file.style.height;

        window.localStorage.setItem("winHeight", Height);
        window.localStorage.setItem("winWidth", Width);

        file.style.width = "calc(100vw - 6px)";
        file.style.height = "calc(100vh - 42px)";
        file.style.left = "0";
        file.style.top = "0";
    }
}

let check = 0;

function hide(num)
{
  let file = document.getElementById("About_Me");
  let hover = document.getElementById("ge10");
  let task = document.getElementById("taslbar");
  window.localStorage.setItem("hidden", 0);//means nothing
  if(num == 1)
  { 
    hover.style.borderColor = "rgba(240, 248, 255, 0.501)";
    file.style.display = "block";
    task.style.opacity = "1";
    window.localStorage.setItem("heimer", 1);// one means shown.

    if(window.localStorage.getItem("expand") == 1)
    {
      file.style.width = "calc(100vw - 6px)";
      file.style.height = "calc(100vh - 42px)";
      file.style.left = "0";
      file.style.top = "0";     
    }
  }
  else if(num == 2)
  { 
    window.localStorage.setItem("heimer", 2);//hidden
    file.style.display = "none";
  }
  else if(num == 3)
  {
    if(window.localStorage.getItem("heimer")==1)
    {
      window.localStorage.setItem("heimer", 2);
      file.style.display = "none";
    }
    else if(window.localStorage.getItem("heimer")==2)
      {
        window.localStorage.setItem("heimer", 1);
        file.style.display = "block";
      }
  }
  else if(num == 4)
  {
    file.style.display = "none";
    task.style.opacity = "0";
    window.localStorage.setItem("heimer", 0);
  }
}





function openFile(option)
{
  let title = document.getElementById("fileTitle");
  let context = document.getElementById("fileText");

  let home = document.getElementById("homebase");
  let About_Me = document.getElementById("desk1");
  let Culture = document.getElementById("desk2");
  let Community = document.getElementById("desk3");
  let Court = document.getElementById("desk4");
  let Church = document.getElementById("desk5");
  let Classroom = document.getElementById("desk6");
  switch(option)
  {
    //-------------------------
    case 1:
      title.innerHTML = AboutMe.title;
      context.innerHTML = AboutMe.text;

      home.style.display = "none";
      About_Me.style.display = "flex";
      Culture.style.display = "none";
      Community.style.display = "none";
      Court.style.display = "none";
      Church.style.display = "none";
      Classroom.style.display = "none";
    break;
    //-------------------------
    case 2:
      title.innerHTML = culture.title;
      context.innerHTML = culture.text;

      home.style.display = "none";
      About_Me.style.display = "none";
      Culture.style.display = "flex";
      Community.style.display = "none";
      Court.style.display = "none";
      Church.style.display = "none";
      Classroom.style.display = "none";
    break;
    //-------------------------
    case 3:
      title.innerHTML = community.title;
      context.innerHTML = community.text;

      home.style.display = "none";
      About_Me.style.display = "none";
      Culture.style.display = "none";
      Community.style.display = "flex";
      Court.style.display = "none";
      Church.style.display = "none";
      Classroom.style.display = "none";
    break;
    //-------------------------
    case 4:
      title.innerHTML = court.title;
      context.innerHTML = court.text;

      home.style.display = "none";
      About_Me.style.display = "none";
      Culture.style.display = "none";
      Community.style.display = "none";
      Court.style.display = "flex";
      Church.style.display = "none";
      Classroom.style.display = "none";
    break;
    //-------------------------
    case 5:
      title.innerHTML = church.title;
      context.innerHTML = church.text;

      home.style.display = "none";
      About_Me.style.display = "none";
      Culture.style.display = "none";
      Community.style.display = "none";
      Court.style.display = "none";
      Church.style.display = "flex";
      Classroom.style.display = "none";
    break;
    //-------------------------
    case 6:
      title.innerHTML = classroom.title;
      context.innerHTML = classroom.text;

      home.style.display = "none";
      About_Me.style.display = "none";
      Culture.style.display = "none";
      Community.style.display = "none";
      Court.style.display = "none";
      Church.style.display = "none";
      Classroom.style.display = "flex";
    break;
    //-------------------------
    case 7:
      title.innerHTML = "GE10 JOURNAL";
      context.innerHTML = 'Please click on a file to view my stories! ';

      home.style.display = "flex";
      About_Me.style.display = "none";
      Culture.style.display = "none";
      Community.style.display = "none";
      Court.style.display = "none";
      Church.style.display = "none";
      Classroom.style.display = "none";
    break;
    //-------------------------
    
  }
}
