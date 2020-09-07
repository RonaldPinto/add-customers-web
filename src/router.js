import CustomersList from './components/CustomersList.vue'
import Customer from './components/Customer.vue'
import AddCustomer from './components/AddCustomer.vue'
import SearchCustomers from './components/SearchCustomers.vue'

export const rutas = [{
        path: "/",
        name: "customers",
        alias: "/customer",
        component: CustomersList,
        children: [{
            path: "/customer/:id",
            name: "customer-details",
            component: Customer,
            props: true
        }]
    },
    {
        path: "/add",
        name: "add",
        component: AddCustomer
    },
    {
        path: "/search",
        name: "search",
        component: SearchCustomers
    }

]