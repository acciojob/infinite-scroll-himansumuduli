//your code here!

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("infi-list");

  // Function to add list items
  const addListItems = (num) => {
    for (let i = 0; i < num; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Item ${list.children.length + 1}`;
      list.appendChild(listItem);
    }
  };

  // Add initial 10 list items
  addListItems(10);

  // Event listener for scrolling
  list.addEventListener("scroll", () => {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
      addListItems(2);
    }
  });
});
