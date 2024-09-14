
const baseUrl = "";

const dropdowns = document.querySelectorAll('.drop-down select');
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
let amount = document.querySelector(".amount input");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "BDT") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});




const updateExchangeRate = async() => {
  
  
let amount = document.querySelector(".amount input");
let amtVal = amount.value;
if (amtVal === "" || amtVal < 0) {
  amtVal = 1;
  amount.value = "1";
}
console.log(amount.value);
const URL = `https://v6.exchangerate-api.com/v6/aae681f9c52bb0e265d9c810/latest/${fromCurr.value}`;
fetch(URL).then((response) => response.json()).then((responseData) => {
  const exchangerate = responseData.conversion_rates[toCurr.value];
  console.log(exchangerate);
  console.log(responseData);
  //Final answer
  const finalAmount = amount.value * exchangerate;
  console.log(finalAmount);
  msg.innerText = `${amount.value} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

})
console.log(URL)


}










btn.addEventListener("click", () => {
  msg.style.color = "#89159b";
});


window.addEventListener("load", () => {
  updateExchangeRate();
});















  /** 



let amount = document.querySelector(".amount input");
let amtVal = amount.value;
if (amtVal === "" || amtVal < 0) {
  amtVal = 1;
  amount.value = "1";
}
console.log(amount.value);
const URL = `https://v6.exchangerate-api.com/v6/aae681f9c52bb0e265d9c810/latest/${fromCurr.value}`;
fetch(URL).then((response) => response.json()).then((responseData) => {
  const exchangerate = responseData.conversion_rates[toCurr.value];
  console.log(exchangerate);
  console.log(responseData);
  //Final answer
  const finalAmount = amount.value * exchangerate;
  console.log(finalAmount);
  msg.innerText = `${amount.value} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

})
console.log(URL)**/











































