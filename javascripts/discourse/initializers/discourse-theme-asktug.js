import SearchMenu from 'discourse/components/search-menu';

export default {
  name: 'discourse-theme-asktug',
  initialize() {
    replaceSearchFunction();
  }
};

function replaceSearchFunction() {
  function search() {
    var term = document.querySelector(`#search-term`).value
    window.open('https://search.asktug.com/?q=' + encodeURIComponent(term), '_blank');
  }

  // redirect searches
  var originalTriggerSearchGet = Object.getOwnPropertyDescriptor(SearchMenu.prototype, 'triggerSearch').get;

  Object.defineProperties(SearchMenu.prototype, {
    fullSearch: {
      get () {
        return search;
      }
    },
    triggerSearch: {
      get () {
        return () => {
          if (event.which === 13) {
            search()
          } else {
            originalTriggerSearchGet.call(this).call(this);
          }
        }
      }
    }
  })
}
