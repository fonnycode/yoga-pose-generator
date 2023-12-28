function displayPose(response) {
  new Typewriter("#pose-generator", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePose(event) {
  event.preventDefault();

  let generatePose = document.querySelector("#user-input-generator");
  let apiKey = "9tce7490b0da29acf6b444190735fo2f";
  let context =
    "You are the master of yoga. Knowledgeable in yoga poses,breathing exercise and meditation. Generate the information and suggesting only 1 result at a time. You are giving the answer with great benefits and match the user request. The answer only consist of 3 lines and NOT long. Remember to always sign at the END by separating the line with <br /> and inside a <strong> element 'Namaste 🙏🏻'.";
  let prompt = `Generating information about ${generatePose.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poseElements = document.querySelector("#pose-generator");
  poseElements.classList.remove("hidden");
  poseElements.innerHTML = `<div class="generating"> ⌛Generating information about ${generatePose.value}</div>`;

  axios.get(apiUrl).then(displayPose);
}

let yogaPoseGenerator = document.querySelector("#box-generator");
yogaPoseGenerator.addEventListener("submit", generatePose);
