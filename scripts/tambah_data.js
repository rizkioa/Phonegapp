
$(document).ready(function(){
  $("#btn_input_data").click(function(){
  var url="http://"+server+"/disnakerserver/input_data.php?callback=";
  var username              = $("#username").val();
  var nomor_registrasi      = $("#nomor_registrasi").val();
  var nama_perusahaan       = $("#nama_perusahaan").val();
  var waktu_input           = $("#waktu_input").val();
  var alamat_perusahaan     = $("#alamat_perusahaan").val();
  var bentur_perusahaan     = $("#bentur_perusahaan").val();
  var npwp_perusahaan       = $("#npwp_perusahaan").val();
  var siup_perusahaan       = $("#siup_perusahaan").val();
  var situ_ho_perusahaan    = $("#situ_ho_perusahaan").val();
  var tdp_perusahaan        = $("#tdp_perusahaan").val();
  var bank_perusahaan       = $("#bank_perusahaan").val();
  var nomor_tlp_perusahaan  = $("#nomor_tlp_perusahaan").val();
  var bidang_pekerjaan_perusahaan = $("#bidang_pekerjaan_perusahaan").val();
  var jumlah_pekerja        = $("#jumlah_pekerja").val();
  var ump                   = $("#ump").val();
  var direktur_perusahaan       = $("#direktur_perusahaan").val();
  var nomor_telp_direktur_perusahaan   = $("#nomor_telp_direktur_perusahaan").val();

    var dataString = "nomor_registrasi="+nomor_registrasi+"&waktu_input="+waktu_input+"&username="+username+"&nama_perusahaan="+nama_perusahaan+"&"+"&bentur_perusahaan="+bentur_perusahaan+"&alamat_perusahaan="+alamat_perusahaan+"&npwp_perusahaan="+npwp_perusahaan+"&siup_perusahaan="+siup_perusahaan+"&situ_ho_perusahaan="+situ_ho_perusahaan+"&tdp_perusahaan="+tdp_perusahaan+"&bank_perusahaan="+bank_perusahaan+"&nomor_tlp_perusahaan="+nomor_tlp_perusahaan+"&bidang_pekerjaan_perusahaan="+bidang_pekerjaan_perusahaan+"&jumlah_pekerja="+jumlah_pekerja+"&ump="+ump+"&direktur_perusahaan="+direktur_perusahaan+"&nomor_telp_direktur_perusahaan="+nomor_telp_direktur_perusahaan;
    // Cek Kondisi Nomor Registratsi

//Cek Kondisi Form

  // if(document.getElementById('checkbox').checked == false) = alertCheck();

  if(nama_perusahaan != '' && bentur_perusahaan != null && alamat_perusahaan != '' && npwp_perusahaan != '' && siup_perusahaan != '' && situ_ho_perusahaan != '' && null != '' && bank_perusahaan != null && nomor_tlp_perusahaan != '' && bidang_pekerjaan_perusahaan!= ''  && jumlah_pekerja != '' && ump != '' && direktur_perusahaan != '' && nomor_telp_direktur_perusahaan != '' ){

    $.ajax({
      type: "POST",
      url: url,
      data: dataString,
      beforeSend: function(){ $("#data_perusahaan_input").val('Connecting...', 10000);},
      success: function(hasil){
        if(hasil=='sukses'){
        swal({
            title: "Berhasil Menambahkan Data",
            type: "success",
            text: "Berhasil Menyimpan Data",
            html: true
          });
          setTimeout(function() {
            window.location.href = "perusahaan.html"; //will redirect to your blog page (an ex: blog.html)
          }, 3000)
        }
        else if(hasil=='nomor sudah dipakai'){
        swal({
            title: "ERROR DATA BINDING",
            type: "warning",
            text: "Anda Harus Kembali ke Halaman Perusahaan",
            html: true
          });
          setTimeout(function() {
            window.location.href = "perusahaan.html"; //will redirect to your blog page (an ex: blog.html)
          }, 3000)
        }
        }
    });

  }else{
    swal({
        title: "Seluruh Data Belum Di Input",
        type: "error",
        text: "Silahkan Cek Kembali Data Anda.",
        html: true
      });

  }



return false;
});
});
