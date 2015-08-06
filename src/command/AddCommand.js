/**
 * AddCommand.js 
 * 06-08-2015 10:17
 * 
 * @author 
 * @email 
 * 
 */

module.exports = function(include, puremvc) {

	// include("...");

	/**
	 * @class com.domain.command.AddCommand
	 */
	puremvc.define(
		// CLASS INFO
		{
			name: 'com.domain.command.AddCommand',
			parent: puremvc.SimpleCommand
		},
		// INSTANCE MEMBERS
		{
			execute: function(note) {
				if (note.body.calcWanted == "ADD") {
					if (note.body.number1 > 100) {
						this.facade.sendNotification("CHAIN_CANCELED","number1 is > 100 has to be smaller number!");
					} else {
						var result = note.body.number1 + note.body.number2;
						this.facade.sendNotification("CHAIN_RESULT", result);
					}
				} else {
					this.facade.sendNotification("NEXT_IN_CHAIN");
				}
			}
		}, {
			COMMAND: "CHAIN_ADD"
		});
}