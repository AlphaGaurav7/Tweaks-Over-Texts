// const Name = prompt("Enter your name: \n");

// document.getElementById("block-form").addEventListener("submit", function (e) {
//     e.preventDefault();
//     const timestamp = Date.now();
//     const blockInput = document.getElementById("block-input");
//     const block = blockInput.value;
  
//     blockInput.value = "";
  
//     document.getElementById("student").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  
//     firebase.database().ref("uid/" + timestamp).set({
//       Name,
//       block,
//     });
//   });
// const fetch = firebase.database().ref("uid/");
// fetch.on("child_added", function (snap) {
//   const student = snap.val();
//   const block = `<li class=${
//     Name === student.Name ? "sent" : "receive"
//   }>${student.Name}: ${student.block}</li>`;
//   document.getElementById("student").innerHTML += block;
// });
var count = 1;
const fetch = firebase.database().ref("Users/");
fetch.on("child_added", function (snap) {
  const student = snap.val();
  const block = `<button class="uuid-list" id=${student.uuid}><h1>${count}.</h1></button><br>`;
  count++;
  document.getElementById("leftl").innerHTML += block;
});