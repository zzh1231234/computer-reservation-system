document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const computerId = document.getElementById('computerId').value;
    const date = document.getElementById('date').value;
    const projectName = document.getElementById('projectName').value;
    const user = document.getElementById('user').value;
    const supervisor = document.getElementById('supervisor').value;

    const reservation = {
        computerId,
        date,
        projectName,
        user,
        supervisor
    };

    // 将预约记录存储在本地存储中
    let reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));

    // 显示预约记录
    displayReservations();
});

function displayReservations() {
    const reservationsDiv = document.getElementById('reservations');
    reservationsDiv.innerHTML = '';

    const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    if (reservations.length === 0) {
        reservationsDiv.innerHTML = '<p>当前没有预约记录。</p>';
        return;
    }

    reservations.forEach((reservation, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <strong>预约 ${index + 1}:</strong><br>
            电脑编号: ${reservation.computerId}<br>
            日期: ${reservation.date}<br>
            项目: ${reservation.projectName}<br>
            使用人: ${reservation.user}<br>
            主管: ${reservation.supervisor}<br>
            <hr>
        `;
        reservationsDiv.appendChild(div);
    });
}

// 初始化时显示预约记录
displayReservations();