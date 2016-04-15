//if (Meteor.isClient) {

//Template.inputFromUser.events({
  //'submit .new-comment'(event) {
    // Prevent default browser form submit
   // event.preventDefault();

    // Get value from form element
   // const target = event.target;
   // const text = target.text.value;

    // Insert a task into the collection
    //commentsAboutBernie.insert({
     // text,
     // createdAt: new Date(), // current time
   // });

    // Clear form
   // target.text.value = '';
//  },
//});
//}

if (Meteor.isClient) {
  Template.inputFromUser.events({
    'submit .new-task'(event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const textValue = target.text.value;

      console.log("The value of target is...", target);
      console.log("The value of textValue is...", textValue);

      // Insert a task into the collection
      Tasks.insert({
        textValue,
        createdAt: new Date(), // current time
      });

      // Clear form
      target.text.value = '';
    },
  });

  var commentOutputHelperDictionary = {profile:
                                     {
                                      comment:"Hey! How are you",
                                      name:{first:"yo", last:"duude"}
                                     }
                                    };

Template.inputFromOthers.helpers(commentOutputHelperDictionary);

  if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

}
