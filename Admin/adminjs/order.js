const orders = [
    {
        id: 1,
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
        dateOfOrder: '2024-07-01',
        product: 'Luxury Watch',
        itemPhoto: 'https://via.placeholder.com/50', // Replace with actual photo URL
        quantity: 1,
        price: 5000,
        totalPrice: 5000,
        status: 'Pending'
    },
    {
        id: 2,
        customerName: 'Jane Smith',
        customerEmail: 'jane@example.com',
        dateOfOrder: '2024-07-02',
        product: 'Luxury Bag',
        itemPhoto: 'https://via.placeholder.com/50', // Replace with actual photo URL
        quantity: 2,
        price: 1500,
        totalPrice: 3000,
        status: 'Shipped'
    }
];

function loadOrders() {
    $('#order-list').empty();
    orders.forEach(order => {
        $('#order-list').append(`
            <tr>
                <td>${order.id}</td>
                <td>${order.customerName}</td>
                <td>${order.customerEmail}</td>
                <td>${order.dateOfOrder}</td>
                <td>${order.product}</td>
                <td><img src="${order.itemPhoto}" alt="${order.product}" class="img-thumbnail" width="50"></td>
                <td>${order.quantity}</td>
                <td>${order.price}</td>
                <td>${order.totalPrice}</td>
                <td>${order.status}</td>
                <td>
                    <button class="btn btn-warning btn-sm mb-2" onclick="editOrder(${order.id})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteOrder(${order.id})">Delete</button>
                </td>
            </tr>
        `);
    });
}

function editOrder(orderId) {
    // Implement edit order functionality
    alert('Edit order with ID: ' + orderId);
}

function deleteOrder(orderId) {
    // Implement delete order functionality
    alert('Delete order with ID: ' + orderId);
}

$(document).ready(function() {
    loadOrders();
});
