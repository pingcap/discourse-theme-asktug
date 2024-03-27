import SearchMenu from 'discourse/components/search-menu';
import computed from 'discourse-common/utils/decorators';

export default {
  name: 'discourse-theme-asktug',
  initialize() {
    runAll([
      { name: 'hideSiteHeader', initializer: hideSiteHeader },
      { name: 'replaceSearchFunction', initializer: replaceSearchFunction },
    ])
  }
};

function runAll(funcs) {
  funcs.forEach(func => {
    console.debug(`[discourse-theme-asktug] execute initializer ${func.name}`);
    try {
      func.initializer()
    } catch (e) {
      console.error(`[discourse-theme-asktug] failed to execute initializer ${func.name}`, e)
    }
  })
}

function hideSiteHeader () {
  Discourse.lookup('controller:application').reopen({
    @computed()
    showSiteHeader() {
      return false;
    },
  })
}

function replaceSearchFunction() {
  // TODO: very dirty, find a way to listen component's initialization

  function search() {
    var term = document.querySelector(`#search-term`).value
    window.open('https://search.asktug.com/?q=' + encodeURIComponent(term), '_blank');
  }

  // redirect searches
  var originalTriggerSearchGet = Object.getOwnPropertyDescriptor(SearchMenu.prototype, 'triggerSearch').get;

  Object.defineProperties(SearchMenu.prototype, {
    fullSearch: {
      get() {
        return search;
      }
    },
    triggerSearch: {
      get() {
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
