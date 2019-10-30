sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller,MessageToast) {
	"use strict";

	return Controller.extend("ButtonExample.Button.controller.View1", {
		
  onPress: function (evt) {
    jQuery.sap.require("sap.m.MessageToast");
    sap.m.MessageToast.show(evt.getSource().getText());
  },
		onInit: function () {

		}
	});
});