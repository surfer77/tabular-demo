//client only code
Template.main.events({
	"change #sel1": function() {
		 dt = $("table").DataTable();
 		var indexOfColumnToSearch = 0;
		dt.columns(indexOfColumnToSearch).search($("#sel1").val()).draw();

	},

 	"change #sel2": function() {
 		 dt = $("table").DataTable();
		var indexOfColumnToSearch = 1;
		dt.columns(indexOfColumnToSearch).search($("#sel2").val()).draw();


 	},
 		"change #sel3": function() {
 		 dt = $("table").DataTable();
		var indexOfColumnToSearch = 2;
		dt.columns(indexOfColumnToSearch).search($("#sel3").val()).draw();


 	},

});


Template.main.onRendered(function () {
	 $('#example').DataTable(
	  {
	  	 "searching": true,
    }) ;
});