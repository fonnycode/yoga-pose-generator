function generatePose(event) {
  event.preventDefault();

  new Typewriter("#pose-generator", {
    strings:
      "Alternate Nostril Breathing: Balances the energy in the body, calms the mind, and reduces stress and anxiety.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let yogaPoseGenerator = document.querySelector("#box-generator");
yogaPoseGenerator.addEventListener("submit", generatePose);
