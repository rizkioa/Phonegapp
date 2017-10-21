
$(document).ready(function(){
  $("#daftar").click(function(){
	var dates = new Date;
	var detik = dates.getSeconds();
	var jam  = dates.getHours();
	var tanggal  = dates.getDate();
	var bulan  = dates.getMonth();

  var username       = $("#email").val();
  var nick_name      = $("#nick_name").val();
  var email       	 = $("#email").val();
  var password       = $("#password").val();
	var password2       = $("#password2").val();
  var nomor_telp     = $("#nomor_telp").val();
  var perusahaan    = $("#email").val();
	if (nick_name == 0 || nick_name.length < 5) {
		swal({
				title: "Nama Error",
				type: "error",
				text: "Nama Harus Terisi atau Setidaknya memiliki 5 Karakter",
				html: true
			});
	}else if(email == 0 || email.length < 5) {
		swal({
				title: "Email Error",
				type: "error",
				text: "Email Harus Terisi dengan Benar",
				html: true
			});
	}else if(password == 0 || password.length < 5) {
		swal({
				title: "Password Error",
				type: "error",
				text: "Password Harus Memiliki 5 Karakter",
				html: true
			});
	}else if(password !== password2) {
		swal({
				title: "Password Error",
				type: "error",
				text: "Password Tidak Sama. Mohon Ulangi",
				html: true
			});
	}else if( nomor_telp == 0 || nomor_telp.length < 5) {
		swal({
				title: "Nomor Telepon Error",
				type: "error",
				text: "Isi nomor Telepon Dengan Benar. Hal ini di perlukan Untuk Verifikasi Akun.",
				html: true
			});
	}else {
		var dataString = "nick_name="+nick_name+"&email="+email+"&password="+password+"&nomor_telp="+nomor_telp+"&username="+username+"&perusahaan="+perusahaan;
		var url = 'http://'+server+'/disnakerserver/daftar.php?callback='
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
						 text: 'Cek Kembali Inputan Anda.',
						 html: true
								 });
				}
				else if(data == "sukses")
				{

					swal({
						 title: "Berhasil",
						 type: "success",
						 text: 'Berhasil Mendaftarkan Akun. Mohon Tunggu Sampai Akun di Aktivasi Oleh Admin.',
						 html: true
								 });
						 setTimeout(function() {
							 window.location.href = "index.html"; //Halaman Regidrek
						 }, 4000)
				}
				else
				{
					swal({
						 title: "Error",
						 type: "error",
						 text: 'Email Sudah Pernah Terdaftar. Mohon Daftarkan Akun Anda dengan Email Lain',
						 html: true
								 });
							 }
				}
		});
	}

return false;
});
});
