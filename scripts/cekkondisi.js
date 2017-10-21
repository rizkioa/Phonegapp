
	// 
	//
  // var versi= "1.0"
  // var dataString= 'versi='+versi;
	//
	// 		$.ajax({
	// 			type: "POST",
	// 			url: "http://"+server+"/disnakerserver/cekupdate.php?versi=?",
	// 			data: dataString,
	// 			crossDomain: true,
	// 			cache: false,
	// 			success: function(hasil){
	// 				if(versi != hasil)
	// 				{
  //           swal({
	// 						title: "Update Available",
	// 						type: "error",
	// 						text: "Silahkan Update Aplikasi untuk melanjutkan",
	// 						html: true
	// 					});
	//
	// 				}
	// 				else
	// 				{
  //           '<a href=""http://"+server+"/disnakerserver/aplikasi/disnakerapp.apk">Download!</a>'
	// 				}
	// 			}
	// 		});
//---------------------------------------------------
        var url = window.location.pathname;
        var filename = url.substring(url.lastIndexOf('/') + 1);
        if (localStorage.login == "true" && filename == 'index.html') {
        		window.location.href = "admin.html";
        } else if (localStorage.login == null && filename == 'admin.html') {
        		window.location.href = "index.html";
        } else if (localStorage.login == "false" && filename != 'index.html') {
        		window.location.href = "index.html";
        };
        $('#btn_keluar').click(function(){
          localStorage.login ='false';
          localStorage.username = '';
          window.location.href = "index.html"
        });

        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            checkConnection();
        }

            function checkConnection() {
                var networkState = navigator.connection.type;

                var states = {};
                states[Connection.UNKNOWN]  = 'Unknown connection';
                states[Connection.ETHERNET] = 'Ethernet connection';
                states[Connection.WIFI]     = 'WiFi connection';
                states[Connection.CELL_2G]  = 'Cell 2G connection';
                states[Connection.CELL_3G]  = 'Cell 3G connection';
                states[Connection.CELL_4G]  = 'Cell 4G connection';
                states[Connection.CELL]     = 'Cell generic connection';
                states[Connection.NONE]     = 'No network connection';

                alert('Connection type: ' + states[networkState]);
                if (states[networkState] == 'Unknown connection' ) {
                  alert(' Koneksi Tidak Terdaftar')
                }else if(states[networkState] == 'No network connection' ){
                  alert('Tidak Ada Koneksi, Mohon Cek Internet Anda')
                }
            }
