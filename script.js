const submitSearchForm = document.getElementById("submitSearchForm");
const searchForm = document.getElementById("seachForm");
searchForm.addEventListener("submit", (e) => handleSearchFormSubmit(e));
function handleSearchFormSubmit(e) {
    e.preventDefault();
    clearMessages();
    doFetchData((searchItem = e.target[0].))
}