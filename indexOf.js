function myIndexOf(haystack, needle){

    if(needle.length > haystack.length) return -1;

    for(let i = 0; i <= haystack.length - needle.length; i++){

        let find = true;

        for(let j = 0; j< needle.length; j++){
            if(haystack[i+j] !== needle[j]){
                find = false;
                break;
            }
        }

        if(find){
            return i;
        }

    }

    return -1;
}


