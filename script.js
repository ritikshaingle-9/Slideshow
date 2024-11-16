const images=["./images/img-1.jpg",'./images/img-2.jpg','./images/img-3.jpg',"./images/ig-4.jpg","./images/img-5.jpg"];
        let index= 0;
        const Slide=document.getElementById('img-1');

        function next(){
         if(index <images.length-1){
            index++;
         }
         else{
            index=0;
         }
         Slide.src=images[index];
        }

        function prev(){
            if(index>0){
                index--;
            }
            else{
                index=images.length-1;
            }
        Slide.src=images[index];
        }