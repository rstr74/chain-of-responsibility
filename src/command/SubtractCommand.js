/**
 * SubtractCommand.js 
 * 06-08-2015 10:17
 * 
 * @author 
 * @email 
 * 
 */

module.exports = function(include, puremvc) {

	// include("...");

	/**
	 * @class com.domain.command.SubtractCommand
	 */
	puremvc.define(
		// CLASS INFO
		{
			name: 'com.domain.command.SubtractCommand',
			parent: puremvc.SimpleCommand
		},
		// INSTANCE MEMBERS
		{
			execute: function(note) {
				if (note.body.calcWanted == "SUBTRACT") {
					var result = note.body.number1 - note.body.number2;
					this.facade.sendNotification("CHAIN_RESULT", result);
				} else {
					this.facade.sendNotification("NEXT_IN_CHAIN");
				}
			}
		}, {
			COMMAND: "CHAIN_SUBTRACT"
		});
}