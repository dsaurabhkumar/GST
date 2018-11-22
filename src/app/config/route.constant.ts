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
                addNewDeliveryChallan: {
                    route: 'delivery-challan/add-new-delivery-challan',
                    name: 'Add-new-delivery-challan',
                    absoluteRoute: '/otherDocs/delivery-challan/add-new-delivery-challan'
                },
                quotation: {
                    route: 'quotation',
                    name: 'Quotation-base',
                    absoluteRoute: '/otherDocs/quotation'
                },
                addNewQuotation: {
                    route: 'quotation/add-new-quotation-base',
                    name: 'Add-new-quotation-base',
                    absoluteRoute: '/otherDocs/quotation/add-new-quotation-base'
                },
                proformaInvoice: {
                    route: 'proforma-invoice',
                    name: 'Proforma-invoice',
                    absoluteRoute: '/otherDocs/proforma-invoice'
                },
                addNewproformaInvoice: {
                    route: 'proforma-invoice/add-new-proforma-base',
                    name: 'Add-new-proforma-invoice',
                    absoluteRoute: '/otherDocs/proforma-invoice/add-new-proforma-base'
                },
                purchaseOrder: {
                    route: 'purchase-order',
                    name: 'Purchase-order',
                    absoluteRoute: '/otherDocs/purchase-order'
                },
                addNewPurchaseOrder: {
                    route: 'purchase-order/add-new-purchase-order-base',
                    name: 'Add-new-purchase-order-base',
                    absoluteRoute: '/otherDocs/purchase-order/add-new-purchase-order-base'
                },
                creditNote: {
                    route: 'credit-note',
                    name: 'Credit-note',
                    absoluteRoute: '/otherDocs/credit-note'
                },
                addNewCreditNote: {
                    route: 'credit-note/add-new-credit-note-base',
                    name: 'Add-new-credit-note-base',
                    absoluteRoute: '/otherDocs/credit-note/add-new-credit-note-base'
                },
                debitNote: {
                    route: 'debit-note',
                    name: 'Debit-note',
                    absoluteRoute: '/otherDocs/debit-note'
                },
                addNewDebitNote: {
                    route: 'debit-note/add-new-debit-note-base',
                    name: 'Add-new-debit-note-base',
                    absoluteRoute: '/otherDocs/debit-note/add-new-debit-note-base'
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
            route: 'paymentReceipt',
            name: 'PaymentReceipt',
            absoluteRoute: '/paymentReceipt',
            module: '../pages/payment-receipt/payment-receipt.module#PaymentReceiptModule',
            children : {
                inwardPaymentReceipt: {
                    route: 'inward-payment-receipt-sales',
                    name: 'Inward-payment-receipt-sales',
                    absoluteRoute: '/paymentReceipt/inward-payment-receipt-sales'
                },
                outwardPaymentReceipt: {
                    route: 'outward-payment-receipt-purcahse',
                    name: 'Outward-payment-receipt-purcahse',
                    absoluteRoute: '/paymentReceipt/outward-payment-receipt-purcahse'
                },
                addPaymentReceipt : {
                    route: 'add-new-payment-receipt',
                    name: 'Add-new-payment-receipt',
                    absoluteRoute: '/paymentReceipt/add-new-payment-receipt'
                },
                addOutwardPaymentReceipt : {
                    route: 'add-new-out-payment-receipt',
                    name: 'Add-new-out-payment-receipt',
                    absoluteRoute: '/paymentReceipt/add-new-out-payment-receipt'
                }
            }
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