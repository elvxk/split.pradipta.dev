const handleKeyDown = (e) => {
  // Cegah karakter selain angka, backspace, dan delete
  if ([".", "-", "e", "E", "+", ","].includes(e.key)) {
    e.preventDefault();
  }
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    e.preventDefault()
  }
};
export default handleKeyDown;
