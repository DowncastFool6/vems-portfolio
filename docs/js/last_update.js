document.addEventListener("DOMContentLoaded", () => {
  const timeEl = document.getElementById("last-updated");
  if (!timeEl) return;

  const lastModified = new Date(document.lastModified);
  const now = new Date();
  timeEl.datetime = now.toISOString();           // sets datetime in correct ISO 8601
  timeEl.textContent = now.toLocaleDateString(); // human-readable date

  // Human-readable text
  timeEl.textContent = lastModified.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  // Machine-readable (SEO + accessibility)
  timeEl.setAttribute("datetime", lastModified.toISOString().split("T")[0]);
});




