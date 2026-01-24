document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleMinimal");
  const body = document.body;
  const disabledClass = "no-typography";

  if (!toggleButton) return;

  const updateButtonText = () => {
    const stylesDisabled = body.classList.contains(disabledClass);
    toggleButton.textContent = stylesDisabled
      ? "Enable styles"
      : "Disable styles";
  };

  // Initial state (on page load)
  updateButtonText();

  toggleButton.addEventListener("click", () => {
    body.classList.toggle(disabledClass);
    updateButtonText();
  });
});