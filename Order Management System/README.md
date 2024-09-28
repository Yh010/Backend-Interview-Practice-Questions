Order Management System
Overview

You are tasked with building a simple Order Management System for a food delivery service using JavaScript. Customers can place, update, or cancel orders, and the system tracks the current state of each order. Additionally, the system should be able to generate reports on how many orders were placed, canceled, and delivered.
Features

    Place Order:
        Customers can place an order by specifying the items they want and the quantity. The system assigns a unique ID to the order and tracks it.

    Update Order:
        Customers can update the items or quantities in an order as long as the order hasn't been delivered yet.

    Cancel Order:
        A customer can cancel an order unless it has already been delivered.

    Order Status:
        An order can be in one of the following statuses:
            Pending: When the order is placed but not yet delivered.
            Delivered: When the order has been completed.
            Canceled: If the customer cancels the order.

    Get Order Details:
        You should be able to fetch details of any order based on the order ID.

    Report Generation:
        Generate a report showing:
            Total number of orders.
            Number of canceled orders.
            Number of delivered orders.

Requirements

    Use JavaScript classes to represent customers, orders, and items.
    Store the data in memory using objects or arrays.
    Implement error handling for cases like trying to cancel a delivered order, or trying to update an order that doesn't exist.


Tasks

    Fix and extend the code:
        There’s a bug in the updateOrder() method. If the orderId doesn't exist, it should handle that case.
        Add a new feature to list all orders with their current status.

    Add error handling:
        Prevent updating, canceling, or delivering an order if the order doesn’t exist in the system.
        Prevent delivering or canceling an already delivered/canceled order.

    Improve reporting:
        Add functionality to list pending orders.
        Add functionality to see how many orders belong to a specific customer (group orders by customerId).

    Testing:
        Write tests to ensure that adding, updating, canceling, and delivering orders work as expected.