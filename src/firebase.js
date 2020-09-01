import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyCP4clbUsoYpOSEgTPVCxM4Vi1rRmIvHfI",
    authDomain: "hanoi-tower-8f9fe.firebaseapp.com",
    databaseURL: "https://hanoi-tower-8f9fe.firebaseio.com",
    projectId: "hanoi-tower-8f9fe",
    storageBucket: "hanoi-tower-8f9fe.appspot.com",
    messagingSenderId: "150340057284",
    appId: "1:150340057284:web:eb94531116f9cff2ae3191"
});

export const db = app.database();
export const leaderboard = db.ref('leaderboard')