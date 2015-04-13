import Ember from 'ember';

export default Ember.Route.extend({
  modelYears: Ember.computed({
    get(){
      var years = [];
      var startYear = 1950; // May need to change eventually
      var currentYear = new Date().getFullYear();

      for(var i=startYear; i<=currentYear; i++){
        years.push(i);
      }

      return years;
    }
  }),

  models: Ember.computed({
    get(){
      return Ember.A([
        Ember.Object.create({ id: 1, title: 'Solar Titan 130', slug: 'Solar-Titan-130', turbineDrawing: 'assets/images/turbines/Solar-Titan-130.svg', totalJumperCost: 500, tlmCost: 15000, tlmLaborDays: 3, tlmLaborPeople: 2, type: 'gas' }),
        Ember.Object.create({ id: 2, title: 'Rolls Royce Trent 60', slug: 'Rolls-Royce-Trent-60', turbineDrawing: 'assets/images/turbines/Rolls-Royce-Trent-60.svg', totalJumperCost: 4500, tlmCost: 23000, tlmLaborDays: 5, tlmLaborPeople: 2, type: 'gas' }),
        Ember.Object.create({ id: 3, title: 'GE LM2500', slug: 'GM-LM2500', turbineDrawing: 'assets/images/turbines/GE-LM2500.svg', totalJumperCost: 5000, tlmCost: 45000, tlmLaborDays: 8, tlmLaborPeople: 3, type: 'gas' }),
        Ember.Object.create({ id: 4, title: 'Westinghouse W251', slug: 'Westinghouse-W251', turbineDrawing: 'assets/images/turbines/Westinghouse-P251.svg', totalJumperCost: 0, tlmCost: 38000, tlmLaborDays: 10, tlmLaborPeople: 0, type: 'gas' }),
        Ember.Object.create({ id: 5, title: 'GE LM5000', slug: 'GE-LM5000', turbineDrawing: 'assets/images/turbines/GE-LM5000.svg', totalJumperCost: 0, tlmCost: -1, tlmLaborDays: -1, tlmLaborPeople: 0, type: 'gas' }),
        Ember.Object.create({ id: 6, title: 'GE LM6000', slug: 'GE-LM6000', turbineDrawing: 'assets/images/turbines/GE-LM6000.svg', totalJumperCost: 7500, tlmCost: 48000, tlmLaborDays: 10, tlmLaborPeople: 3, type: 'gas' }),
        Ember.Object.create({ id: 7, title: 'GE 7EA', slug: 'GE-7EA', turbineDrawing: 'assets/images/turbines/GE-7EA.svg', totalJumperCost: 0, tlmCost: 27500, tlmLaborDays: 7, tlmLaborPeople: 3, type: 'gas' }),
        Ember.Object.create({ id: 8, title: 'GE 7FA', slug: 'GE-7FA', turbineDrawing: 'assets/images/turbines/GE-7FA.svg', totalJumperCost: 30000, tlmCost: 34500, tlmLaborDays: 9, tlmLaborPeople: 3, type: 'gas' }),
        Ember.Object.create({ id: 9, title: 'GE MS7001', slug: 'GE-MS7001', turbineDrawing: '', totalJumperCost: 0, tlmCost: 31500, tlmLaborDays: 8, tlmLaborPeople: 0, type: 'gas' }),
        Ember.Object.create({ id: 10, title: 'GE LMS100', slug: 'GE-LMS100', turbineDrawing: 'assets/images/turbines/GE-LMS100.svg', totalJumperCost: 35000, tlmCost: 59000, tlmLaborDays: 16, tlmLaborPeople: 4, type: 'gas' }),
        Ember.Object.create({ id: 11, title: 'Siemens SGT6-5000F', slug: 'Siemens-SGT6-5000F', turbineDrawing: 'assets/images/turbines/Siemens-SGT6-5000F.svg', totalJumperCost: 18000, tlmCost: 48500, tlmLaborDays: 13, tlmLaborPeople: 3, type: 'gas' }),
        Ember.Object.create({ id: 12, title: 'Siemens SGT6-8000H', slug: 'Siemens-SGT6-8000H', turbineDrawing: 'assets/images/turbines/Siemens-SGT6-8000H.svg', totalJumperCost: 22000, tlmCost: 55500, tlmLaborDays: 15, tlmLaborPeople: 3, type: 'gas' }),
        Ember.Object.create({ id: 13, title: 'Other(s) (gas)', slug: 'Others', turbineDrawing: '', totalJumperCost: 0, tlmCost: -1, tlmLaborDays: -1, tlmLaborPeople: 0, type: 'gas' }),
        Ember.Object.create({ id: 14, title: 'Toshiba TC2F', slug: 'Toshiba-TC2F', turbineDrawing: '', totalJumperCost: 10000, tlmCost: 65000, tlmLaborDays: 20, tlmLaborPeople: 4, type: 'steam' }),
        Ember.Object.create({ id: 15, title: 'Toshiba TC4F', slug: 'Toshiba-TC4F', turbineDrawing: '', totalJumperCost: 13500, tlmCost: 65000, tlmLaborDays: 20, tlmLaborPeople: 4, type: 'steam' }),
        Ember.Object.create({ id: 16, title: 'Toshiba LSB40', slug: 'Toshiba-LSB40', turbineDrawing: '', totalJumperCost: 17000, tlmCost: 65000, tlmLaborDays: 20, tlmLaborPeople: 4, type: 'steam' }),
        Ember.Object.create({ id: 17, title: 'GE400', slug: 'GE400', turbineDrawing: '', totalJumperCost: 0, tlmCost: 41500, tlmLaborDays: 11, tlmLaborPeople: 0, type: 'steam' }),
        Ember.Object.create({ id: 18, title: 'GE D11', slug: 'GE-D11', turbineDrawing: '', totalJumperCost: 15000, tlmCost: 41500, tlmLaborDays: 11, tlmLaborPeople: 3, type: 'steam' }),
        Ember.Object.create({ id: 19, title: 'Alstom STF15C', slug: 'Alstom-STF15C', turbineDrawing: '', totalJumperCost: 0, tlmCost: 34500, tlmLaborDays: 9, tlmLaborPeople: 3, type: 'steam' }),
        Ember.Object.create({ id: 20, title: 'Other(s) (steam)', slug: 'Others', turbineDrawing: '', totalJumperCost: 0, tlmCost: -1, tlmLaborDays: -1, tlmLaborPeople: 0, type: 'steam' }),
      ]);
    }
  }),

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('attrs.models', this.get('models'));
    controller.set('attrs.modelYears', this.get('modelYears'));
  }
});

