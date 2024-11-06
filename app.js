document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.getElementById('reservationForm');
    const reservationsList = document.getElementById('reservationsList');

    let reservations = [];

    // 处理预约表单提交
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const computer = document.getElementById('computer').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const projectNumber = document.getElementById('projectNumber').value;
        const reviewer = document.getElementById('reviewer').value;
        const supervisor = document.getElementById('supervisor').value;

        const reservation = {
            id: reservations.length + 1,
            computer,
            date,
            time,
            projectNumber,
            reviewer,
            supervisor
        };

        reservations.push(reservation);
        displayReservations();
        reservationForm.reset();
    });

    // 显示预约列表
    function displayReservations() {
        reservationsList.innerHTML = '';
        reservations.forEach(reservation => {
            const li = document.createElement('li');
            li.textContent = `ID: ${reservation.id}, 电脑: ${reservation.computer}, 日期: ${reservation.date}, 时间段: ${reservation.time}, 项目编号: ${reservation.projectNumber}, 评审人员: ${reservation.reviewer}, 项目主管人员: ${reservation.supervisor}`;

            const cancelButton = document.createElement('button');
            cancelButton.textContent = '取消预约';
            cancelButton.addEventListener('click', () => {
                cancelReservation(reservation.id);
            });

            li.appendChild(cancelButton);
            reservationsList.appendChild(li);
        });
    }

    // 取消预约
    function cancelReservation(id) {
        reservations = reservations.filter(reservation => reservation.id !== id);
        displayReservations();
    }
});
