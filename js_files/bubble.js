async function bubble(){
    console.log('in bubbleSort');
    const ele = document.querySelectorAll(".bar");
    for(let i =0; i<ele.length-1; i++){
        for(let j = 0; j < ele.length-i-1; j++){
            ele[j].style.background = 'yellow';
            ele[j+1].style.background = 'yellow';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                await waitfor(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'rgb(255, 0, 162)';
            ele[j+1].style.background = 'rgb(255, 0, 162)';
        }
        ele[ele.length-1-i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
