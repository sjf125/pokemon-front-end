import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  user_id: attr('number'),
  slot1: belongsTo('pokemon'),
  slot2: belongsTo('pokemon'),
  slot3: belongsTo('pokemon'),
  slot4: belongsTo('pokemon'),
  slot5: belongsTo('pokemon'),
  slot6: belongsTo('pokemon'),
});
