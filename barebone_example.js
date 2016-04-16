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
/*
// Parameter example
function myFunction(coolParameter){
  var x = 2 + 10 + coolParameter;
  return x;
}
myFunction(78)

*/

if (Meteor.isClient) {
  Template.inputFromUser.events({
    'submit .new-comment'(event) {
      // Prevent default browser form submit (change URL and refresh form immediately)
      event.preventDefault();

      // Get value from form element
      const form = event.target;
      console.log("This is the event object:", event);
      console.log("This is the form object:", form);
      console.log("This is the placeholder for the text object:", form.text.placeholder);

      const textValue = form.text.value;

      console.log("The value of target is...", form);
      console.log("The value of textValue is...", textValue);

      // Insert into the collection
      Support4Bernie.insert({
        supportText: textValue,
        createdAt: new Date(), // current time this is a javascript function it knows
      });

      // Clear form after it's over cause it's at the end, these are empty
      form.text.value = '';
    },
  });

  var commentOurputHelperDictionary = {
    first:
    function () {
     return "yo" + "how are you";},
    last:"dude"
    };

  Template.inputFromOthers.helpers(commentOutputHelperDictionary);


  if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

}
