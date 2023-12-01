// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

for (let charIndex in companyName) {
  console.log(
    (reversedCompanyName =
      reversedCompanyName +
      companyName[Number(companyName.length - 1 - charIndex)])
  );
}

console.log(reversedCompanyName);

for (let char of companyName) {
  reversedCompanyName = char + reversedCompanyName;
}
