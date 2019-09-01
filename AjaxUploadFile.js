$("#btnUploadHinh").click(function(){
            
            var data = new FormData();
            jQuery.each(jQuery('#fileAvatar')[0].files, function(i, file) {
                console.log('file-'+i);
                data.append('file-'+i, file);
            });

            jQuery.ajax({
                url: './xuly',
                data: data,
                cache: false,
                contentType: false,
                processData: false,
                method: 'POST',
                type: 'POST', // For jQuery < 1.9
                success: function(data){
                    if(data.kq==1){
                        $("#imgAvatar").attr("src","upload/" + data.file);
                        
                    }else{
                        alert("Upload fail!");
                    }
                }
            });

        });