$(document).ready(function(){
	var dataAkun = 'http://'+server+'/disnakerserver/akun.php';
	 $.getJSON(dataAkun, { get_param: 'value' }, function(data) {
			 $.each(data, function(index, isi) {

				 	document.getElementById('nama_akun').innerHTML = isi.nick_name;
					
					document.getElementById('jabatan_akun').innerHTML = isi.user_type;
				 });
				 });
				 });
