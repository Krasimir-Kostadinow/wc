export function notifications(message, type = 'success') {

    let notificationsElement;

    switch (type) {
        case 'success':
            notificationsElement = document.getElementById('successBox');
            break;
        case 'error':
            notificationsElement = document.getElementById('errorBox');
            break;
        default:
            break;
    }

    notificationsElement.textContent = message;
    notificationsElement.parentElement.style.display = 'block';

    if (type === 'success') {
        setTimeout(() => {
            notificationsElement.textContent = 'Message...';
            notificationsElement.parentElement.style.display = 'none';

        }, 3000);
    } else {
        notificationsElement.parentElement.addEventListener('click', () => {
            notificationsElement.textContent = 'Message...';
            notificationsElement.parentElement.style.display = 'none';
        });
    }


};