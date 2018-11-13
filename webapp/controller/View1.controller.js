sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, JSONModel, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("report.controller.View1", {
		
			onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
		
			onFilterInvoices : function (oEvent) {
		
					// build filter array
					var aFilter = [];
					var sQuery = oEvent.getParameter("query");
					//var sQuery = oEvent.getParameter("{/recipient/name}");
					if (sQuery) {
						aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
					}
		
					// filter binding
					var oList = this.byId("invoiceList");
					var oBinding = oList.getBinding("items");
					oBinding.filter(aFilter);
				}

	});
});