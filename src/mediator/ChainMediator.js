/**
* ChainMediator.js 
* 06-08-2015 10:19
* 
* @author 
* @email 
* 
*/

module.exports = function(include, puremvc) {
/**
 * @class com.domain.mediator.ChainMediator
 * @extends puremvc.Mediator
 *
 */
puremvc.define(
	// CLASS INFO
	{
		name: "com.domain.mediator.ChainMediator",
		parent: puremvc.Mediator
	},

	// INSTANCE MEMBERS
	{
		/** @override */
		listNotificationInterests: function() {
			return ["NEXT_IN_CHAIN","CHAIN_RESULT","CHAIN_DID_NOT_MATCH_REQUEST","CHAIN_CANCELED"]
		},
		/** @override */
		handleNotification: function(note) {
			switch (note.getName()) {
				case "CHAIN_DID_NOT_MATCH_REQUEST":
					console.log("request did not match");
				break;
				case "CHAIN_CANCELED":
					console.log("action is canceled: "+(note.body||""));
				break;
				case "CHAIN_RESULT":
					console.log(note.body);
				break;
				case "NEXT_IN_CHAIN":
					this.next();
				break;
			}
		},
		/** @override */
		onRegister: function() {
			this.chain = [];
			this.chainCommands = [];
			this.chainPointer = -1;
			this.data = null;
		},
		/**
		 * @method init
		 */
		setData: function(data) {
			this.data = data;
		},
		getData: function(data) {
			return this.data;
		},
		setChain:function(chain) {
			this.chain = chain;
			for(var part in chain){
				this.chainCommands[part]=chain[part].COMMAND;
				this.facade.registerCommand(chain[part].COMMAND,chain[part]);
			}
		},
		getChain:function() {
			return this.chain;
		},
		next:function() {
			if(this.chainPointer < this.chain.length - 1) {
				this.chainPointer++;
				this.facade.sendNotification(this.chainCommands[this.chainPointer],this.data);
			} else {
				this.facade.sendNotification("CHAIN_DID_NOT_MATCH_REQUEST");
			}
			
		},
		/** @override */
		onRemove: function() {
			
		}
	},
	// STATIC MEMBERS
	{
		/**
		 * @static
		 * @type {string}
		 */
		NAME: 'com.domain.mediator.ChainMediator'
	});
}