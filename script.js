document.getElementById('year').textContent = new Date().getFullYear();
const donateBtn = document.getElementById('donateBtn');
const donateInfo = document.getElementById('donateInfo');
donateBtn.addEventListener('click', () => {
  donateInfo.hidden = !donateInfo.hidden;
  donateBtn.textContent = donateInfo.hidden ? '💝 Donate' : 'Đóng lại';
});
// Tùy chỉnh link, tên, mô tả và ảnh trong index.html.
