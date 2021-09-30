//Helpers
function discoverDiscountWord(amount){
        if(amount === 1 || amount === -1){
          return 'dólar'
        }else if(amount < 1 && amount > 0){
          return 'centavos'
        }
        else{
          return 'dólares'
        }
      }
  function discoverPriceWord(quantity){
        if(quantity === 1 || quantity === -1){
          return 'dólar'
        } else if(quantity > 0 && quantity < 1){
          return 'centavos'
        }
        else{
          return 'dólares'
        }
      }
  function moneyStatus(money){
    if(money > 0){
      return 'ganando'
    }else if (money == 0) {
      return 'con los mismos'
    }else{
      return 'perdiendo'
    }
  }
  function validateGainNumber(numberA,numberB){
        if(numberA < 0 ||  numberB < 0){
          return false
        }else{
          return true
        }
      }
  function validateDiscountNumber(number){
        if(number < 0){
          return false
        }else{
          return true
        }
      }
      function isWhole(num){
      if (num % 1 == 0) {
          return num
      } else {
          let twoDecimals = num.toFixed(2)
          return twoDecimals
      }
    }
//Calcular la ganancia

function calculateGain(){
  let buyPrice= Number(document.getElementById('buyPrice').value)
  let sellPrice = Number(document.getElementById('sellPrice').value)
  if(validateGainNumber(buyPrice, sellPrice)){
    let result = sellPrice - buyPrice
    let answer = validateAnswer(result)
    let trueAnswer = isWhole(answer)
    let userGain = `Usted está ${moneyStatus(result)} ${trueAnswer} ${discoverPriceWord(answer)}`
    document.getElementById('userGain').innerText = userGain
  }else{
    document.getElementById('userGain').innerText = `Ingrese números positivos`
  }
}
function validateAnswer(res){
  if(res < 0){
    newResult = res * -1
    return newResult
  }else{
    return res
  }
}


//Calculate price after discount
function getNewPrice(){
  let offers = ['5%','10%','15%','20%','25%']
  let emptyImput = [ ]
  let sellPrice2 = document.getElementById('sellPrice2').value
  let theOffer = document.getElementById('theOffer').value
  if(validateDiscountNumber(sellPrice2)){
    validateOffer(theOffer)
  }else{
    document.getElementById('newPrice').innerText = `Ingrese números positivos`
  }


//Validate the discount value

  function validateOffer(val){
    if(!offers.includes(val)){
      document.getElementById('newPrice').innerText = 'Ingrese un porcentaje de descuento válido'
    }else{
      let offerValue =  calculateOffer(val)
      let discount = calculateDiscount()
      let realDiscount = isWhole(discount)
      let priceAfterDiscount = calculateNewPrice()
      let realDiscountPrice = isWhole(priceAfterDiscount)
      let newPrice = `El descuento aplicado es de ${realDiscount} ${discoverDiscountWord(discount)} y el precio actual a pagar es ${realDiscountPrice} ${discoverPriceWord(priceAfterDiscount)}`
      document.getElementById('newPrice').innerText = newPrice
      function calculateDiscount(){
        let discountValue = (sellPrice2 * offerValue)/ 100
        return discountValue
      }

      function calculateNewPrice(){
        let calculatedPrice = sellPrice2 - discount
        return calculatedPrice
      }
    }
  }
  //Calculate value
  function calculateOffer(offer){
    switch (offer) {
      case  offers[0]:
        return 5
      break;
      case offers[1]:
        return   10
      break;
      case  offers[2]:
        return 15
      break;
      case  offers[3]:
        return 20
      break;
      case offers[4]:
        return 25
      break;
      default: 0
      }
    }
}
