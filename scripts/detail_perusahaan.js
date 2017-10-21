
$(document).ready(function(){
	var url="http://localhost/disnakerserver/lihat_data.php?callback=?";
		$("#login").click(function(){
			var perusahaan_id=$("#username").val();
			var dataString="username="+username+"&password="+password+"&login=";

			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				success: function(hasil){
					if(hasil=="sukses")
					{
						localStorage.login = "true";
						localStorage.username = username;
						window.location.href = "index.html";

					}
					else if(hasil=="gagal")
					{
						swal({
							title: "Gagal Login",
							type: "error",
							text: "Username atau Password Salah",
							html: true
						});
					}
					else if(hasil=="Tidak ada database")
					{
						resetForm();
						swal({
							title: "Gagal Login",
							type: "error",
							text: "Database Error",
							html: true
						});
					}
				}
			});
		}return false;
		});
    		});

				function resetForm(){
		        $('[id=username]').val('');
		        $('[id=username]').focus();
		        $('[id=password]').val('');

		    };
