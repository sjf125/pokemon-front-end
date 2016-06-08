import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),

  // let slot1 = this.store.find('pokemon', { pokedex_id: params.pokedex_id} )
});
