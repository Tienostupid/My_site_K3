/* 1. Hàm upDate: Chạy khi chuột di vào ảnh nhỏ */
function upDate(previewPic) {
    /* a) Kiểm tra xem sự kiện có kích hoạt không */
    console.log("Sự kiện mouseover đã kích hoạt!");
    
    /* b) In ra thông tin của ảnh đang được trỏ vào */
    console.log("Alt text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);
  
    /* c) Lấy phần tử div có id="image" để chuẩn bị sửa đổi */
    var imageDiv = document.getElementById('image');
  
    /* d) Thay đổi nội dung chữ của div thành thuộc tính alt của ảnh */
    imageDiv.innerHTML = previewPic.alt;
  
    /* e) Thay đổi ảnh nền của div thành đường dẫn src của ảnh */
    /* Lưu ý cú pháp: url(' đường_dẫn ') */
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* 2. Hàm unDo: Chạy khi chuột rời khỏi ảnh nhỏ */
function unDo() {
    /* a) Lấy phần tử div có id="image" */
    var imageDiv = document.getElementById('image');
  
    /* b) Cập nhật ảnh nền về rỗng (theo yêu cầu đề bài) */
    imageDiv.style.backgroundImage = "url('')";
  
    /* c) Cập nhật lại văn bản gốc (theo yêu cầu đề bài) */
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
