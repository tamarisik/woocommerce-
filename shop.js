$(document).ready(function() {
    var cartItems = [];
    var total = 0;
  
    $('.add-to-cart').click(function() {
      var product = $(this).parent();
      var productName = product.find('h2').text();
      var productPrice = parseInt(product.find('p').text().substring(1));
  
      cartItems.push({ name: productName, price: productPrice });
      total += productPrice;
  
      $('#cart-items').append('<li>' + productName + ' - $' + productPrice + '<button class="delete-item">Delete</button></li>');
      $('#cart-total').text('Total: $' + total);
    });
  
    $('#cart').on('click', '.delete-item', function() {
      var item = $(this).parent();
      var itemName = item.clone().children().remove().end().text().trim();
      var itemPrice = parseInt(item.contents().filter(function () {
        return this.nodeType === 3;
      }).text().substring(1));
        
      cartItems = cartItems.filter(function(item) {
        return item.name !== itemName || item.price !== itemPrice;
      });
      total -= itemPrice;
  
      item.remove();
      $('#cart-total').text('Total: $' + total);
    });
  
    $('#checkout').click(function() {
      if (cartItems.length > 0) {
        alert('Thank you for your purchase!');
        cartItems = [];
        total = 0;
        $('#cart-items').empty();
        $('#cart-total').text('Total: $' + total);
      } else {
        alert('Your cart is empty!');
      }
    });
  });
  