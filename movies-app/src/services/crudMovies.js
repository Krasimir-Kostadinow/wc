import { request } from './requestServices';
import { notifications } from "../common";
import { Router } from '@vaadin/router';






export function addMovie(event) {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    userInfo = userInfo ? userInfo : { isLogged: false, email: '' };

    const { description, imageUrl, title } = event.target.elements;
    if (title.value.length <= 0) {
        notifications('The Movie Title field must be filled', 'error');
        return;
    } else if (description.value.length <= 0) {
        notifications('The Movie Description field must be filled', 'error');
        return;
    } else if (imageUrl.value.length <= 0) {
        notifications('The Image url field must be filled', 'error');
        return;
    }
    const uid = userInfo.uid;

    const body = {
        ownerId: uid,
        title: title.value,
        description: description.value,
        imageUrl: imageUrl.value,
        likeds: [true]
    };

    request('data', `/.json?auth=${userInfo.idToken}`, 'POST', body)
        .then((data) => {
            notifications('Successfully added movie!');
            Router.go('/wc/movies-app/home');
        })
        .catch((error) => {
            notifications(error.message, 'error');
        })

};

export function deleteMovie(pathName) {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    userInfo = userInfo ? userInfo : { isLogged: false, email: '' };
    const uid = userInfo.uid;
    request('data', `/${pathName}.json?auth=${userInfo.idToken}`, 'DELETE')
        .then(() => {
            notifications('Successfully deleted movie!');
            Router.go('/wc/movies-app/home');
        })
        .catch((error) => {
            notifications(error.message, 'error');
        })
};

export function editMovie(event, pathName) {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    userInfo = userInfo ? userInfo : { isLogged: false, email: '' };
    const { description, imageUrl, title } = event.target.elements;
    if (title.value.length <= 0) {
        notifications('The Movie Title field must be filled', 'error');
        return;
    } else if (description.value.length <= 0) {
        notifications('The Movie Description field must be filled', 'error');
        return;
    } else if (imageUrl.value.length <= 0) {
        notifications('The Image url field must be filled', 'error');
        return;
    }
    const uid = userInfo.uid;
    const body = {
        title: title.value,
        description: description.value,
        imageUrl: imageUrl.value,

    };

    request('data', `/${pathName}.json?auth=${userInfo.idToken}`, 'PATCH', body)
        .then((data) => {
            notifications('Successfully edited movie!');
            Router.go(`/wc/movies-app/details/${pathName}`);
        })
        .catch((error) => {
            notifications(error.message, 'error');
        })
};

export function addedLikedMovie(pathName) {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    userInfo = userInfo ? userInfo : { isLogged: false, email: '' };

    request('data', `${pathName}.json?auth=${userInfo.idToken}`, 'GET')
        .then((data) => {
            const { ownerId, title, likeds } = data;
            let newLikeds = likeds;
            newLikeds.push(userInfo.email);
            request('data', `${pathName}.json?auth=${userInfo.idToken}`, 'PATCH', {
                likeds: newLikeds
            }).then(() => {
                notifications(`Successfully liked movie ${title}!`);
            }).catch((error) => {
                notifications(error.message, 'error');
            })
        }).catch((error) => {
            console.log(error.message);
        });
}
