const Name = prompt("Enter your Name: \n");

var dt = new Date().getTime();
var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
  /[xy]/g,
  function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  }
);

document.getElementById("msg-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const timestamp = Date.now();
  const msgInput = document.getElementById("msg-input");
  const msg = msgInput.value;

  msgInput.value = "";

  document
    .getElementById("msgs")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  firebase
    .database()
    .ref("Users/" + uuid + "/" + timestamp)
    .set({
      Name,
      msg,
    });
    
});
const fetch = firebase.database().ref("Users/"+uuid);
fetch.on("child_added", function (snap) {
  const msgs = snap.val();
  console.log(msgs.Name);
  const msg = `<li class=${Name === msgs.Name ? "sent" : "receive"}>${
    msgs.Name
  }: ${msgs.msg}</li>`;
  document.getElementById("msgs").innerHTML += msg;
});

firebase
    .database()
    .ref("Users/" + uuid)
    .set({
      uuid
    });