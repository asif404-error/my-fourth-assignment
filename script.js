
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

function setInterview(card) {
  const statusText = card.querySelector(".status-badge");

  if (card.dataset.status === "interview") {
    removeFromLists(card);

    card.dataset.status = "all";
    statusText.innerText = "NOT APPLIED";

    statusText.classList.remove("bg-green-100", "text-green-600");
    statusText.classList.add("bg-gray-100", "text-gray-600");

    calculateCount();
    filterCards();
    return;
  }

  removeFromLists(card);

  card.dataset.status = "interview";
  interviewList.push(card);

  statusText.innerText = "INTERVIEW";
  statusText.classList.remove(
    "bg-gray-100",
    "text-gray-600",
    "bg-red-100",
    "text-red-600",
  );
  statusText.classList.add("bg-green-100", "text-green-600");

  calculateCount();
  filterCards();
}

function setRejected(card) {
  const statusText = card.querySelector(".status-badge");

  if (card.dataset.status === "rejected") {
    removeFromLists(card);

    card.dataset.status = "all";
    statusText.innerText = "NOT APPLIED";

    statusText.classList.remove("bg-red-100", "text-red-600");
    statusText.classList.add("bg-gray-100", "text-gray-600");

    calculateCount();
    filterCards();
    return;
  }

  removeFromLists(card);

  card.dataset.status = "rejected";
  rejectedList.push(card);

  statusText.innerText = "REJECTED";
  statusText.classList.remove(
    "bg-gray-100",
    "text-gray-600",
    "bg-green-100",
    "text-green-600",
  );
  statusText.classList.add("bg-red-100", "text-red-600");

  calculateCount();
  filterCards();
}

function removeFromLists(card) {
  for (let i = 0; i < interviewList.length; i++) {
    if (interviewList[i] === card) {
      interviewList.splice(i, 1);
      break;
    }
  }

  for (let i = 0; i < rejectedList.length; i++) {
    if (rejectedList[i] === card) {
      rejectedList.splice(i, 1);
      break;
    }
  }
}
