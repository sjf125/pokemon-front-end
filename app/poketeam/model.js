import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // user_id: belongsTo('user'),
  user_id: attr('number'),
  slot1: attr('string'),
  slot2: attr('string'),
  slot3: attr('string'),
  slot4: attr('string'),
  slot5: attr('string'),
  slot6: attr('string'),
});
