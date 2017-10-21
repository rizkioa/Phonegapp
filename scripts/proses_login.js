
$(document).ready(function(){
    function resetForm(){
		        $('[id=username]').val('');
		        $('[id=username]').focus();
		        $('[id=password]').val('');
		          };
    $("#lupapassword").click(function(){
      swal({
        title: "Lupa Password?",
        type: "error",
        text: "Hubungi Administrator di Nomor Berikut: <br><strorng>0821 8200 8072 - Ade</strorng>",
        html: true
      });
    })
	var url="http://"+server+"/disnakerserver/auth.php?callback=?";
		$("#login").click(function(){
			var username=$("#username").val();
			var password=$("#password").val();
			var dataString="username="+username+"&password="+password+"&login=";
			if($.trim(username).length<1 || $.trim(password).length<1){
				resetForm();
				swal({
					title: "Gagal Login",
					type: "error",
					text: "Username atau Password masih Kosong",
					html: true
				});
			}

			if($.trim(username).length>0 & $.trim(password).length>0)
		{
			$.ajax({
				type: "POST",
				url: url,
				data: dataString,
				crossDomain: true,
				cache: false,
				success: function(hasil){
					if(hasil=="sukses")
					{
            document.cookie = "username="+username;
						localStorage.login = "true";
						localStorage.username = username;
						window.location.href = "admin.html";

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
          else if(hasil=="na")
          {
						swal({
							title: "Gagal Login",
							type: "warning",
							text: "Akun Anda belum di Terima / Aktivasi. Segera Hubungi Admin untuk mempercepat Proses Aktivasi. Terimakasih",
							html: true
						});
					}
					else if(hasil=="Tidak ada database")
					{

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
