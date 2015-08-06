/**
 * DivideCommand.js 
 * 06-08-2015 10:17
 * 
 * @author 
 * @email 
 * 
 */

module.exports = function(include, puremvc) {

	// include("...");

	/**
	 * @class com.domain.command.DivideCommand
	 */
	puremvc.define(
		// CLASS INFO
		{
			name: 'com.domain.command.DivideCommand',
			parent: puremvc.SimpleCommand
		},
		// INSTANCE MEMBERS
		{
			execute: function(note) {
				if (note.body.calcWanted == "DIVIDE") {
					var result = note.body.number1 / note.body.number2;
					this.facade.sendNotification("CHAIN_RESULT", result);
				} else {
					this.facade.sendNotification("NEXT_IN_CHAIN");
				}
			}
		}, {
			COMMAND: "CHAIN_DIVIDE"
		});
}