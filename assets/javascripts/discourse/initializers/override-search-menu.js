import SearchMenu from 'discourse/components/search-menu';

function search () {
  var term = document.querySelector(`#search-term`).value
  window.open('https://search.asktug.com/?q=' + encodeURIComponent(term), '_blank');
}

// redirect searches
var originalTriggerSearch = SearchMenu.prototype.triggerSearch;

SearchMenu.prototype.fullSearch = search;
SearchMenu.prototype.triggerSearch = function () {
  if (event.which === 13) {
    search ()
  } else {
    originalTriggerSearch.call(this)
  }
}
