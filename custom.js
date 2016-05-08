$(document).ready(function() {

	/*
		https://github.com/bjornd/jvectormap-examples/tree/master/us-unemployment
	*/


    /**********************Modify This*********************/
    //this is the base URL of all the state pages less the path.  So a state page may look like www.something.com/texas where "/texas" is incorporated using the "stateData" object below. 
    var baseURL = "http://localhost/Taylor";


    /**********************Modify This*********************/
    //Set all your data for different states here.
    //"path" will be the path to the particular state of interest once clicked on.
    //"numCommunities" will be the number of communities in that particular state.  
	var stateData = {
                        "US-VA": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"     
                        },
                        "US-PA": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-TN": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-WV": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-NV": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-TX": {
                            "path": "/texas",
                            "numCommunities": "10",
                            "stateName":"Texas"
                        },
                        "US-NH": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-NY": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-HI": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-VT": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-NM": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-NC": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-ND": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-NE": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-LA": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-SD": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-DC": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-DE": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-FL": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-CT": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-WA": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-KS": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-WI": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-OR": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-KY": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-ME": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-OH": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-OK": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-ID": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-WY": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-UT": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-IN": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-IL": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-AK": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-NJ": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-CO": {
                            "path": "/colorado",
                            "numCommunities": "5",
                            "stateName":"Colorado"
                        },
                        "US-MD": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-MA": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-AL": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-MO": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-MN": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-CA": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-IA": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-MI": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-GA": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-AZ": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-MT": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-MS": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-SC": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-RI": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        },
                        "US-AR": {
                            "path": "/texas",
                            "numCommunities": "5",
                            "stateName":"Texas"
                        }
                    };



    /*************************************
    **   Handle dropdown functionality  **
    **************************************/

    //function needs to have available the state data object. 
    function createDropdownHTML() {
        var html = "<option>Select State</option>";

        for( var state in stateData ) {

            var stateInfo = stateData[state];
            html += '<option value = "' + baseURL + stateInfo["path"] + '">';
            html +=      stateInfo["stateName"];
            html += '</option>';
        }
        console.log(html);
        $('#select-state').html( html );
    }

    //function to send user to the appropriate state page on dropdown click.  Takes the particular option element clicked as a parameter. 
    function sendUserToStatePageOnSelectClick( element ) {
        var urlToSendUserTo = element.attr('data-state-url');
        window.location.href = urlToSendUserTo;
    }

    //on a state option click - handle sending user to appropriate state page. 
    $(document).on('change', '#select-state', function() {
      
        var stateSelectedURL = $(this).val();
          alert(stateSelectedURL);
        window.location.href = stateSelectedURL;        
    });




    /*************************************
    **     Handle Map functionality     **
    **************************************/


    /*
    *  Function to send the user to the state of interest URL.  Takes the state code that was clicked and also the state data to get the path to the state.  
    */

    function sendUserToStateURL( stateCode, data ) {
        window.location.href = baseURL + stateData[stateCode].path;
    }//end sendUserToState





	$('#map').vectorMap({
		map: 'us_aea',		
		backgroundColor: '#fff',
		onRegionClick: function(event, code) 
        {	
            sendUserToStateURL( code, stateData );
        },
        regionStyle: {
	        initial: {
	          fill: '#128da7'
	        },
	        hover: {
	            fill: "#A0D1DC"
	        }
	    },
	    onRegionTipShow: function(event, label, code){
	        label.html(
	          '<b>'+label.html()+'</b></br>'+
	          '<b>Unemployment rate: </b>'+ stateData[code].numCommunities
	        );
      	}

	});









    /*************************************
    **        Page Load Functions       **
    **************************************/
    createDropdownHTML();


});


/*

<script>
        $(function(){
            $('#map').vectorMap({
                map: 'world_en',
                color: '#4A7E2A',
                hoverColor: '#0066FF',
                hoverOpacity: 0.5,
                backgroundColor: '#fff',
                regionsSelectable: true,
                onRegionClick: function(event, code) 
                {
                    if (code === 'ID') {
                        window.location = 'index.php?id=Ireland'
                    }
                    else if (code === 'RUSSIA') {
                        window.location = 'index.php?id=Russia'
                    }
                    else if (code === 'rp') {
                        window.location = 'index.php?id=4'
                    }
                }
            });
        });

    </script>
*/
