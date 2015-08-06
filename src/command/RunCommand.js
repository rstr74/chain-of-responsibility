/**
* src/command/RunCommand.js 
* 06-08-2015 09:46
* 
* @author 
* @email 
* 
*/

module.exports = function(include, puremvc) {
		
	include("command/TestChainOfResponsibilityCommand");

	/**
	 * @class com.domain.command.RunCommand
	 */
	puremvc.define(
		// CLASS INFO
		{
			name: 'com.domain.command.RunCommand',
			parent: puremvc.SimpleCommand
		},
		// INSTANCE MEMBERS
		{
			execute: function() {
				// console.log("exec com.domain.command.RunCommand");
				// console.log(com.domain.AppConstants.SOME_CONSTANT);
				this.facade.registerCommand("EXEC_CHAIN",com.domain.command.TestChainOfResponsibilityCommand);
				this.facade.sendNotification("EXEC_CHAIN");
			}
		});
}