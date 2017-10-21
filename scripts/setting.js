$(document).ready(function(){
	var peraturan = 'http://'+server+'/disnakerserver/peraturan.php';
	$.getJSON(peraturan, { get_param: 'value' }, function(data) {
			$.each(data, function(index, isi) {
				$('#peraturan_data').append(
					'<li>'+
						 '<div class="collapsible-header" id="judul_data" class="green">'+isi.judul+'</div>'+
						 '<div class="collapsible-body"><p id="isi Data">'+isi.isi_peraturan+'</p></div>'+
				 '</li>'

				);
				});
				});

	var dataAkun = 'http://'+server+'/disnakerserver/akun.php';
	 $.getJSON(dataAkun, { get_param: 'value' }, function(data) {
			 $.each(data, function(index, isi) {

				 	document.getElementById('nama_akun').innerHTML = isi.nick_name;
					document.getElementById('nama_lengkap').innerHTML = isi.nick_name;
					document.getElementById('nomor_telepon').innerHTML = isi.nomor_telepon;
					document.getElementById('email').innerHTML = isi.email;
					document.getElementById('username').innerHTML = isi.username;

				 });
				 });



				 $("#btn_rubah").click(function(){
					 var url="http://"+server+"/disnakerserver/ganti_password.php?callback=?";
				   var username = localStorage.username;
				   var old_password = $("#old_password").val();
				   var new_password = $("#new_password").val();
				   var dataString="old_password="+old_password+"&new_password="+new_password+"&username="+username;
				   if(new_password.length < 5) {
						swal({
							 title: "Error",
							 type: "error",
							 text: 'Password harus Terdiri dari 5 karakter atau Lebih',
							 html: true

				   });
					 return (false);
				 } else if($.trim(old_password) == 0 || $.trim(new_password) == 0) {
					 swal({
							title: "Error",
							type: "error",
							text: 'Password Lama Atau Password Baru Masih Kosong',
							html: true
									});
				 } else{
								 $.ajax({
									 type: "POST",
									 url: url,
									 data: dataString,
									 crossDomain: true,
									 cache: false,
									 success: function(data){
										 if(data=="data salah")
										 {
											 swal({
													title: "Error",
													type: "error",
													text: 'Password lama Salah.',
													html: true
															});
										 }
										 else if(data == "sukses")
										 {

											 swal({
													title: "Berhasil",
													type: "success",
													text: 'Berhasil Mengganti Password',
													html: true
															});
													setTimeout(function() {
														window.location.href = "index.html"; //Halaman Regidrek
													}, 2000)
										 }
										 else
										 {
											 swal({
													title: "Error",
													type: "error",
													text: 'Data Anda Salah, Silahkan Logout lalu Login Kembali.',
													html: true
															});
														}
										 }
								 });
				 }
				 return false;
				 });

				//  $("#btn_simpan_data").click(function(){
				// 	 var url="http://"+server+"/disnakerserver/ganti_password.php?callback=?";
				//    var username = localStorage.username;
				//    var namaLengkap = $("#namaLengkap").val();
				//    var email = $("#NomorTelepon").val();
				// 	 var nomorTelp = $("#Email").val();
				//    var dataString="nick_name="+namaLengkap+"&nomor_telepon="+nomorTelp+"&email="+email;
				//    if($.trim(namaLengkap) != 0 || $.trim(email)!= 0 || $.trim(nomorTelp)!= 0 ){
				//    $.ajax({
				//      type: "POST",
				//      url: url,
				//      data: dataString,
				//      crossDomain: true,
				//      cache: false,
				//      success: function(data){
				//        if(data=="data salah")
				//        {
				// 				 swal({
			 // 							title: "Error",
			 // 							type: "error",
			 // 							text: 'Password lama Salah.',
			 // 							html: true
			 // 									});
				//        }
				//        else if(data == "sukses")
				//        {
				 //
				// 				 swal({
			 // 							title: "Berhasil",
			 // 							type: "success",
			 // 							text: 'Berhasil Mengganti Password',
			 // 							html: true
			 // 									});
				 //
				 //
				//        }
				//        else
				//        {
				//          alert("Terdapat Kesalahan. Segera Hubungi Admin.");
				//        }
				//      }
				//    });
				//  } else if($.trim(old_password) == 0 || $.trim(new_password) == 0) {
				//  	alert('username dan Password Masih Kosong')
				//  }
				//  return false;
				//  });
				 });
