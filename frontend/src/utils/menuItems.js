import { dashboard, transactions, trend, expenses } from "./icons";   

export const menuItems = [
    {
        id:1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id:2,
        title: "Transações",
        icon: transactions,
        link: '/dashboard'
    },
    {
        id:3,
        title: "Receitas",
        icon: trend,
        link: '/dashboard'
    },
    {
        id:4,
        title: 'Despesas',
        icon: expenses,
        link: '/dashboard'
    },
  
]