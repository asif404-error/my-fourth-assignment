
let interviewList = [];
let rejectedList = [];
let countList = "all";

let countTotal = document.getElementById("countTotal");
let countInterview = document.getElementById("countInterview");
let countRejected = document.getElementById("countRejected");

const btnAll = document.getElementById("btn-all-tab");
const btnInterview = document.getElementById("btn-interview-tab");
const btnRejected = document.getElementById("btn-rejected-tab");

const allCard = document.getElementById("all-card");
const mainSection = document.querySelector("main");
const noJobsSection = document.getElementById("no-jobs-available-section");

function calculateCount() {
  countTotal.innerText = allCard.children.length;
  countInterview.innerText = interviewList.length;
  countRejected.innerText = rejectedList.length;

  document.getElementById("jobCountSection").innerText =
    allCard.children.length + " Jobs";
}


function toggleStyle(id) {
  btnAll.classList.remove("bg-blue-700", "text-white");
  btnInterview.classList.remove("bg-blue-700", "text-white");
  btnRejected.classList.remove("bg-blue-700", "text-white");

  btnAll.classList.add("bg-gray-200");
  btnInterview.classList.add("bg-gray-200");
  btnRejected.classList.add("bg-gray-200");

  const activeBtn = document.getElementById(id);
  activeBtn.classList.remove("bg-gray-200");
  activeBtn.classList.add("bg-blue-700", "text-white");

  if (id === "btn-all-tab") countList = "all";
  if (id === "btn-interview-tab") countList = "interview";
  if (id === "btn-rejected-tab") countList = "rejected";

  filterCards();
}

function filterCards() {
  let cards = allCard.children;
  let visibleCount = 0;

  for (let i = 0; i < cards.length; i++) {
    const status = cards[i].dataset.status;

    if (countList === "all") {
      cards[i].classList.remove("hidden");
      visibleCount++;
    } else if (countList === "interview") {
      if (status === "interview") {
        cards[i].classList.remove("hidden");
        visibleCount++;
      } else {
        cards[i].classList.add("hidden");
      }
    } else if (countList === "rejected") {
      if (status === "rejected") {
        cards[i].classList.remove("hidden");
        visibleCount++;
      } else {
        cards[i].classList.add("hidden");
      }
    }
  }

  if (visibleCount === 0) {
    noJobsSection.classList.remove("hidden");
  } else {
    noJobsSection.classList.add("hidden");
  }
}

allCard.addEventListener("click", function (e) {
  const card = e.target.closest(".card");
  if (!card) return;

  if (
    e.target.closest("button") &&
    e.target.closest("button").querySelector("img")
  ) {
    removeFromLists(card);
    card.remove();
    calculateCount();
    filterCards();
    return;
  }

  if (e.target.innerText === "INTERVIEW") {
    setInterview(card);
  }

  if (e.target.innerText === "REJECTED") {
    setRejected(card);
  }
});
