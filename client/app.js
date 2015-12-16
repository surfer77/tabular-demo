//client only code
Template.main.events({
	"change #sel1": function() {
		var dt = $("table").DataTable();
		var indexOfColumnToSearch = 0;
		dt.column(indexOfColumnToSearch).search($("#sel1").val()).draw();

	},

 	"change #sel2": function() {
 		var dt = $("table").DataTable();
		var indexOfColumnToSearch = 1;
		dt.column(indexOfColumnToSearch).search($("#sel2").val()).draw();


 	}

});