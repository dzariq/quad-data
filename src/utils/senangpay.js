const crypto = require('crypto');

const formCode = '930154140675769';
const actionUrl = 'https://sandbox.senangpay.my/payment/' + formCode
const secretKey = '152-798';

export async function Payment(selectedVariant) {
  const orderId = Math.floor(10000 + Math.random() * 90000);

  const payment = {
    detail: encodeURIComponent(sessionStorage.getItem("cartId")),
    amount: selectedVariant.node.priceV2.amount,
    order_id: orderId,
    name: 'Dzariq Mirza',
    email: 'dzariq85@gmail.com',
    phone: '60186663282',
    actionUrl: actionUrl
  }

  const hmac = crypto.createHmac('sha256', secretKey);
  hmac.update(secretKey + payment.detail + payment.amount + payment.order_id);
  payment.hash = hmac.digest('hex');

  return payment;
}
