function change(id,element){
    document.getElementById(id).style.display='block';
    switch (id) {
        case 'vung1':
            document.getElementById('vung2').style.display='none';
            break;
        case 'vung2':
            document.getElementById('vung1').style.display='none';  
            break;
    }
}

