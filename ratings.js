// function addDarkmodeWidget() {
//   new Darkmode().showWidget();
// }
// window.addEventListener("load", addDarkmodeWidget);
// const options = {
//   bottom: "64px", // default: '32px'
//   right: "unset", // default: '32px'
//   left: "32px", // default: 'unset'
//   time: "0.5s", // default: '0.3s'
//   mixColor: "#fff", // default: '#fff'
//   backgroundColor: "#fff", // default: '#fff'
//   buttonColorDark: "#100f2c", // default: '#100f2c'
//   buttonColorLight: "#fff", // default: '#fff'
//   saveInCookies: false, // default: true,
//   label: "🌓", // default: ''
//   autoMatchOsTheme: true, // default: true
// };

// const darkmode = new Darkmode(options);
// darkmode.showWidget();


let Employee_Rating = 0;

document.getElementById("btn2").addEventListener("click", function () {
  if (document.getElementById("rate-5").checked) {
    Employee_Rating = 5;
  } else if (document.getElementById("rate-4").checked) {
    Employee_Rating = 4;
  } else if (document.getElementById("rate-3").checked) {
    Employee_Rating = 3;
  } else if (document.getElementById("rate-2").checked) {
    Employee_Rating = 2;
  } else if (document.getElementById("rate-1").checked) {
    Employee_Rating = 1;
  }
});
console.log("Empl Rating", Employee_Rating);

// import {
//   getDataBase,
//   ref,
//   set,
//   child,
//   update,
//   remove,
// } from "www.gstatic.com/firebasejs/8.2.1/firebase-database.js";
// const db = getDataBase();

// let timestamp = Date.now();

// function InsertData() {
//   set(ref(db, "username", "TheRatings/" + timestamp), {
//     EmployeeRating: Employee_Rating,
//     FeedBack: feed,
//   });
// }

// document.getElementById("bbbtt").addEventListener('click',InsertData);

document.getElementById("form-post").addEventListener("submit", function (e) {
  e.preventDefault();
  const timestamp = Date.now();
  const msgInput = document.getElementById("feed");
  const msg = msgInput.value;
  msgInput.value = "";
  console.log(msg);
  console.log(Employee_Rating);

  const btn = document.getElementById("btn2");
      const post = document.querySelector(".post");
      const widget = document.querySelector(".star-widget");
      const editBtn = document.querySelector(".edit");
      
      btn.onclick = () => {
        widget.style.display = "none";
        post.style.display = "block";
        editBtn.onclick = () => {
            widget.style.display = "block";
            post.style.display = "none";
        }
        return false;
      }
      function ShowAndHide() {
      var x = document.getElementById("showing");
      if (x.style.display == "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
      }
  firebase
    .database()
    .ref("rating/" + timestamp)
    .set({
      Employee_Rating,
      msg,
    });
});
