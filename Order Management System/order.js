class Order {
  constructor(id, customerId, items) {
    this.id = id;
    this.customerId = customerId;
    this.items = items; // Array of {itemName, quantity}
    this.status = 'Pending'; // Order starts in "Pending" status
  }

  // Method to update items in an order
  updateOrder(newItems) {
    if (this.status === 'Delivered') {
      console.log("Cannot update a delivered order.");
      return false;
    }
    this.items = newItems;
    console.log("Order updated successfully.");
    return true;
  }

  // Method to cancel an order
  cancelOrder() {
    if (this.status === 'Delivered') {
      console.log("Cannot cancel a delivered order.");
      return false;
    }
    this.status = 'Canceled';
    console.log("Order canceled successfully.");
    return true;
  }

  // Method to deliver the order
  deliverOrder() {
    if (this.status === 'Pending') {
      this.status = 'Delivered';
      console.log("Order delivered successfully.");
      return true;
    }
    return false;
  }
}

class OrderManagement {
  constructor() {
    this.orders = {}; // Store orders by ID
    this.nextOrderId = 1;
  }

  // Method to place a new order
  placeOrder(customerId, items) {
    const orderId = this.nextOrderId++;
    const newOrder = new Order(orderId, customerId, items);
    this.orders[orderId] = newOrder;
    console.log(`Order placed: ${orderId}`);
    return orderId;
  }

  // Method to update an existing order
  updateOrder(orderId, newItems) {
    const order = this.orders[orderId];
    if (!order) {
      console.log("Order not found.");
      return false;
    }
    return order.updateOrder(newItems);
  }

  // Method to cancel an order
  cancelOrder(orderId) {
    const order = this.orders[orderId];
    if (!order) {
      console.log("Order not found.");
      return false;
    }
    return order.cancelOrder();
  }

  // Method to deliver an order
  deliverOrder(orderId) {
    const order = this.orders[orderId];
    if (!order) {
      console.log("Order not found.");
      return false;
    }
    return order.deliverOrder();
  }

  // Method to get details of an order
  getOrderDetails(orderId) {
    const order = this.orders[orderId];
    if (!order) {
      console.log("Order not found.");
      return null;
    }
    return {
      id: order.id,
      customerId: order.customerId,
      items: order.items,
      status: order.status
    };
  }

  // Method to generate a report
  generateReport() {
    let totalOrders = 0;
    let canceledOrders = 0;
    let deliveredOrders = 0;

    for (let orderId in this.orders) {
      const order = this.orders[orderId];
      totalOrders++;
      if (order.status === 'Canceled') {
        canceledOrders++;
      } else if (order.status === 'Delivered') {
        deliveredOrders++;
      }
    }

    console.log(`Total Orders: ${totalOrders}`);
    console.log(`Canceled Orders: ${canceledOrders}`);
    console.log(`Delivered Orders: ${deliveredOrders}`);
  }
}
