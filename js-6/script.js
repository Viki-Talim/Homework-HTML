let booksData = [];
function deleteBook(rowElement, bookId, bookTitle) {
  const isConfirmed = confirm(
    `Do you want to delete this book? "${bookTitle}"? (ID: ${bookId})`
  );
  if (isConfirmed) {
    rowElement.remove();
    console.log(
      `The book "${bookTitle}" (ID: ${bookId}) is successfully deleted`
    );
  }
}
function renderTableRows(booksToRender) {
  const tableBody = document.getElementById("table-body");
  const loadingMessage = document.getElementById("loading-message");
  tableBody.innerHTML = "";
  if (loadingMessage && loadingMessage.style.display !== "none") {
    loadingMessage.style.display = "none";
  }
  if (booksToRender.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="5">No books found</td></tr>';
    return;
  }
  booksToRender.forEach((book) => {
    const row = tableBody.insertRow();
    const title = book.title || "Unknown author";
    const author =
      book.authors && book.authors.length > 0
        ? book.authors[0].name
        : "Uknown author";
    const years =
      book.authors && book.authors.length > 0
        ? book.authors[0].birth_year || "n/a"
        : "n/a";
    const createdAtDate = book.createdAt
      ? new Date(book.createdAt).toLocaleDateString()
      : "n/a";
    row.insertCell(0).textContent = title;
    row.insertCell(1).textContent = author;
    row.insertCell(2).textContent = years;
    row.insertCell(3).textContent = createdAtDate;
    const actionCell = row.insertCell(4);
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteBook(row, book.id, title);
    });
    actionCell.appendChild(deleteButton);
  });
}
function sortAndRender(sortKey) {
  let sortedData = [...booksData];
  if (sortKey === "title") {
    sortedData.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortKey === "author_birth_year_asc") {
    sortedData.sort((a, b) => {
      const yearA =
        a.authors && a.authors.length > 0 ? a.authors[0].birth_year : 9999;
      const yearB =
        b.authors && b.authors.length > 0 ? b.authors[0].birth_year : 9999;
      return (yearA || 9999) - (yearB || 9999);
    });
  } else if (sortKey === "created_at_asc") {
    sortedData.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
  } else if (sortKey === "author_birth_year_desc") {
    sortedData.sort((a, b) => {
      const yearA =
        a.authors && a.authors.length > 0 ? a.authors[0].birth_year : 0;
      const yearB =
        b.authors && b.authors.length > 0 ? b.authors[0].birth_year : 0;
      return (yearB || 0) - (yearA || 0);
    });
  } else if (sortKey === "created_at_desc") {
    sortedData.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  }
  renderTableRows(sortedData);
}
function initializeApp() {
  const tableBody = document.getElementById("table-body");
  const loadingMessage = document.getElementById("loading-message");
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (x) => {
      sortAndRender(x.target.value);
    });
  }
  
  fetch("https://gutendex.com/books/")
    .then((res) => res.json())
    .then((res) => {
      console.log("Data for books", res);
      booksData = (res.results || []).map((book, index) => {
        const today = new Date();
        today.setDate(today.getDate() - index);
        return { ...book, createdAt: today.getTime() };
      });

      renderTableRows(booksData);
    })
    .catch((error) => {
      console.error("Error loading data:", error);
      if (loadingMessage) {
        loadingMessage.textContent = "Eror loading data";
      }
      tableBody.innerHTML =
        '<tr><td colspan="5">Unesuccessfully loading data</td></tr>';
    });
    
}

initializeApp();
