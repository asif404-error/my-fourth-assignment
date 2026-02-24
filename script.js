
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

  if (countList === "all") {
    document.getElementById("jobCountSection").innerText = allCard.children.length + " Jobs";
  } else if (countList === "interview") {
    document.getElementById("jobCountSection").innerText = interviewList.length + " Jobs";
  } else if (countList === "rejected") {
    document.getElementById("jobCountSection").innerText = rejectedList.length + " Jobs";
  }
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
  
  calculateCount();
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

window.addEventListener("DOMContentLoaded", function () {
  const cards = allCard.children;

  for (let i = 0; i < cards.length; i++) {
    cards[i].dataset.status = "all";
  }

  calculateCount();
  filterCards();
});

// I have used simple for loops and if-else, else-if statement.

// When an user's browser opens an HTML file, it reads the code from top to bottom. So sometimes users JavaScript runs before the HTML elements are fully loaded. That means if the user try to grab an element like document.getElementById("countTotal") before the browser has read that element, user will get null — which means nothing.

// So DOMContentLoaded is basically a user telling the browser — "Wait! until you have fully read and loaded all the HTML first, then run my JavaScript."

// The reason I have used this "DOMContentLoaded" because the cards I have already written in the HTML. So, there is no need to render them dynamically using JS. All 8 cards are written in html file, so on page load I just need to set the 'data-staus' of each existing card to 'all'. Calculate the counts and filter the cards.

// But, if I was creating cards dynamically using JS (Like, declaring var and make an object into an array). Then, I would needed the render() function to create and append the cards into the DOM because html wouldn't have any cards written in it. Just as the conceptual session by Fahim Prodhan Vai.

// Since, I already written the cards in html, 'DOMContentLoaded' with the initial state is the correct approach for my code. That's what I get to know from some documents in google and form the AI and used it.

// There was a few problem at calculateCount section and toggleStyle section. I have noticed that after submitting. I have fixed that problem before the deadline and made a final commit and pushed the code.