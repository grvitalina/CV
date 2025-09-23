function showSection(sectionId){
  document.querySelectorAll(".ocean").forEach(sec => sec.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");
}
