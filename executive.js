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

setTimeout(function() {
  //your code to be executed after 1 second
}, delayInMilliseconds);

var count = 0;
const adresses = [];
var address;
const fetch = firebase.database().ref("Users/");
fetch.on("child_added", function (snap) {
  const student = snap.val();
  const block = `<button class="uuid-list" id=${student.uuid}><h1>${count+1}. ${student.uuid}</h1></button><br>`;
  
  document.getElementById("leftl").innerHTML += block;
  // console.log(document.querySelectorAll('.uuid-list'))
    adresses[count] = student.uuid;
    address = student.uuid;
  count++;
});


setTimeout(function(){
  for(var i = 0;i<=count;i++){
    console.log(document.querySelectorAll(".uuid-list")[i]);
  }
},1000);


// var address = 
var Name="Executive";

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
    .ref("Users/" + address + "/" + timestamp)
    .set({
      Name,
      msg,
    });
    
});

// export function adres(){
//   return address;
// }


const fetch1 = firebase.database().ref("Users/"+address);
fetch1.on("child_added", function (snap) {
  const mssgs = snap.val();
  console.log(mssgs.uid);
  const msg = `<li class=${Name === mssgs.Name ? "sent" : "receive"}>${
    mssgs.Name
  } : ${mssgs.msg}</li>`;
  document.getElementById("msgs").innerHTML += msg;
});