let listExperience = document.querySelector("#listExperience");

let dataExperience = [
  {
    title: "Mentor",
    desc: "ngajar",
  },
];
const addExperience = (event) => {
  event.preventDefault();

  console.log("tes", dataExperience);

  let messageTitle = prompt("Tambahkan pekerjaan anda");
  let messageDesc = prompt("Tambahkan deskripsi pekerjaan anda");
  console.log(messageTitle, messageDesc);
  let newData = {
    title: messageTitle,
    desc: messageDesc,
  };

  dataExperience.push(newData);

  newData = {
    title: "",
    desc: "",
  };
  console.log("new", dataExperience);

  dataExperience.map((item) => {
    let displayList = document.createElement("li");
    let displayTitle = document.createElement("p");

    // tampilkan <p></p>
    displayTitle.innerHTML = `<p class="tags">${item.title}<br /><span>${item.desc} </span><span>January, 2019 - now</span></span></p>`;
    displayList.appendChild(displayTitle);
    console.log("displayList", displayList);
    listExperience.appendChild(displayList);
    console.log("listExperience", listExperience);
  });
};
