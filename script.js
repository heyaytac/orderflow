var customerCount = 1;

var toppingsForFood = {
    Kebap: {
        'Drehspieß': ['mit Cocktailsauce', 'Topping 2', 'Topping 3'],
        'Big Drehspieß': ['Topping 4', 'Topping 5', 'Topping 6'],
        'Drehspieß Rolle': ['Topping 7', 'Topping 8', 'Topping 9'],
        'Big Drehspieß Rolle': ['Topping 10', 'Topping 11', 'Topping 12'],
        "Rene's Rolle": ['Topping 13', 'Topping 14', 'Topping 15'],
        'Türkische Pizza': ['Topping 16', 'Topping 17', 'Topping 18'],
        'Drehspieß Teller': ['Topping 19', 'Topping 20', 'Topping 21'],
        'Drehspieß Teller Big': ['Topping 22', 'Topping 23', 'Topping 24'],
        'Drehspieß Box': ['Topping 25', 'Topping 26', 'Topping 27'],
        'kl. Drehspieß Box': ['Topping 28', 'Topping 29', 'Topping 30'],
        'Hähnchen Nuggets': ['Topping 31', 'Topping 32', 'Topping 33'],
        'kleine Pommes': ['Topping 34', 'Topping 35', 'Topping 36'],
        'große Pommes': ['Topping 37', 'Topping 38', 'Topping 39'],
      },
    Pizza: {
      Roni: ['Topping 1', 'Topping 2', 'Topping 3'],
      Nazdar: ['Topping 4', 'Topping 5', 'Topping 6'],
      Hevin: ['Topping 7', 'Topping 8', 'Topping 9'],
      'Pizza Margherita': ['Topping 10', 'Topping 11', 'Topping 12'],
      'Pizza Funghi': ['Topping 13', 'Topping 14', 'Topping 15'],
      'Funghi Salami': ['Topping 16', 'Topping 17', 'Topping 18'],
      'Pizza Salami': ['Topping 19', 'Topping 20', 'Topping 21'],
      'Pizza Hawaii': ['Topping 22', 'Topping 23', 'Topping 24'],
      'Pizza Vegetaria': ['Topping 25', 'Topping 26', 'Topping 27'],
      'Pizza Amore': ['Topping 28', 'Topping 29', 'Topping 30'],
      'Pizza Mafia': ['Topping 31', 'Topping 32', 'Topping 33'],
      'Pizza Tonno Cipolla': ['Topping 34', 'Topping 35', 'Topping 36'],
      'Pizza Baran': ['Topping 37', 'Topping 38', 'Topping 39'],
      'Pizza Schinken': ['Topping 40', 'Topping 41', 'Topping 42'],
      'Pizza Tujo': ['Topping 43', 'Topping 44', 'Topping 45'],
      'Pizza Calzone': ['Topping 46', 'Topping 47', 'Topping 48']
    },
    Pide: {
        'Döner Pide': ['ohne Zwiebeln', 'ohne Gouda', 'ohne Champignons'],
        'Sucuk Pide': ['ohne Zwiebeln', 'ohne Gouda', 'ohne Champignons'],
        'Spinat Pide': ['ohne Zwiebeln', 'ohne Gouda', 'ohne Champignons'],
        'Käse Pide': ['ohne Zwiebeln', 'ohne Gouda', 'ohne Champignons'],
        'Gemüde Pide': ['ohne Zwiebeln', 'ohne Gouda', 'ohne Champignons'],
        'Thunfisch Pide': ['ohne Zwiebeln', 'ohne Gouda', 'ohne Champignons'],
        'Salami Pide': ['ohne Zwiebeln', 'ohne Gouda', 'ohne Champignons'],
        'Schinken Pide': ['ohne Zwiebeln', 'ohne Gouda', 'ohne Champignons'],
        'Baran Pide': ['ohne Zwiebeln', 'ohne Gouda', 'ohne Champignons'],
        'Chef Pide': ['ohne Zwiebeln', 'ohne Gouda', 'ohne Champignons'],
    },
    Getränke: ['Cola', 'Fanta', 'Water']
    };
  
  var foodButtons = document.querySelectorAll('.food-button');
  var pizzaVariantDiv = document.getElementById('pizzaVariants');
  var toppingsDiv = document.getElementById('toppings');
  var selectedPizzaVariant = '';
  var selectedDrinkVariant = '';
  
  foodButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          foodButtons.forEach(function(btn) {
              btn.classList.remove('active');
          });
          this.classList.add('active');
          var food = this.dataset.food;
          var toppingsDiv = document.getElementById('toppings');
          toppingsDiv.textContent = '';
          if (food === 'Pizza' || food === 'Kebap' || food === 'Pide') {
            selectedDrinkVariant = '';
            var foodVariants = Object.keys(toppingsForFood[food]);
            foodVariants.forEach(function(variant) {
              var variantButton = document.createElement('button');
              variantButton.classList.add('variant-button');
              variantButton.textContent = variant;
              variantButton.addEventListener('click', function() {
                selectedPizzaVariant = variant; 
                var toppings = toppingsForFood[food][variant];
                showToppings(toppings);
              });
              toppingsDiv.appendChild(variantButton);
            });
          } else if (food === 'Getränke') {
            selectedPizzaVariant = '';
            var drinkVariants = toppingsForFood[food];
            drinkVariants.forEach(function(variant) {
              var variantButton = document.createElement('button');
              variantButton.classList.add('variant-button');
              variantButton.textContent = variant;
              variantButton.addEventListener('click', function() {
                selectedDrinkVariant = variant;
                // Handle drink variant selection if needed
              });
              toppingsDiv.appendChild(variantButton);
            });
          } else {
            var toppings = toppingsForFood[food];
            showToppings(toppings);
          }
        });
      });
    
  
      function showToppings(toppings) {
        toppingsDiv.textContent = '';
        var variantLabel = document.createElement('h3');
        variantLabel.textContent = selectedPizzaVariant;
        toppingsDiv.appendChild(variantLabel);
      
        toppings.forEach(function (topping) {
          var checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.id = topping;
          checkbox.name = 'toppings';
          checkbox.value = topping;
          var label = document.createElement('label');
          label.htmlFor = topping;
          label.textContent = topping;
          toppingsDiv.appendChild(checkbox);
          toppingsDiv.appendChild(label);
          toppingsDiv.appendChild(document.createElement('br'));
        });
      }
      
  
  document.getElementById('orderForm').addEventListener('submit', function(event) {
      event.preventDefault();
      var food = document.querySelector('.food-button.active').dataset.food;
      var quantity = document.getElementById('quantity').value;
      var pickupTime = document.getElementById('pickupTime').value * 60;
      var toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(function(checkbox) {
          return checkbox.value;
      });
      var toppingsString = toppings.join(',');
      var timestamp = new Date().toLocaleString();
      var basket = document.getElementById('basket');
      var basketItem = document.createElement('div');
      basketItem.classList.add('basket-item');
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('order-checkbox');
      basketItem.appendChild(checkbox);
      var variantLabel = selectedPizzaVariant || selectedDrinkVariant;
      basketItem.appendChild(document.createTextNode(`Customer ID: ${customerCount}, Food: ${food}, Variant: ${variantLabel}, Toppings: ${toppings.join(', ')}, Quantity: ${quantity}, Timestamp: ${timestamp}`));
      var countdown = document.createElement('span');
      basketItem.appendChild(countdown);
  
      var orderTime = Date.now();
      var countdownInterval;
  
      var updateCountdown = function() {
          var elapsedTime = Math.floor((Date.now() - orderTime) / 1000);
          var remainingTime = pickupTime - elapsedTime;
          if (remainingTime <= 0) {
              clearInterval(countdownInterval);
              countdown.textContent = ' Ready for pickup';
          } else {
              countdown.textContent = ' Pickup in: ' + Math.floor(remainingTime / 60) + ' minutes ' + (remainingTime % 60) + ' seconds';
          }
      };
  
      countdownInterval = setInterval(updateCountdown, 1000);
      updateCountdown();
  
      var finishedButton = document.createElement('button');
      finishedButton.classList.add('finished-button');
      finishedButton.textContent = 'Finished';
      finishedButton.addEventListener('click', function() {
          if  (basketItem.classList.toggle('finished')) {
              clearInterval(countdownInterval);
          } else {
              countdownInterval = setInterval(updateCountdown, 1000);
              updateCountdown();
          }
      });
      basketItem.appendChild(finishedButton);
  
      var removeButton = document.createElement('button');
      removeButton.classList.add('remove-button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', function() {
          var confirmDelete = confirm('Are you sure you want to remove this order?');
          if (confirmDelete) {
              basket.removeChild(basketItem);
          }
      });
      basketItem.appendChild(removeButton);
      basket.appendChild(basketItem);
      customerCount++;
      document.getElementById('quantity').value = 1;
      Array.from(document.querySelectorAll('input[name="toppings"]:checked')).forEach(function(checkbox) {
          checkbox.checked = false;
      });
  });

  document.getElementById('clearOrdersButton').addEventListener('click', function() {
    var confirmClear = confirm('Are you sure you want to clear all orders?');
    if (confirmClear) {
      var basket = document.getElementById('basket');
      basket.innerHTML = ''; // Remove all child elements
    }
  });
  
  var groupButton = document.getElementById('groupButton');
  
groupButton.addEventListener('click', function() {
      var checkedOrders = Array.from(document.querySelectorAll('.order-checkbox:checked'));
      if (checkedOrders.length === 0) {
          alert('No orders selected');
          return;
      }

      var basket = document.getElementById('basket');
      var groupItem = document.createElement('div');
      groupItem.classList.add('basket-item');
      groupItem.textContent = 'Group Order: ';
  
      checkedOrders.forEach(function(checkbox) {
          var orderItem = checkbox.parentElement;
          groupItem.textContent += orderItem.textContent + ' | ';
          basket.removeChild(orderItem);
      });
  
      basket.appendChild(groupItem);
    });


    confirmButton.addEventListener('click', function () {
        var basketItems = Array.from(document.querySelectorAll('.basket-item'));
        var orderData = [];
      
        basketItems.forEach(function (item) {
          var orderText = item.textContent;
          var orderDetails = orderText.split(', ');
          var order = {
            food: '',
            variant: '',
            toppings: [],
            quantity: '',
            timestamp: ''
          };
      
          orderDetails.forEach(function (detail) {
            var [label, ...values] = detail.split(':');
            label = label.trim();
            var value = values.join(':').trim();
      
            if (label === 'Food') {
              order.food = value;
            } else if (label === 'Variant') {
              order.variant = value;
            } else if (label === 'Toppings') {
              order.toppings = value.split(',').map((topping) => topping.trim());
            } else if (label === 'Quantity') {
              order.quantity = value;
            } else if (label === 'Timestamp') {
              order.timestamp = value;
            }
          });
      
          orderData.push(order);
        });
      
        var htmlTemplate = `
          <h1>Order Details</h1>
          <ul>
            ${orderData
              .map(
                (order) => `
                  <li>
                    <strong>Food:</strong> ${order.food}<br>
                    <strong>Variant:</strong> ${order.variant}<br>
                    <strong>Toppings:</strong> ${order.toppings.join(', ')}<br>
                    <strong>Quantity:</strong> ${order.quantity}<br>
                    <strong>Timestamp:</strong> ${order.timestamp}
                  </li>
                `
              )
              .join('')}
          </ul>
        `;
      
        html2pdf()
          .from(htmlTemplate)
          .save('order.pdf');
      });
      
