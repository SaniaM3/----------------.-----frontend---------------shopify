const collapseVisible = document.querySelector('.collapsible__action--visible');
const collapseHidden = document.querySelector('.collapsible__action--hidden');
const collapseContent = document.querySelector('.collapsible__content');

collapseVisible.style.display = 'none';
collapseContent.style.display = 'none';

collapseVisible.addEventListener('click', () => {
  collapseContent.animate(
    [
      {
        transform: 'translateY(50%)',
        opacity: 1
      }, {
    
        transform: 'translateY(0)',
        opacity: 0
      },
    
    ],
    {
      duration: 0,
      fill: 'both',
      easing: 'linear',
    });
  collapseHidden.style.display = 'block';
  collapseVisible.style.display = 'none';
 
});

collapseHidden.addEventListener('click', () => {
  collapseContent.animate(
    [
      {
        transform: 'translateY(0)',
        opacity: 0
      },
      {
        transform: 'translateY(50%)',
        opacity: 1
      },
    ],
    {
      duration: 0,
      fill: 'both',
      easing: 'linear',
    });
  collapseContent.style.display = 'block';
  collapseHidden.style.display = 'none';
  collapseVisible.style.display = 'block';
  
});