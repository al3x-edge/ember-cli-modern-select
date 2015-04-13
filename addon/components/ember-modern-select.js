import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ember-modern-select'],
  classNameBindings: ['disabled', 'loading'],

  // Alias placeholder to prompt -- compatible with Ember.Select syntax.
  placeholder: Ember.computed.alias('prompt'),

  // Overrideable object paths for value and label paths
  optionValuePath: 'content',
  optionLabelPath: 'content',

  /**
  * Loading feature default values.
  * If you want to override the css class that is applied, change the `loadingClass` property.
  */
  loading: false,
  loadingClass: 'loading',

  disabled: false,

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

  didInsertElement: function(){
    // Cache wrapper to local variable
    this._modernSelect = this.$().find('.modern-select');

    //Some changes to content, selection and disabled could have happened before the Component was inserted into the DOM.
    //We trigger all the observers manually to account for those changes.
    this._disabledDidChange();
    // this._contentDidChange();
  },

  _displayDropdown: function(){
    this._modernSelect.toggleClass('opened');
  },

  /*
  * Observer on the disabled property that enables or disables modern-select.
  */
  _disabledDidChange: Ember.observer(function(){
    if( !this._modernSelect ){ return; }

    var disable = this.get('disabled');
    if( disable ){
      this.$().find('input').attr('disabled', true);
    } else {
      this.$().find('input').removeAttr('disabled');
    }

  }, 'disabled'),

  actions:{
    wrapClicked: function(){
      this._displayDropdown();
    }
  }
});

