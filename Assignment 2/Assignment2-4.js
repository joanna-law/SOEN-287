function a2q4(Names) {
    var goodNames = 0;
    for (var i = 0; i < Names.length + 1; i++) {
      
        if((String)(Names[i]).search(/(?=(^((pa)|(po))\w*))(?=^[^u]*$)/gm) != -1){
            goodNames++;
        }
    }
    document.write('The number of words starting with "pa", "po" or not containing the letter "u" is: ' + goodNames);
}
