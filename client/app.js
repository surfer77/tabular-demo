//client only code
Template.main.events({
	"keyup #sel1": function() {
		 dt = $("table").DataTable();
		var indexOfColumnToSearch = 0;
		dt.search($("#sel1").val()).draw();

	},

 	"keyup #sel2": function() {
 		 dt = $("table").DataTable();
		var indexOfColumnToSearch = 1;
		dt.search($("#sel2").val()).draw();


 	}

});


Template.main.onRendered(function () {
	 $('#example').DataTable( {
        initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.footer()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
 
                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );
 
                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            } );
        }
    }) ;
});