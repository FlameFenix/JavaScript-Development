function solve() {
   let addBtnElements = Array.from(document.getElementsByClassName('add-product'));
   let textAreaElement = document.querySelector('textarea')

   let sum = 0;
   let arr = [];

   for (const btn of addBtnElements) {
      btn.addEventListener('click', () => {

         textAreaElement.textContent += `Added ${btn.parentElement.parentElement.querySelector('.product-title').textContent} for ${Number(btn.parentElement.parentElement.querySelector('.product-line-price').textContent).toFixed(2)} to the cart.\n`
         sum += Number(btn.parentElement.parentElement.querySelector('.product-line-price').textContent);
         if (!arr.includes(btn.parentElement.parentElement.querySelector('.product-title').textContent)) {
            arr.push(btn.parentElement.parentElement.querySelector('.product-title').textContent);
         }
      });
   }

   let checkoutElement = document.querySelector('.checkout');
   checkoutElement.addEventListener('click', () => {

      textAreaElement.textContent += `You bought ${arr.join(', ')} for ${sum.toFixed(2)}.`;

      checkoutElement.setAttribute('disabled', true);

      for (const btn of addBtnElements) {
         btn.setAttribute('disabled', true);
      }
   })
   //TODO...
}