document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.onclick = function (e) {
            e.preventDefault(); // Ngăn trình duyệt cuộn mặc định

            // Reset màu tất cả tiêu đề
            document.querySelectorAll('.section h2').forEach(h => h.style.color = '');

            // Ẩn tất cả các section
            sections.forEach(sec => sec.style.display = 'none');

            // Lấy id từ href
            const id = this.getAttribute('href');
            const targetSection = document.querySelector(id);
            const targetH2 = targetSection?.querySelector('h2');
            const quayLai = document.getElementById("quaylai");
            // Hiện section tương ứng và đổi màu tiêu đề
            if (targetSection) {
                targetSection.style.display = 'block';
                if (targetH2) targetH2.style.color = 'deepskyblue';

                // Cuộn xuống cuối phần nội dung hiện tại
                targetSection
            }
            if(quayLai){
                quayLai.style.display = 'block';
                quayLai.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
            
        };
    });
});