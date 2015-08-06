/**
* src/command/InitModelsCommand.js 
* 06-08-2015 09:46
* 
* @author 
* @email 
* 
*/

module.exports = function(include, puremvc) {
		
	// include("...");

	/**
	 * @class com.domain.command.InitModelsCommand',
	 */
	puremvc.define(
		// CLASS INFO
		{
			name: 'com.domain.command.InitModelsCommand',
			parent: puremvc.SimpleCommand
		},
		// INSTANCE MEMBERS
		{
			execute: function() {
				//console.log("exec com.domain.command.InitModelsCommand");
			}
		});
}