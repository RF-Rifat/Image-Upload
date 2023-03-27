const dragArea = document.querySelector('.container'),
    dragIcon = dragArea.querySelector('.fa-solid'),
    browseBtn = dragArea.querySelector('.btn'),
    input = dragArea.querySelector('input');

let photoStorage;
browseBtn.onclick = ()=>{
    input.click();
}
input.addEventListener("change",function(){
    photoStorage = this.files[0];
    dragArea.classList.add("container-js");
    data()
})
dragArea.addEventListener("dragover",(e)=>{
    e.preventDefault();
    dragArea.classList.add("container-js");
    dragIcon.classList.remove("fa-file-arrow-up");
    dragIcon.classList.add("fa-file-import");
})
dragArea.addEventListener("dragleave",(e)=>{
    e.preventDefault();
    dragArea.classList.remove("container-js");
    dragIcon.classList.remove("fa-file-import");
    dragIcon.classList.add("fa-file-arrow-up");
})

dragArea.addEventListener("drop",(e)=>{
    e.preventDefault();
    photoStorage = e.dataTransfer.files[0];
    data()
})

function data(){
    let fileType = photoStorage.type;
    let vailEx = ["image/jpeg","image/jpg","image/png"];
    if(vailEx.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.readAsDataURL(photoStorage);
        fileReader.onload = () =>{
            let imgURL = fileReader.result;
            let img = `<img src="${imgURL}" alt="photo">`;
            dragArea.innerHTML = img;
            dragArea.classList.remove("container-js");
            dragArea.classList.remove("container");
        } 
    }else{
        alert("This File is not valid");
        dragArea.classList.remove("container-js");
        dragIcon.classList.add("fa-file-arrow-up");
    }
}

// function data(){
//     let fileType = photoStorage.type;
//     let vailEx = ["image/jpeg","image/jpg","image/png"];
//     if(vailEx.includes(fileType)){
//         let fileReader = new FileReader();
//         fileReader.readAsDataURL(photoStorage);
//         fileReader.onload = () =>{
//             let imgURL = fileReader.result;
//             let img = `<img src="${imgURL}" alt="photo">`;
//             dragArea.innerHTML = img;
//         } 
//     }else{
//         alert("This File is not valid");
//         dragArea.classList.remove("container-js");
//         dragIcon.classList.add("fa-file-arrow-up");
//     }
// }
