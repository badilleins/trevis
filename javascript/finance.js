//Calcular la ganancia
function calculateGain(){
  let buyPrice= document.getElementById('buyPrice').value
  let sellPrice = document.getElementById('sellPrice').value
  let result = sellPrice - buyPrice
  function moneyStatus(money){
    if(money > 0){
      return 'ganando'
    }else if (money == 0) {
      return 'con los mismos'
    }else{
      return 'perdiendo'
    }
  }
  let userGain = `Usted está ${moneyStatus(result)} ${result} dólares`
  document.getElementById('userGain').innerText = userGain
}

//Calculate price after discount
function getNewPrice(){
  let offers = ['5%','10%','15%','20%','25%']
  let sellPrice2 = document.getElementById('sellPrice2').value
  let theOffer = document.getElementById('theOffer').value
  validateOffer(theOffer)

//Validate the discount value
  function validateOffer(val){
    if(!offers.includes(val)){
      document.getElementById('newPrice').innerText = 'No es un valor de descuento válido, intente otra vez'
    }else{
      let offerValue =  calculateOffer(val)
      let discount = calculateDiscount()
      let priceAfterDiscount = calculateNewPrice()
      let newPrice = `El descuento aplicado es de ${discount} y el precio actual a pagar es ${priceAfterDiscount} dólares`
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
      default:0
      }
    }
}
