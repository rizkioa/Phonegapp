$(document).ready(function(){
	var dataAkun = 'http://'+server+'/disnakerserver/lihat_data.php';
	var username = localStorage.username;
	var tampildata = 'http://'+server+'/disnakerserver/lihat_data.php';
	 $.getJSON(tampildata, { get_param: username }, function(data) {
			 $.each(data, function(index, isi) {
					 $('#tampilkanData').append(
						'<tr>'+
						'<td>'+isi.nama_perusahaan+'</td>'+
						'<td>'+'<a class="modal-trigger btn red">'+isi.status_registrasi+'</a>'+'</td>'+
						'<td>'+'<a class="modal-trigger btn" id="detail-'+isi.id_perusahaan+'">Detail</a>'+'</td>'+
						'<input id="form" name="form" value="detail-'+isi.id_perusahaan+'"type="hidden">'+
						'</tr>'
			 			);
						$('#detail-'+isi.id_perusahaan).click(function(){
							swal({
										  title: 'Detail Data',
										  type: false,
										  html: true,
											text:
											'Nomor Registrasi:<code> '+isi.nomor_registrasi+'</code><br>'+
											'Nama Perusahaan:<b> '+isi.bentur_perusahaan+'.'+isi.nama_perusahaan+'</b><br>'+
											'Alamat:<b> '+isi.alamat_perusahaan+'</b><br>'+
											'NPWP:<b> '+isi.npwp_perusahaan+'</b><br>'+
											'SIUP:<b> '+isi.siup_perusahaan+'</b><br>'+
											'SITU/HO:<b> '+isi.situ_ho_perusahaan+'</b><br>'+
											'TDP:<b> '+isi.tdp_perusahaan+'</b><br>'+
											'Email:<b> '+isi.email_perusahaan+'</b><br>'+
											'Telp:<b> '+isi.nomor_tlp_perusahaan+'</b><br>'+
											'Bidang:<b> '+isi.bidang_pekerjaan_perusahaan+'</b><br>'+
											'Direktur:<b> '+isi.direktur_perusahaan+'</b><br>'+
											'Jumlah Pekerja:<b> '+isi.jumlah_pekerja+'</b><br>'+
											'UMP:<b> '+isi.ump+'</b><br>'+
											'Status Registrasi:<b> '+isi.status_registrasi+'</b><br>',
										  showCancelButton: false

										})
										});
												});
												});
												});




                  //Rubah Status
                  // if (isi.status_registrasi == 'Y') {
                  //     document.getElementById('status_registrasi').innerHTML = '<button class="waves-effect waves-green btn-flat m-b-xs">Data Valid</button><br>';
									// 		//document.getElementById('tombol_edit').innerHTML = '<button class="btn disabled m-b-xs">Edit</button>';
                  // }if (isi.status_registrasi == 'N') {
                  //     document.getElementById('status_registrasi').innerHTML = '<button class="waves-effect waves-red btn-flat m-b-xs">Belum Verifikasi</button>';
									// 		//document.getElementById('tombol_edit').innerHTML = '<button class="btn m-b-xs">Edit</button>';
                  // }
					//Button Detail Disini


					// $('#status_registrasi').click(function(){
					// 	if (isi.status_registrasi == 'Y') {
					// 		swal({
					// 		title: "Data Valid",
					// 		type: "success",
					// 		text: 'Data Berhasil di Terima dan Tervalidasi oleh Admin Disnakertrans Prov. Lampung. Tombol Edit di Non-Aktivkan jika Data Anda sudah Valid ',
					// 		html: true
					// 					});
					// 	}if (isi.status_registrasi == 'N') {
					// 		swal({
					// 		title: "Belum Di Verifikasi",
					// 		type: "error",
					// 		text: 'Data sedang di proses oleh Admin Disnakertrans Prov. Lampung. Mohon bersabar untuk mendapatkan Info selanjutnya.',
					// 		html: true
					// 				});
					// 				};
					// 				});

					// $('#detail-'+isi.id_perusahaan).click(function(){
					// 	swal({
					// 				  title: 'Detail Data',
					// 				  type: false,
					// 				  html: true,
					// 					text:
					// 					'Nomor Registrasi:<code> '+isi.nomor_registrasi+'</code><br>'+
					// 					'Nama Perusahaan:<b> '+isi.nama_perusahaan+'</b><br>'+
					// 					'Alamat:<b> '+isi.alamat_perusahaan+'</b><br>'+
					// 					'NPWP:<b> '+isi.npwp_perusahaan+'</b><br>'+
					// 					'SIUP:<b> '+isi.siup_perusahaan+'</b><br>'+
					// 					'SITU/HO:<b> '+isi.situ_ho_perusahaan+'</b><br>'+
					// 					'TDP:<b> '+isi.tdp_perusahaan+'</b><br>'+
					// 					'PKP:<b> '+isi.pkp_perusahaan+'</b><br>'+
					// 					'Email:<b> '+isi.email_perusahaan+'</b><br>'+
					// 					'Telp:<b> '+isi.nomor_tlp_perusahaan+'</b><br>'+
					// 					'Bidang:<b> '+isi.bidang_pekerjaan_perusahaan+'</b><br>'+
					// 					'Jumlah Pekerja:<b> '+isi.jumlah_pekerja+'</b><br>'+
					// 					'UMP:<b> '+isi.ump+'</b><br>'+
					// 					'Status Registrasi:<b> '+isi.status_registrasi+'</b><br>'+
					// 					'<button id="detail_dir-'+isi.id_perusahaan+'"> Lihat Data Direktur </button>',
					// 				  showCloseButton: true,
					// 					showConfirmButton: false,
					// 				  showCancelButton: true
					//
					// 				})
					// 				});

									//
									// $('#detail_dir-'+isi.id_perusahaan).click(function(){
									// 	alert('asasd')
									// 				});

		            // $.ajax({
		            //     type: "POST",
								//     url: url_detail,
								//     data: dataString,
								//     crossDomain: true,
								//     cache: false,
		            //     success : function(data){
		            //    					swal({
								// 					  title: "DETAIL DATA",
								// 					  type: "success",
								// 					  text: data+'<br>Tap Button ini untuk Edit Data <button class="btn">Edit Data</button>',
								// 					  html: true
				        //         					})
		            //    							}
		            // 						});
		         						  // Tutup Button Details

				//Button Prosesnya Disini
				// $('#proses'+isi.no_agenda).click(function(){
				// 	swal({
				// 			  title: "Konfirmasi",
				// 			  text: "Apakah Anda Yakin ingin memproses Agenda ini?",
				// 			  type: "warning",
				// 			  showCancelButton: true,
				// 			  confirmButtonColor: "#adff2f",
				// 			  cancelButtonColor: "#b71d1d",
				// 			  confirmButtonText: "Ya, Proses Sekarang.",
				// 			  cancelButtonText: "Tidak, Kembali.",
				// 			  closeOnConfirm: false,
				// 			},
				// 			function(isConfirm){
				// 			  if (isConfirm) {
				// 			    var url_proses = '';
				// 				var IsiData = 'disposisi='+isi.no_agenda;
				// 		            $.ajax({
				// 		                type: "POST",
				// 					    url: url_proses,
				// 					    data: IsiData,
				// 					    crossDomain: true,
				// 					    cache: false,
				// 		                success : function(data){
				// 		               							swal({
				// 													  title: "DETAIL DATA",
				// 													  type: "success",
				// 													  text: data,
				// 													  html: true
				// 				                					})
				// 		               							}
				// 		            						});
				// 							  }
				// 							});
				//  		});// Tutup Button Proses
