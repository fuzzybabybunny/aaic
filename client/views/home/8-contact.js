Template.contact.rendered = function(){

};

Template.contact.events({

	'click #submitButton': function(){

		console.log("clicked");
		$('button').addClass( "turn-green" );
		$("#submitButton").text($("#submitButton").text().replace("Send Message", "Sent"));
		var emailContents = {};
		emailContents.email = $('input[name="email"]').val();
		emailContents.subject = $('input[name="subject"]').val();
		emailContents.message = $('textarea[name="message"]').val();
		Meteor.call('emailContactForm', emailContents);

	}


});