const users = [
    {
        id: 1,
        username: 'admin',
        email: 'admin@example.com',
        role: 'Admin'
    },
    {
        id: 2,
        username: 'johndoe',
        email: 'john@example.com',
        role: 'User'
    }
];

function loadUsers() {
    $('#user-list').empty();
    users.forEach(user => {
        $('#user-list').append(`
            <tr>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editUser(${user.id})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Delete</button>
                </td>
            </tr>
        `);
    });
}

function editUser(userId) {
    alert('Edit user with ID: ' + userId);
}

function deleteUser(userId) {
    alert('Delete user with ID: ' + userId);
}

$(document).ready(function() {
    loadUsers();
});
