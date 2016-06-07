import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pokedexter-entry/entry/stats', 'Integration | Component | pokedexter entry/entry/stats', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pokedexter-entry/entry/stats}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pokedexter-entry/entry/stats}}
      template block text
    {{/pokedexter-entry/entry/stats}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
