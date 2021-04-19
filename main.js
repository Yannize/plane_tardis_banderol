let anim = document.querySelectorAll('.animate');
let btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
  btn.style.display = 'none';
  anim.forEach((a) => {
    a.style.display = 'block';
    a.style.animation = 'fly 4s linear infinite';
  });
});
