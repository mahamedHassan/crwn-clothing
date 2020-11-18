import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('myQrKhqa5quWysXaZTrR').collection('cartItems').doc('IiyJSHDoZ87CoNiHARsD');
firestore.doc('/users/myQrKhqa5quWysXaZTrR/cartItems/IiyJSHDoZ87CoNiHARsD');//this is the same as an above code
firestore.collection('/users/myQrKhqa5quWysXaZTrR/cartItems'); // it is also same this how to get data from database





export default firestore;


