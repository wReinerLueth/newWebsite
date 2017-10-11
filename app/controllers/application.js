import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search(){
      let text = this.get('input');
      console.log(text);
    }
  }
});
