sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("fragmentdDemo.controller.View1", {
		
		onValueHelpRequested: function (oEvent) {
			
			/*	var select = oEvent.getParameters("selectedItem");
				var context = selectedItem.getBindingContext();
				var value = context.getProperty()*/
			var id = oEvent.getParameters().id.split('--')[2];
        var oDialog = sap.ui.xmlfragment("FragmentAssignment.fragmentdDemo.view.dialog",this.getView().getController());
        
        this.getView().addDependent(oDialog);
         oDialog.open();
        if(id == "input1"){
        /*	// create a filter for the binding
			this._valueHelpDialog.getBinding("items").filter([new Filter(
				"country",
				sap.ui.model.FilterOperator.Contains, sInputValue
			)]);

			// open value help dialog filtered by the input value
			this._valueHelpDialog.open(sInputValue);
		},
*/
            oDialog.bindAggregation("items",{
         	path:"Country>/country",
         	template : new sap.m.StandardListItem({
         		title : "{Country>countryname}",
         	
         	})
         });
        	
        }
        else{
        	
        	  oDialog.bindAggregation("items",{
         	path:"City>/city",
         	template : new sap.m.StandardListItem({
         		title : "{City>cityname}",
         
         	})
         });
        }
        

		} 
	});
});