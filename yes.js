const Name = prompt("Enter your name: \n");

document.getElementById("msg-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const timestamp = Date.now();
    const msgInput = document.getElementById("msg-input");
    const msg = msgInput.value;
  
    msgInput.value = "";
  
    document.getElementById("msgs").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  
    firebase.database().ref("uid/" + timestamp).set({
      Name,
      msg,
    });
  });
const fetch = firebase.database().ref("uid/");
fetch.on("child_added", function (snap) {
  const msgs = snap.val();
  const msg = `<li class=${
    Name === msgs.Name ? "sent" : "receive"
  }>${msgs.Name}: ${msgs.msg}</li>`;
  document.getElementById("msgs").innerHTML += msg;
});