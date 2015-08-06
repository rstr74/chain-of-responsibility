/**
* TestChainOfResponsibilityCommand.js 
* 06-08-2015 10:13
* 
* @author 
* @email 
* 
*/

module.exports = function(include, puremvc) {
		
	include("mediator/ChainMediator");
	include("command/AddCommand");
	include("command/SubtractCommand");
	include("command/MultiplyCommand");
	include("command/DivideCommand");

	/**
	 * @class com.domain.command.TestChainOfResponsibilityCommand
	 */
	puremvc.define(
		// CLASS INFO
		{
			name: 'com.domain.command.TestChainOfResponsibilityCommand',
			parent: puremvc.SimpleCommand
		},
		// INSTANCE MEMBERS
		{
			execute: function() {
				var chainOr = new com.domain.mediator.ChainMediator();
				this.facade.registerMediator(chainOr);

				chainOr.setData({
					number1:101,
					number2:40,
					calcWanted:"ADD"
				});


				chainOr.setChain([
					com.domain.command.AddCommand,
					com.domain.command.SubtractCommand,
					com.domain.command.DivideCommand,
					com.domain.command.MultiplyCommand
				]);

				this.facade.sendNotification("NEXT_IN_CHAIN");
			}
		});
}