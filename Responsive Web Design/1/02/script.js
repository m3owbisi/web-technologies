const base_url =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";
const dropdown = document.querySelectorAll(".dropdown select");
let i = 0;
const button = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const message = document.querySelector(".message");
window.document.addEventListener("load", () => {
  updateExchangeRate();
});
for (let currCode in countryList) {
  console.log(currCode, countryList[code]);
}
for (let select of dropdown) {
  for (currCode in countryList) {
    console.log(currCode, countryList[code]);
    let newOption = document.createElement("option");
    // newOption.text = countryList[currCode];
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}
const updateFlag = (e) => {
  console.log(e);
  let currCode = e.value;
  console.log(currCode);
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
  e.parentElement.querySelector("img");
  img.src = newSrc;
};
button.addEventListener("click", async (e) => {
  e.preventDefault(); // automatically -> manually
  /*
  let amount = document.querySelector(".amount input");
  let amountValue = amount.value;
  console.log(amountValue);
  if (amountValue === "" || amountValue < 0) {
    amountValue = 0;
    amount.value = "1";
  }
  console.log(fromCurr, toCurr);
  console.log(fromCurr.value, toCurr.value);
  const url = `${base_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(url);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];
  console.log(rate);
  console.log(response);
  console.log(amount);
  console.log(rate);
  let finalAmount = amountValue * rate;
  message.innerText = `${amount}${fromCurr.value}=${finalAmount}${toCurr}`;
*/
  updateExchangeRate();
});
const updateExchangeRate = async (e) => {
  let amount = document.querySelector(".amount input");
  let amountValue = amount.value;
  console.log(amountValue);
  if (amountValue === "" || amountValue < 0) {
    amountValue = 0;
    amount.value = "1";
  }
  console.log(fromCurr, toCurr);
  console.log(fromCurr.value, toCurr.value);
  const url = `${base_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response = await fetch(url);
  let data = await response.json();
  let rate = data[toCurr.value.toLowerCase()];
  console.log(rate);
  console.log(response);
  console.log(amount);
  console.log(rate);
  let finalAmount = amountValue * rate;
  message.innerText = `${amount}${fromCurr.value}=${finalAmount}${toCurr}`;
};
