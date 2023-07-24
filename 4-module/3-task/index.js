function highlight(table) { 
  for (let tr of table.children[1].rows) {  
    let available = tr.cells[3]; 
    if (available.hasAttribute("data-available")){ 
      available.dataset.available === "true" ? tr.classList.add("available") : tr.classList.add("unavailable"); 
    }  
    else{ 
      tr.hidden = true; 
    } 
    let gender = tr.cells[2].textContent; 
    gender === "m" ? tr.classList.add("male") : tr.classList.add("female"); 
    let age = +tr.cells[1].textContent; 
    if (age < 18) tr.style.textDecoration = "line-through"; 
  } 
}
