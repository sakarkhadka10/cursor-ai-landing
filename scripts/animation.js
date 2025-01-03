let logoIcon = document.getElementById("navLogoIcon");
let logoText = document.getElementById("navLogoText");

animate(
  logoIcon,
  { rotate: 360 },
  { duration: 5, repeat: Infinity, ease: "linear" }
);

logoText.addEventListener("mouseenter", () => {
  animate(logoText, { scale: [1, 1.1, 1] }, { ease: "circIn", duration: 1.2 });
});
