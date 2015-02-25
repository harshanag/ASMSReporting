//HTML body

	var northwindEmployees = [
		{ "ID": 1, "Name": "Davolio, Nancy", "Title": "Sales Representative", "ImageUrl": "../../images/samples/nw/employees/1.png", "Phone": "(206) 555-9857", "PhoneUrl": "tel:(206) 555-9857", "BirthDate": "\/Date(480808800000)\/", "HireDate": "\/Date(1224795600000)\/", "Country": "USA", "Languages": [{ name: "English" }, { name: "Russian" }] },
		{ "ID": 2, "Name": "Fuller, Andrew", "Title": "Vice President, Sales", "ImageUrl": "../../images/samples/nw/employees/2.png", "Phone": "(206) 555-9482", "PhoneUrl": "tel:(206) 555-9482", "BirthDate": "\/Date(433458000000)\/", "HireDate": "\/Date(1269640800000)\/", "Country": "USA", "Languages": [{ name: "English" }, { name: "German" }] },
		{ "ID": 3, "Name": "Leverling, Janet", "Title": "Sales Representative", "ImageUrl": "../../images/samples/nw/employees/3.png", "Phone": "(206) 555-3412", "PhoneUrl": "tel:(206) 555-3412", "BirthDate": "\/Date(268088400000)\/", "HireDate": "\/Date(1318453200000)\/", "Country": "USA", "Languages": [{ name: "English" }] },
		{ "ID": 4, "Name": "Peacock, Margaret", "Title": "Sales Representative", "ImageUrl": "../../images/samples/nw/employees/4.png", "Phone": "(206) 555-8122", "PhoneUrl": "tel:(206) 555-8122", "BirthDate": "\/Date(377388000000)\/", "HireDate": "\/Date(1171404000000)\/", "Country": "USA", "Languages": [{ name: "English" }, { name: "Spanish" }] },
		{ "ID": 5, "Name": "Buchanan, Steven", "Title": "Sales Manager", "ImageUrl": "../../images/samples/nw/employees/5.png", "Phone": "(71) 555-4848", "PhoneUrl": "tel:(71) 555-4848", "BirthDate": "\/Date(-110084400000)\/", "HireDate": "\/Date(955573200000)\/", "Country": "UK", "Languages": [{ name: "English" }, { name: "Italian" }] },
		{ "ID": 6, "Name": "Suyama, Michael", "Title": "Sales Representative", "ImageUrl": "../../images/samples/nw/employees/6.png", "Phone": "(71) 555-7773", "PhoneUrl": "tel:(71) 555-7773", "BirthDate": "\/Date(44744400000)\/", "HireDate": "\/Date(1125090000000)\/", "Country": "UK", "Languages": [{ name: "English" }, { name: "Portuguese" }] },
		{ "ID": 7, "Name": "King, Robert", "Title": "Sales Representative", "ImageUrl": "../../images/samples/nw/employees/7.png", "Phone": "(71) 555-5598", "PhoneUrl": "tel:(71) 555-5598", "BirthDate": "\/Date(-213760800000)\/", "HireDate": "\/Date(907794000000)\/", "Country": "UK", "Languages": [{ name: "English" }, { name: "French" }, { name: "Spanish" }] },
		{ "ID": 8, "Name": "Callahan, Laura", "Title": "Inside Sales Coordinator", "ImageUrl": "../../images/samples/nw/employees/8.png", "Phone": "(206) 555-1189", "PhoneUrl": "tel:(206) 555-1189", "BirthDate": "\/Date(318828800000)\/", "HireDate": "\/Date(962825600000)\/", "Country": "USA", "Languages": [ { name: "English" }, { name: "Mandarin" }] },
		{ "ID": 9, "Name": "Dodsworth, Anne", "Title": "Sales Representative", "ImageUrl": "../../images/samples/nw/employees/9.png", "Phone": "(71) 555-4444", "PhoneUrl": "tel:(71) 555-4444", "BirthDate": "\/Date(444952800000)\/", "HireDate": "\/Date(1246395600000)\/", "Country": "UK", "Languages": [{ name: "English" }, { name: "Japanese" }] }
	];
	
	debugger;
	
	$(function () {
		createCellSelectionGrid();
		createRowSelectionGrid();
	});

	function createCellSelectionGrid() {
		$("#cellSelectionGrid").igGrid({
			width: "100%",
			autoGenerateColumns: false,
			dataSource: northwindEmployees,
			responseDataKey: "results",
			dataSourceType: "json",
			columns: [
				{ headerText: "Employee ID", key: "ID", dataType: "number", width: "120px" },
				{ headerText: "Name", key: "Name", dataType: "string" },
				{ headerText: "Title", key: "Title", dataType: "string"},
				{ headerText: "Phone", key: "Phone", dataType: "string" }
			],
			features: [
				{
					name: 'Responsive',
					enableVerticalRendering: false,
					columnSettings: [
						{
							columnKey: 'ID',
							classes: 'ui-hidden-phone'
						}
					]
				},
				{
					name: "Selection",
					mode: "cell",
					multipleSelection: false,
					touchDragSelect: false, // this is true by default
					multipleCellSelectOnClick: false
				}
			]
		});
	}

	function createRowSelectionGrid() {
		$("#rowSelectionGrid").igGrid({
			width: "100%",
			autoGenerateColumns: false,
			dataSource: northwindEmployees,
			responseDataKey: "results",
			dataSourceType: "json",
			columns: [
				{ headerText: "Employee ID", key: "ID", dataType: "number", width: "120px" },
				{ headerText: "Name", key: "Name", dataType: "string"},
				{ headerText: "Title", key: "Title", dataType: "string" },
				{ headerText: "Phone", key: "Phone", dataType: "string" }
			],
			features: [
				{
					name: 'Responsive',
					enableVerticalRendering: false,
					columnSettings: [
						{
							columnKey: 'ID',
							classes: 'ui-hidden-phone'
						}
					]
				},
				{
					name: "Selection",
					mode: 'row',
					multipleSelection: true
				}
			]
		});
	}
