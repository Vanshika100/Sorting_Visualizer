async function selection(){
    console.log('In selection sort');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        let min_index = i;

        ele[i].style.background = 'blue';
        for(let j = i+1; j < ele.length; j++){

            ele[j].style.background = 'yellow';

            await waitfor(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                if(min_index !== i){

                    ele[min_index].style.background = 'rgb(255, 0, 162)';
                }
                min_index = j;
                ele[j].style.background = 'white';

            } 
            else{

                ele[j].style.background = 'rgb(255, 0, 162)';
            }   
        }
        await waitfor(delay);
        if(min_index!=i){
            swap(ele[min_index], ele[i]);
        }

        ele[min_index].style.background = 'rgb(255, 0, 162)';

        ele[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});