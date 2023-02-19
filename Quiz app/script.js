const question = [
  {
    qus: `qus: who is the president of india?`,
    a: "pranav mukhrji",
    b: "narendra modi",
    c: "dropadi murmur",
    d: "nirmla sitaraman",
    correctAns: "dropadi murmur",
  },
  {
    qus: `qus: who is the prime minister of india?`,
    a: "pranav mukhrji",
    b: "narendra modi",
    c: "dropadi murmur",
    d: "nirmla sitaraman",
    correctAns: "narendra modi",
  },
  {
    qus: `qus: who is the finance minister of india?`,
    a: "pranav mukhrji",
    b: "narendra modi",
    c: "dropadi murmur",
    d: "nirmla sitaraman",
    correctAns: "nirmla sitaraman",
  },
  {
    qus: `qus: who is the chief minister of MP?`,
    a: "pranav mukhrji",
    b: "narendra modi",
    c: "shivraj singh choun",
    d: "nirmla sitaraman",
    correctAns: "shivraj singh choun",
  },
];
let i = 0;

const contain = document.getElementById("cont");
const pera = document.getElementById("pera1");
const line1 = document.getElementById("span1");
const line2 = document.getElementById("span2");
const line3 = document.getElementById("span3");
const line4 = document.getElementById("span4");
const peragraph = document.getElementById("pera2");
const peragraph1 = document.getElementById("pera3");

const selectAll = document.querySelectorAll(".input");
btn.addEventListener("click", () => {
  next();
  // querySelector();
  querySelector();

  dselect();

  console.log("click");

  //   i++;
  btn.innerHTML = "Submit";
  contain.style.display = "block";

  if (i === question.length) {
    alert("you have finished");
   
    i = 0;
  } else {
    pera.innerHTML = question[i].qus;
    line1.innerHTML = question[i].a;
    line2.innerHTML = question[i].b;
    line3.innerHTML = question[i].c;
    line4.innerHTML = question[i].d;

    // querySelector();

    pera2.innerHTML = "";
  }
});
function next() {
  selectAll.forEach((el) => {
    if (el.checked) {
      i++;
    }
  });
}
function dselect() {
  selectAll.forEach((el) => {
    el.checked = false;
  });
}

function querySelector() {
  selectAll.forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target.nextElementSibling.textContent === question[i].correctAns) {
        
        pera2.innerHTML = "answer is correct";
        pera2.style.color = "green";
      } else {
        pera2.innerHTML = "answer is wrong";
        pera2.style.color = "red";
      }
    });
  });
}
