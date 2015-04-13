import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ember-modern-select'],

  // Alias placeholder to prompt -- compatible with Ember.Select syntax.
  placeholder: Ember.computed.alias('prompt'),

  // Overrideable object paths for value and label paths
  optionValuePath: 'content',
  optionLabelPath: 'content',

  selection: null,
  value: Ember.computed('selection', {
    get(){
      var valuePath = this.get('_valuePath');
      return valuePath ? this.get('selection.' + valuePath) : this.get('selection');
    },
    set(key, value){
      return value;
    }
  }),

  /**
   * Computed properties that hold the processed paths ('content.' replacement),
   * as it is done on Ember.Select
   */
  _valuePath: Ember.computed('optionValuePath', {
    get(){
      return this.get('optionValuePath').replace(/^content\.?/, '');
    }
  }),
  _labelPath: Ember.computed('optionLabelPath', {
    get(){
      return this.get('optionLabelPath').replace(/^content\.?/, '');
    }
  }),
});

