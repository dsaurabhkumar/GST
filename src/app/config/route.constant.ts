export const ROUTES = {
        dashboard: {
            route: 'dashboard',
            name: 'Dashboard',
            absoluteRoute:'/dashboard',
            module: '../pages/dashboard/dashboard.module#DashboardModule'
        },
        settings : {
            route: 'settings',
            name: 'Settings',
            absoluteRoute: '/settings',
            module: '../pages/settings/settings.module#SettingsModule'
        },
        customers: {
            route: 'customers',
            name: 'Customers',
            absoluteRoute: '/customers',
            module: '../pages/customers/customers.module#CustomersModule'
        },
        transport: {
            route: 'transport',
            name: 'Transport',
            absoluteRoute: '/transport',
            module: '../pages/transport/transport.module#TransportModule'
        },
        products : {
            route: 'products',
            name: 'Products',
            absoluteRoute: '/products',
            module: '../pages/products/products.module#ProductsModule'
        },
        saleInvoice: {
            route: 'saleInvoice',
            name: 'SaleInvoice',
            absoluteRoute: '/saleInvoice',
            module: '../pages/sale-invoice/sale-invoice.module#SaleInvoiceModule'
        },
        purchaseInvoice: {
            route: 'purchaseInvoice',
            name: 'PurchaseInvoice',
            absoluteRoute: '/purchaseInvoice',
            module: '../pages/purchase-invoice/purchase-invoice.module#PurchaseInvoiceModule'
        },
        dailyExpense: {
            route: 'dailyExpense',
            name: 'DailyExpense',
            absoluteRoute: '/dailyExpense',
            module: '../pages/daily-expense/daily-expense.module#DailyExpenseModule'
        },
        otherDocs: {
            route: 'otherDocs',
            name: 'OtherDocs',
            absoluteRoute: '/otherDocs',
            module: '../pages/other-documents/other-documents.module#OtherDocumentsModule'
        },
        exports: {
            route: 'exports',
            name: 'Exports',
            absoluteRoute: '/exports',
            module: '../pages/exports/exports.module#ExportsModule'
        },
        gstReturn: {
            route: 'gstReturn',
            name: 'GstReturn',
            absoluteRoute: '/gstReturn',
            module: '../pages/gst-return-filing/gst-return-filing.module#GstReturnFilingModule'
        },
        paymentReceipt: {
            route: 'paymnetReceipt',
            name: 'PaymnetReceipt',
            absoluteRoute: '/paymnetReceipt',
            module: '../pages/payment-receipt/payment-receipt.module#PaymentReceiptModule'
        },
        report: {
            route: 'report',
            name: 'Report',
            absoluteRoute: '/report',
            module: '../pages/report/report.module#ReportModule'
        }
    }