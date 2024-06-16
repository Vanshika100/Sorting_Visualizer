async function partitionLomuto(ele, l, r){
    console.log('In partition');
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'black';
    for(let j = l; j <= r - 1; j++){
        // color current element
        ele[j].style.background = 'yellow';
        
        await waitfor(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            i++;
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'orange';
            if(i != j) ele[j].style.background = 'orange';
            
            await waitfor(delay);
        }
        else{
            // color if not less than pivot
            ele[j].style.background = 'white';
        }
    }
    i++; 
    
    await waitfor(delay);
    swap(ele[i], ele[r]); 
    console.log(`i = ${i}`);
    // color
    ele[r].style.background = 'white';
    ele[i].style.background = 'green';

    await waitfor(delay);
    
    // color
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'rgb(255, 0, 162)';
    }

    return i;
}

async function quickSort(ele, l, r){
    console.log('In quickSort', `l=${l} r=${r}`);
    if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});