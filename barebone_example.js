if (Meteor.isClient) {
   Session.setDefault("numClicks", 0)

var calculateNumClicks= function () {
    return Session.get("numClicks");
  }


  Template.main.helpers({
  numClicks: calculateNumClicks

  });

 Template.main.events ({
   'click button': function () {

     Session.set("numClicks", Session.get("numClicks")+1);
   }

 });

}