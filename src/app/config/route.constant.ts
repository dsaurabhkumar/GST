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
            module: '../pages/settings/settings.module#SettingsModule',
            children : {
                organisation: {
                    editOrganisation: {
                        route: 'edit-organisation',
                        name: 'Edit-organisation',
                        absoluteRoute: '/settings/edit-organisation'
                    }
                },
                user: {
                    editUser: {
                        route: 'edit-user',
                        name: 'Edit-user',
                        absoluteRoute: '/settings/edit-user'
                    }
                },
                invoice: {
                    editInvoice: {
                        route: 'edit-invoice',
                        name: 'Edit-invoice',
                        absoluteRoute: '/settings/edit-invoice'
                    }
                }
            }
        },
        customers: {
            route: 'customers',
            name: 'Customers',
            absoluteRoute: '/customers',
            module: '../pages/customers/customers.module#CustomersModule',
            children : {
                customerComp: {
                    addNewDetails: {
                        route: 'add-new-customer',
                        name: 'Add-new-customer',
                        absoluteRoute: '/customers/add-new-customer'
                    },
                }
            }
        },
        transport: {
            route: 'transport',
            name: 'Transport',
            absoluteRoute: '/transport',
            module: '../pages/transport/transport.module#TransportModule',
            children: {
                transportCharges: {
                    route: 'transportCharges',
                    name: 'TransportCharges',
                    absoluteRoute: '/transport/transportCharges'
                },
                addNewTransport: {
                    route: 'add-new-transport',
                    name: 'Add-new-transport',
                    absoluteRoute: '/transport/add-new-transport'
                },
                addNewTransportCharges: {
                    route: 'add-new-transport-charges',
                    name: 'AddNewTransportCharges',
                    absoluteRoute: '/transport/add-new-transport-charges'
                },
                editTransportList: {
                    route:"edit-transport-list",
                    name:'Edit-transport-list',
                    absoluteRoute:'/transport/edit-transport-list'
                }
            }
        },
        products : {
            route: 'products',
            name: 'Products',
            absoluteRoute: '/products',
            module: '../pages/products/products.module#ProductsModule',
            children: {
                stock: {
                    route: 'stock',
                    name: 'Stock',
                    absoluteRoute: '/products/stock'
                },
                addnewPro: {
                    route: 'add-new-product',
                    name: 'Add-new-product',
                    absoluteRoute: '/products/add-new-product'
                }
            }
        },
        saleInvoice: {
            route: 'saleInvoice',
            name: 'SaleInvoice',
            absoluteRoute: '/saleInvoice',
            module: '../pages/sale-invoice/sale-invoice.module#SaleInvoiceModule',
            children: {
                addnewInvoiceDetails: {
                    route: 'add-new-invoice-list',
                    name: 'Add-new-invoice-list',
                    absoluteRoute: '/saleInvoice/add-new-invoice-list'
                }
            }
        },
        purchaseInvoice: {
            route: 'purchaseInvoice',
            name: 'PurchaseInvoice',
            absoluteRoute: '/purchaseInvoice',
            module: '../pages/purchase-invoice/purchase-invoice.module#PurchaseInvoiceModule',
            children: {
                addNewPurchaseInv: {
                    route: 'add-new-purchase-invoice',
                    name: 'Add-new-purchase-invoice',
                    absoluteRoute: '/purchaseInvoice/add-new-purchase-invoice'
                }
            }
        },
        dailyExpense: {
            route: 'dailyExpense',
            name: 'DailyExpense',
            absoluteRoute: '/dailyExpense',
            module: '../pages/daily-expense/daily-expense.module#DailyExpenseModule',
            children: {
                addNewDailyExp: {
                    route: 'add-new-daily-expense',
                    name: 'Add-new-daily-expense',
                    absoluteRoute: '/dailyExpense/add-new-daily-expense'
                }
            }
        },
        otherDocs: {
            route: 'otherDocs',
            name: 'OtherDocs',
            absoluteRoute: '/otherDocs',
            module: '../pages/other-documents/other-documents.module#OtherDocumentsModule',
            children: {
                quotation: {
                    route: 'quotation',
                    name: 'Quotation',
                    absoluteRoute: '/otherDocs/quotation'
                },
                proformaInvoice: {
                    route: 'proforma-invoice',
                    name: 'Proforma-invoice',
                    absoluteRoute: '/otherDocs/proforma-invoice'
                },
                purchaseOrder: {
                    route: 'purchase-order',
                    name: 'Purchase-order',
                    absoluteRoute: '/otherDocs/purchase-order'
                },
                creditNote: {
                    route: 'credit-note',
                    name: 'Credit-note',
                    absoluteRoute: '/otherDocs/credit-note'
                },
                debitNote: {
                    route: 'debit-note',
                    name: 'Debit-note',
                    absoluteRoute: '/otherDocs/debit-note'
                }
            }
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
            module: '../pages/report/report.module#ReportModule',
            children: {
                purchase: {
                    route: 'purchase',
                    name: 'Purchase',
                    absoluteRoute: '/report/purchase'
                },
                inwardPayment: {
                    route: 'inward-payment',
                    name: 'Inward-payment',
                    absoluteRoute: '/report/inward-payment'
                },
                outwardPayment: {
                    route: 'outward-payment',
                    name: 'Outward-payment',
                    absoluteRoute: '/report/outward-payment'
                },
                companyLedger: {
                    route: 'company-ledger',
                    name: 'Company-ledger',
                    absoluteRoute: '/report/company-ledger'
                },
                dailyExpense: {
                    route: 'daily-expense',
                    name: 'Daily-expense',
                    absoluteRoute: '/report/daily-expense'
                },
                salesProductReport: {
                    route: 'sales-product-report',
                    name: 'Sales-product-report',
                    absoluteRoute: '/report/sales-product-report'
                },
                purchaseProductReport: {
                    route: 'purchase-product-report',
                    name: 'Purchase-product-report',
                    absoluteRoute: '/report/purchase-product-report'
                },
                salesOutstandingReport: {
                    route: 'sales-outstanding-report',
                    name: 'Sales-outstanding-report',
                    absoluteRoute: '/report/sales-outstanding-report'
                },
                purchaseOutstandingReport: {
                    route: 'purchase-outstanding-report',
                    name: 'Purchase-outstanding-report',
                    absoluteRoute: '/report/purchase-outstanding-report'
                }

            }
        }
    }