
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