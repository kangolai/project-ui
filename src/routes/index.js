import Home from '~/pages/Home';
import ListProduct from '~/pages/ListProduct';
import Detail from '~/pages/Detail';
import Contact from '~/pages/Contact';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/list-product', component: ListProduct },
    { path: '/detail', component: Detail },
    { path: '/contact', component: Contact, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
